# Merklebase SDK

## Introduction

The Merklebase SDK is a software development kit that provides a convenient way to interact with the Merklebase API. This SDK simplifies the integration process and offers a set of methods for managing accounts, balances, entities, links, markets, tokens, and common functionality.

## Installation

To use the Merklebase SDK, follow these steps:

1. Install Node.js on your system.
2. Create a new directory for your project.
3. Open a terminal and navigate to the project directory.
4. Run the following command to initialize a new Node.js project:
   `npm init -y`

5. Install the Merklebase SDK by running the following

   `npm install merklebase-sdk`

## Getting Started

To start using the Merklebase SDK, import the SDK and initialize it with your API key. Here's an example of how to use the SDK:

```
import MerklebaseAPI from 'merklebase-sdk';

// Initialize the SDK with your API key
const apiKey = 'YOUR_API_KEY';
const merklebase = new MerklebaseAPI(apiKey);

// Example: Get accounts
const userToken = 'USER_TOKEN';

try {
    const { accounts } = await merklebase.accounts.get(userToken);
} catch(error) {
    console.log(error);
}

```

## API Reference

The Merklebase SDK provides the following interfaces and methods:

### Accounts

`get(userToken: string): Promise<any>:`

Retrieves the accounts associated with the user.

### Balances

`get(userToken: string): Promise<any>:`

Retrieves the balances of the user's accounts.

### Common

`supportedCurrencies(): Promise<any>:`

Retrieves the list of supported currencies.

`supportedProviders(): Promise<any>:`

Retrieves the list of supported providers.

### Entities

`get(userToken: string): Promise<any>`

Retrieves the entities associated with the user.

`create(userToken: string, entity: IEntitiesParams): Promise<any>`

Creates a new entity.

`update(userToken: string, id: string, entity: IEntitiesParams): Promise<any>`

Updates an existing entity.

`remove(userToken: string, id: string): Promise<any>:`

Removes an entity.

### Links

`get(userToken: string): Promise<any>`

Retrieves the links associated with the user.

`connect(userToken: string, link: ILinksProps): Promise<any>`

Connects a link to the user's account.

`disconnect(userToken: string, id: string): Promise<any>`

Disconnects a link from the user's account.

`refresh(userToken: string, id: string): Promise<any>`

Refreshes a link's data.

`generate.ed25519(): Promise<any>`

Generates an ed25519 link.

`generate.rsacsr(): Promise<any>`

Generates an rsacsr link.

### Markets

`prices(userToken: string): Promise<any>`

Retrieves market prices.

### Tokens

`create(userToken: string): Promise<any>`

Creates a new token.

##### Please refer to the official API documentation for detailed information about each method and its parameters.

## Example Usage

Here's an example that demonstrates how to use multiple methods from the Merklebase SDK:

### Example 1: Retrieve Supported Currencies

```import MerklebaseAPI from 'merklebase-sdk';

// Initialize the SDK with your API key
const apiKey = 'YOUR_API_KEY';
const merklebase = new MerklebaseAPI(apiKey);

async function retrieveSupportedCurrencies() {
  try {
    const currencies = await merklebase.common.supportedCurrencies();
    console.log('Supported Currencies:', currencies);
  } catch (error) {
    console.error('Error:', error);
  }
}

retrieveSupportedCurrencies();
```
