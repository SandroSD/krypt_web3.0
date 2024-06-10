# Decentralized Application with React and Solidity

![React](https://img.shields.io/badge/ReactJS-v18.2.0-blue.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4.4-black.svg)
![Ethers](https://img.shields.io/badge/Ethers-v6.13.0-red.svg)
![Solidity](https://img.shields.io/badge/Solidity-v0.8.0-green.svg)
![Hardhat](https://img.shields.io/badge/Hardhat-v2.22.5-yellow.svg)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract Details](#smart-contract-details)
- [Environment Variables](#environment-variables)

## Project Overview

**Decentralized Application with React and Solidity** is a web-based application that interacts with the Ethereum blockchain. The front end is developed using React.js and communicates with the blockchain using the Ethers v6 library. Additionally, it consumes the Giphy API to fetch GIFs based on user-provided keywords. The blockchain aspect of the project is implemented using the Hardhat framework.

## Features

- **Blockchain Interaction**: Communicate with Ethereum blockchain via smart contracts.
- **GIF Fetching**: Retrieve and display GIFs based on user-input keywords using the Giphy API.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **State Management**: Efficient state management using React hooks.

## Technologies Used

- **Frontend**: React.js, Vite, pnpm
- **Blockchain**: Solidity, Hardhat
- **Library**: Ethers v6
- **API**: Giphy API
- **Styling**: TailwindCSS (optional)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/SandroSD/krypt_web3.0
   ```

2. **Navigate to the project directory**:

   ```sh
   cd krypt_web3.0
   ```

3. **Install frontend dependencies**:

   ```sh
   pnpm install
   ```

4. **Navigate to the blockchain directory**:

   ```sh
   cd blockchain
   ```

5. **Install blockchain dependencies**:

   ```sh
   pnpm install
   ```

6. **Compile the smart contracts**:

   ```sh
   npx hardhat compile
   ```

7. **Deploy the smart contracts**:

   ```sh
   npx hardhat run scripts/deploy.js --network localhost
   ```

8. **Start the frontend development server**:
   ```sh
   cd ../frontend
   pnpm run dev
   ```

The application will be available at `http://localhost:3000`.

## Usage

1. **Open the application in your browser**.
2. **Connect your Ethereum wallet** (e.g., MetaMask).
3. **Enter a keyword** in the search bar to fetch a GIF from the Giphy API.
4. **Interact with the smart contract** by performing blockchain operations as described in the UI.

## Smart Contract Details

The smart contracts are located in the `contracts` directory within the `blockchain` folder. The main contract `Transactions.sol` is responsible for handling blockchain interactions. Key functionalities include:

- **addToBlockchain()**: counts how many transactions has the user and stores them in the blockchain. Then, it emits an event called Transfer with all the information.
- **getAllTransactions()**: returns all the transactions stored in the blockchain
- **getTransactionCount()**: returns the number of transactions that were performed

## Environment Variables

The project uses environment variables for sensitive information. Create a `.env` file in the root of the frontend directory with the following content:

```env
VITE_GIPHY_API=your_giphy_api_key
```
