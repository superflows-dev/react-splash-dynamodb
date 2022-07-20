import React, { useEffect } from 'react'
import { useState } from "react";
import { VSpace, InputOtp, LogoMast, AlertError, ButtonNext, ButtonTimer, AlertSuccess, InfoBlock, Footnote } from 'react-ui-components-superflows';
import * as DynamoDB from  'react-dynamodb-helper';
import { version } from '../package.json'

import { Col, Row, Button, Container } from 'react-bootstrap';

import styles from './styles.module.css'

export const Splash = (props) => {

  useEffect(() => {

    async function checkCredentials() {

      var paramsCredentials = {
        TableName: "Account_Credentials",
        Key : { 
            "email" : props.email,
        }
      };

      let resultCredentials = await DynamoDB.getData(props.awsRegion, props.awsSecret, props.awsKey, paramsCredentials)
      if(resultCredentials.Item == null) {
        if(props.onSubmitResult != null) props.onSubmitResult(false);
      } else {

        const tokens = resultCredentials.Item.tokens;
        if(tokens.includes(props.token)) {
          if(props.onSubmitResult != null) props.onSubmitResult(true);
        } else {
          if(props.onSubmitResult != null) props.onSubmitResult(false);
        }

      }

    }

    checkCredentials();

  }, [])

  return (
    <Container style={{height: '100vh'}}>
      <Container style={{height: '95vh'}}>
        <Row className='h-100 justify-content-center align-items-center'>
          <Col sm={10} xs={10} md={6} xl={4} xxl={4}>
            <LogoMast imageUrl={props.imageUrl} imageAlt={props.imageAlt} />
          </Col>
        </Row>
      </Container>
      <Container style={{height: '5vh'}}>
      <Row className='h-100 justify-content-center align-items-center'>
          <Col sm={10} xs={10} md={6} xl={4} xxl={4}>
            <Footnote caption={"Version " + version} />
          </Col>
        </Row>
      </Container>
    </Container>
    
  )
}
