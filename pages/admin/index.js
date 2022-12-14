import React from 'react'
import AuthenticatedArea from 'components/AuthenticatedArea'
import AuthContext from 'components/AuthenticatedArea/context'
import Paragraph from 'components/Paragraph'
import Link from '../../components/Link'

const Index = () => {
  return <AuthenticatedArea forceLogin>
    <Paragraph>Hello Next.js</Paragraph>
    <AuthContext.Consumer>{value => <>
      <Paragraph>Would you like to <Link href="/admin/upload">Upload a video</Link>?</Paragraph>
    </>}</AuthContext.Consumer>
  </AuthenticatedArea>
}

export default Index
