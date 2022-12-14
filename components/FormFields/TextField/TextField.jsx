import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: 1.5rem;
`
const StyledLabel = styled.label`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.primary};
`

const TextField = ({ label, onChange, type = 'text', placeholder = '', value = '' }) => {
  const id = React.useId()
  return (
    <div>
      <StyledLabel htmlFor={id}>{label}: </StyledLabel>
      <StyledInput type={type} id={id} onChange={onChange} placeholder={placeholder} value={value}/>
    </div>
  )
}

export default TextField
