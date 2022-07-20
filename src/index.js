import React, { useEffect } from 'react'
import { useState } from "react";
import { VSpace, InputOtp, LogoMast, AlertError, ButtonNext, ButtonTimer, AlertSuccess, InfoBlock, Footnote } from 'react-ui-components-superflows';
import * as DynamoDB from  'react-dynamodb-helper';
import { version } from '../package.json'
import Services from './services';
import { Col, Row, Button, Container } from 'react-bootstrap';
import styles from './styles.module.css'

export const Splash = (props) => {

  useEffect(() => {

    async function checkCredentials() {

      const resultCredentials = await Services.getCredentials(props.awsRegion, props.awsSecret, props.awsKey, props.email);

      if(resultCredentials.Item != null) {
        const tokens = resultCredentials.Item.tokens;
        if(tokens == null) {
          if(props.onSubmitResult != null) props.onSubmitResult(false);
        } else {
          if(tokens.includes(props.token)) {
            if(props.onSubmitResult != null) props.onSubmitResult(true);
          } else {
            if(props.onSubmitResult != null) props.onSubmitResult(false);
          }
        }
        
      } else {
        
        if(props.onSubmitResult != null) props.onSubmitResult(false);
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
