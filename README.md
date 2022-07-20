# react-splash-dynamodb

> A splash screen component from the sign in flow

[![NPM](https://img.shields.io/npm/v/react-splash-dynamodb.svg)](https://www.npmjs.com/package/react-splash-dynamodb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-splash-dynamodb
```

## Overview

This component checks if the email and token combination, provided as props exists and is valid in the backend. Result is returned in onSubmitResult.

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

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
