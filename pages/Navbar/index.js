import Link from 'next/link'
import React from 'react'
import { Section, Wrap } from '../Styled/Navbar'

function index() {
  return (
    <Wrap>
      <Section>
      <h4>Practo</h4>
     <Link href='/login' >SignIn</Link>
      </Section>
    </Wrap>
  )
}

export default index