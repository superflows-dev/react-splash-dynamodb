# react-splash-dynamodb

> A splash screen component from the sign in flow, uses dynamodb as the backend

[![NPM](https://img.shields.io/npm/v/react-splash-dynamodb.svg)](https://www.npmjs.com/package/react-splash-dynamodb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Note

This component is under active development. Expect frequent updates.

## Overview

This is a single page responsive component that provides the splash screen functionality, in a password-less otp based sign in flow. It validates the local login state with the backend (dynamodb).

<img width="300" src="https://user-images.githubusercontent.com/108924653/179990628-02f1fb63-b30d-4db0-8eb9-93f78471d07d.png">


## Install

```bash
npm install --save react-splash-dynamodb
```
Then install the dependencies.

## Dependencies

```bash
npm install --save aws-sdk
npm install --save bootstrap
npm install --save react-bootstrap
npm install --save react-dynamodb-helper
npm install --save react-ses-helper
npm install --save react-ui-components-superflows
```
Review the configuration now.

## Configuration

### AWS DynamoDB

This component uses dynamodb as the backend. Please create a table as follows:

- Name: Account_Credentials
- Partition Key: email
- Sort Key: none

Create a sample record for testing as follows:
- email: some_valid_email
- firstName: some_firstname
- lastName: some_lastname
- tokens: string array

### AWS Credentials

AWS region, secret and access key form the credentials. These are required to use this package. It is crucial that these credentials are given the following permissions: 
- Create, Update, Delete, View permissions for the Account_Credentials table in dynamodb

## Usage

```jsx
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Splash } from 'react-splash-dynamodb'

const App = () => {

  function processCredentials(result) {
    console.log(result);
  }

  return  (
  
    <Splash  
      imageUrl="https://****************/superflows_black.png" 
      imageAlt="This is a test image"
      onSubmitResult={processCredentials}
      awsRegion="aws_region"
      awsSecret="aws_secret"
      awsKey="aws_key"
      email="hrus*************le@gmail.com"
      token="bde54a36-17fb-415d-bafa-f55452fe96c6"
    />

  )
}

export default App

```

## Tests

```bash

PASS src/index.test.js
  ✓ Render (85ms)
  ✓ No credentials (6ms)
  ✓ Credentials present, token not present on server, token present locally (4ms)
  ✓ Credentials present, token present on server, token present locally (3ms)
  ✓ Credentials present, token present on server, corrupt token present locally (4ms)

-------------|----------|----------|----------|----------|-------------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------|----------|----------|----------|----------|-------------------|
All files    |    95.24 |    71.43 |      100 |    94.12 |                   |
 index.js    |      100 |    71.43 |      100 |      100 |       21,24,26,32 |
 services.js |       75 |      100 |      100 |       75 |                15 |
-------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        3.839s
Ran all test suites.

```



## License

MIT © [superflows-dev](https://github.com/superflows-dev)
