// Import the required libraries and contracts
const { ethers } = require('hardhat')
const { expect } = require('chai')

describe('FarmFund contract', function () {
  let farmFund
  let owner
  let investor

  before(async () => {
    // Get the accounts from Hardhat's network
    ;[owner, investor] = await ethers.getSigners()

    // Deploy the FarmFund contract
    const FarmFund = await ethers.getContractFactory('FarmFund')
    farmFund = await FarmFund.deploy({ value: ethers.utils.parseEther('1') })

    // Wait for the contract to be deployed
    await farmFund.deployed()
  })

  it('should allow an investor to invest and get investment details', async () => {
    const farmFund = await FarmFund.deployed()
    const numDays = 10
    const investmentValue = web3.utils.toWei('1', 'ether') // or whatever amount you want to invest
    await farmFund.invest(numDays, {
      value: investmentValue,
      from: accounts[1],
    })
    const investment = await farmFund.getInvestmentDetails(0)
    assert.equal(investment.investor, accounts[1])
    assert.equal(investment.value, investmentValue)
    assert.equal(
      investment.investmentInterest,
      await farmFund.calculateInvestmentInterest(
        lifeTime[numDays],
        investmentValue
      )
    )
  })

  it('should allow the fund manager to modify investment durations', async function () {
    // Call the modifyInvestmentDuration function on the contract
    await farmFund.modifyInvestmentDuration(90, 250)

    // Get the interest rate for a 90-day investment
    const interestRate = await farmFund.getInterestRate(90)

    // Check that the interest rate has been updated
    expect(interestRate).to.equal(250)
  })

  it('should allow an investor to end an investment on maturity and receive the invested tokens plus interest', async function () {
    // Call the invest function on the contract
    await farmFund
      .connect(investor)
      .invest(90, { value: ethers.utils.parseEther('1') })

    // Get the investment IDs for the investor's address
    const investmentIds = await farmFund.investmentIdsByAddress(
      investor.address
    )

    // Call the endInvestmentOnMaturity function on the contract
    const tx = await farmFund
      .connect(investor)
      .endInvestmentOnMaturity(investmentIds[1])

    // Wait for the transaction to be confirmed
    await tx.wait()

    // Check that the investor received the correct amount of tokens
    const balance = await ethers.provider.getBalance(investor.address)
    expect(balance).to.be.closeTo(
      ethers.utils.parseEther('1.002'),
      ethers.utils.parseEther('0.001')
    )
  })
})
