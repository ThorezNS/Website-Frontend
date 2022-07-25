import React from 'react'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { inputState } from 'utilities/hooks'
import config from '../../../config.json'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

const CodePage = () => {
  const codeState = inputState()
  const router = useRouter()
  const { message } = router.query
  return <>
    <Heading>Enter the code emailed to you</Heading>
    <Paragraph>{message}</Paragraph>
    <TextField label="Code" {...codeState}></TextField>
    <Button onClick={
      async function () {
        const res = await fetch(`${config.env.FRONTEND_DOMAIN}/api/account/exchangeCode?code=${codeState.value}`)

        const statusCode = res.status

        if (statusCode !== 200) {
          router.push({
            pathname: '/account/login/enterCode',
            query: { message: 'Authentication failed' }
          })
        } else {
          const response = await res.json()
          sessionStorage.setItem('apikey', response.apikey)
          router.push({
            pathname: '/',
            query: { justLoggedIn: true }
          })
        }
      }
    } text="Login" />
  </>
}

export default CodePage