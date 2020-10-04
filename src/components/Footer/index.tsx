import React from 'react'

import Container from 'components/Container'

import * as S from './styles'
import { FooterProps } from 'types/api'

const Footer = ({ description }: FooterProps) => (
  <S.Wrapper>
    <Container>
      <S.Text dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  </S.Wrapper>
)

export default Footer
