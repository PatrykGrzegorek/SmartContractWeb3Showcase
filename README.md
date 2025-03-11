# Sample of a custom Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with my custom contract, a created API, and a custom script module that deploys that contract.

## Functionality Implemented

### Smart Contract Interaction
- **Retrieving Contract Data** (`getMyContractData`): Fetches the contract's name and balance.
- **Updating Contract Balance** (`updateMyContractBalance`): Updates the contract's stored balance.

### Web3 Account Management
- **Fetching Account Balance** (`getAccountBalance`): Retrieves the ETH balance of a specific account.
- **Getting Account Address** (`getAccount`): Returns an Ethereum account address based on an index.

### Gas and Transaction Cost Estimation
- **Calculating ETH Transaction Cost** (`getETHPrice`): Computes the real ETH cost of a transaction based on gas usage and price.

### API Endpoints
- **GET `/`** (`getMyContract`): Returns the current contract data.
- **POST `/`** (`updateMyContract`): Updates the contract balance and returns gas usage, cost in ETH, and the sender's current ETH balance.

Try running some of the following tasks:

```shell
npm install
npx hardhat node
npm run deployMyContract
npm run dev
```
