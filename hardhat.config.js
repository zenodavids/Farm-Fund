require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config({ path: '.env' })
require('@nomiclabs/hardhat-etherscan')

// const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL
// const ACCOUNT_2_PRIVATE_KEY = process.env.ACCOUNT_2_PRIVATE_KEY
// const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY

const { POLYGONSCAN_KEY, ACCOUNT_2_PRIVATE_KEY, QUICKNODE_HTTP_URL } =
  process.env

module.exports = {
  solidity: '0.8.0',
  // networks for deploying the smart contract
  networks: {
    // polygon testnet
    mumbai: {
      url: QUICKNODE_HTTP_URL,
      accounts: [ACCOUNT_2_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
}
