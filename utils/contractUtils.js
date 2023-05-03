export const OWNER_ADDRESS = '0xc8Bb661fd13c568F79a84ec939fFDB982ff22C80'
export const CONTRACT_ADDRESS = '0x37dD6D4A6325c947c8170C6f92F6483221f7c3d2'
export const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'currentInvestmentId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'investmentId',
        type: 'uint256',
      },
    ],
    name: 'endInvestment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fundManager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numDays',
        type: 'uint256',
      },
    ],
    name: 'getInterestRate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getInvestmentDuration',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'investorAddress',
        type: 'address',
      },
    ],
    name: 'getUserAddressInvestmentId',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numDays',
        type: 'uint256',
      },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'investmentIdsByAddress',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'investments',
    outputs: [
      {
        internalType: 'uint256',
        name: 'investmentId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'investorAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maturityDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'investedToken',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'investmentInterest',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'open',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'lifeTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numDays',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'basisPoints',
        type: 'uint256',
      },
    ],
    name: 'modifyInvestmentDuration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'investmentId',
        type: 'uint256',
      },
    ],
    name: 'retrieveInvestment',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'investmentId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'investorAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'startDate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maturityDate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'investedToken',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'investmentInterest',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'open',
            type: 'bool',
          },
        ],
        internalType: 'struct FarmFund.Investment',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'investmentId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'newMaturityDate',
        type: 'uint256',
      },
    ],
    name: 'setNewMaturityDate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
