// SPDX-License-Identifier: MIT
// specifies the license for the contract

pragma solidity 0.8.0;
// sets the version of the Solidity compiler to use

contract FarmFund {
// defines the main FarmFund contract

    address public fundManager;
    // public variable to store the address of the contract's fund manager

    struct Investment {
    // struct to store investment information
        uint investmentId;
        // unique identifier for each investment
        address investorAddress;
        // address of the investor making the investment
        uint startDate;
        // start date of the investment
        uint maturityDate;
        // maturity date of the investment
        uint interestRate;
        // interest rate of the investment
        uint investedToken;
        // amount invested in the investment
        uint investmentInterest;
        // interest earned on the investment
        bool open;
        // boolean indicating whether the investment is still open or has been closed
    }

    Investment investment;
    // creates an instance of the Investment struct

    uint public currentInvestmentId;
    // public variable to store the current investment ID
    uint[] investmentDuration;
    // array to store the investment durations

    mapping (uint=> Investment) public investments;
    // mapping to store all the investments by ID
    mapping (address => uint[]) public investmentIdsByAddress;
    // mapping to store investment IDs by investor address
    mapping (uint => uint) public lifeTime;
    // mapping to store interest rates by investment duration

    constructor () payable {
    // constructor function that gets executed once when the contract is deployed
        fundManager = msg.sender;
        // sets the fund manager to be the address of the person who deployed the contract
        currentInvestmentId = 0;
        // initializes the current investment ID to 0

        lifeTime[90] = 200;
        lifeTime[180] = 500;
        lifeTime[365] = 1200;
        // sets the interest rates for investments with durations of 90, 180, and 365 days

        investmentDuration.push(90);
        investmentDuration.push(180);
        investmentDuration.push(365);
        // pushes the investment durations onto the investmentDuration array
    }

    function invest(uint numDays) external payable {
    // function for investors to make investments
        require(lifeTime[numDays] > 0, 'No Investment Duration');
        // checks that the investment duration is valid

        investments[currentInvestmentId] = Investment(
        // creates a new instance of the Investment struct with the given parameters
            currentInvestmentId,
            msg.sender,
            block.timestamp,
            block.timestamp + (numDays * 1 days),
            lifeTime[numDays],
            msg.value,
            calculateInvestmentInterest(lifeTime[numDays], msg.value),
            true
        );

        investmentIdsByAddress[msg.sender].push(currentInvestmentId);
        // adds the new investment ID to the list of investments made by the investor
        currentInvestmentId += 1;
        // increments the current investment ID
    }

    function calculateInvestmentInterest(uint basisPoints, uint amountInWei) private pure returns(uint) {
    // function to calculate the interest earned on an investment
        require(amountInWei > 0, 'Invalid amount');
        // checks that the investment amount is valid

        uint totalInterest = basisPoints * amountInWei / 10000;
        // calculates the total interest earned on the investment

        return totalInterest;
        // returns the total interest earned
   

    }

function modifyInvestmentDuration(uint numDays, uint basisPoints) external {
    require (fundManager == msg.sender, "Only fund Manager can modify Investment Duration");
    // Check if the caller is the fund manager, if not, throw an exception

    lifeTime[numDays] = basisPoints;
    // Set the interest rate basis points for the specified investment duration in days
    investmentDuration.push(numDays);
    // Add the specified investment duration in days to the list of investment durations
}

function getInvestmentDuration() external view returns(uint [] memory) {
    return investmentDuration;
    // Return the list of investment durations
}

function getInterestRate(uint numDays) external view returns(uint) {
    return lifeTime[numDays];
    // Return the interest rate basis points for the specified investment duration in days
}

function retrieveInvestment (uint investmentId) external view returns (Investment memory) {
    return investments[investmentId];
    // Return the investment details for the specified investment ID
}

function getUserAddressInvestmentId(address investorAddress) external view returns(uint[] memory) {
    return investmentIdsByAddress[investorAddress];
    // Return the list of investment IDs for the specified investor address
}

function setNewMaturityDate(uint investmentId, uint newMaturityDate) external {
    require (fundManager == msg.sender, "Only fund Manager can modify unlock dates");
    // Check if the caller is the fund manager, if not, throw an exception
    require(investments[investmentId].open == true, 'Investment is closed');
    // Check if the investment is open, if not, throw an exception
    require(newMaturityDate > investments[investmentId].maturityDate, 'New unlock date must be after the current unlock date');
    // Check if the new maturity date is after the current maturity date, if not, throw an exception
    investments[investmentId].maturityDate = newMaturityDate;
    // Set the new maturity date for the specified investment ID
}

modifier onlyNonEmptyAddress(address addr) {
    require(addr != address(0), "Address cannot be empty");
    _;
}

function endInvestment(uint investmentId) external onlyNonEmptyAddress(msg.sender)  {
    require(investments[investmentId].investorAddress == msg.sender, 'only investment creator may modify investment');
    // Check if the caller is the investment creator, if not, throw an exception
    require(investments[investmentId].open == true, 'Investment is closed');
    // Check if the investment is open, if not, throw an exception
    investments[investmentId].open = false;
    // Close the specified investment
    uint totalAmount = 0;
    // Initialize the total amount variable to 0


        // check if the current time is after the maturity date of the investment
        if (block.timestamp > investments[investmentId].maturityDate) {
            // calculate the total amount by adding the invested tokens and the investment interest
            totalAmount = investments[investmentId].investedToken + investments[investmentId].investmentInterest;
        } else {
            // if the investment is not yet mature, the total amount is equal to the invested tokens
            totalAmount = investments[investmentId].investedToken;
        }

        // reset the invested token and investment interest to zero
        investments[investmentId].investedToken = 0;
        investments[investmentId].investmentInterest = 0;

        // ensure that the total amount to be returned is greater than zero
        require(totalAmount > 0, "Investment amount is zero");

        // transfer the total amount to the investor's address
        (bool success, ) = payable(msg.sender).call{value: totalAmount}('');
        require(success, "Failed to send ether");
    }
}

