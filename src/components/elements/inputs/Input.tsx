import React, {Ref} from 'react'
import styled from 'styled-components'

export interface IInputProps extends React.ComponentPropsWithRef<'input'> {
  className?: string
  startAdornment?: string | JSX.Element | JSX.Element[]
  endAdornment?: string | JSX.Element | JSX.Element[]
  innerRef?: Ref<HTMLInputElement>
}

const Input = ({className, startAdornment, endAdornment, innerRef, ...rest}: IInputProps) => {
  return (
    <Box
      className={className}
      onClick={(e: any) => {
        const input = e.target.children[0]
        if (input) input.focus()
      }}
    >
      {startAdornment && <div className="adornment">{startAdornment}</div>}
      <input ref={innerRef} {...rest} />
      {endAdornment && <div className="adornment">{endAdornment}</div>}
    </Box>
  )
}

export default React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return <Input innerRef={ref} {...props} />
})

const Box = styled.section`
  width: 100%;
  cursor: text;
  max-height: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-bottom: solid 1px #4d4d4d;
  :focus,
  :focus-within,
  :active {
    border-color: #273a6e;
  }
  input {
    width: 100%;
    max-height: 22px;
    line-height: 22px;
    ::placeholder {
      color: #4d4d4d;
    }
  }
`
