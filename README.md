# Smart contract template

A simple smart contract template using hardhat. With solhint, solcover, eslint, typescipt and prettier

## Requirements:

Node.js (https://nodejs.dev/)

Optionally: Pnpm (https://pnpm.io/)

## Config:

Secrets: Rename the secrets.json.dist to secrets.json and put in the values

Config: Change config in config.json

## First:

    pnpm install

## Available Scripts:

### `pnpm run test`

### `pnpm run test:testnet`

Runs tests in the `test` directory, on a local network or on testnet

### `pnpm run compile`

Compiles all the soliidity contracts

### `pnpm run typechain`

Use typechain to generate types for the solidity contracts

### `pnpm run coverage`

Generate code coverage for the contracts

### `pnpm run deploy`

### `pnpm run deploy:testnet`

### `pnpm run deploy:mainnet`

Deploy contracts, deploy scripts in ./deploy/

Can be done on mainnet, testnet, or the local network

### `pnpm run lint`

### `pnpm run lint:fix`

Lints the solidity and typescript code

### `pnpm run format`

### `pnpm run format:fix`

Formats the solidity and typescript code

### `pnpm run verify:testnet <address>`

### `pnpm run verify:mainnet <address>`

Verfies the contracts on etherscan
