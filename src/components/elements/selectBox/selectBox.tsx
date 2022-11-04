import React, {HTMLProps, useMemo} from 'react'
import styled, {StyledComponentProps} from 'styled-components'

export interface IOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'value'> {
  key?: string | number
  value: any
  label: string
}

export interface ISelectProps extends StyledComponentProps<'select', any, any, any> {
  placeholder?: string
  options: IOptionProps[] | string[]
  onSelect?: (value: any) => void
  endAdornment?: string | JSX.Element | JSX.Element[]
}

function SelectBox({placeholder, options, onSelect, endAdornment, ...rest}: ISelectProps) {
  const defaultValue = useMemo(() => {
    const index = options.findIndex((option) => {
      if (typeof option === 'string') return option === rest.defaultValue
      return option.value === rest.defaultValue
    })

    if (index > 0) return index
    return undefined
  }, [options, rest.defaultValue])

  return (
    <Box>
      <StyledSelect
        {...rest}
        defaultValue={defaultValue || 'placeholder'}
        onChange={(e) => {
          e.target.style.color = 'black'
          const select = options[Number(e.target.value)]
          if (onSelect) onSelect(typeof select === 'string' ? select : select.value)
        }}
      >
        {placeholder && (
          <option value="placeholder" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => {
          return (
            <option key={`option_${index}`} value={index}>
              {typeof option === 'string' ? option : option.label}
            </option>
          )
        })}
      </StyledSelect>
      {endAdornment && <div className="adornment">{endAdornment}</div>}
    </Box>
  )
}

export default SelectBox

const Box = styled.section`
  width: 100%;
  cursor: pointer;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 1px solid #4d4d4d;
  padding-right: 12px;
`

const StyledSelect = styled.select`
  padding: 12px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
  font-size: 16px;
  color: #4d4d4d;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  :focus-visible {
    outline: none;
    border-color: #273a6e;
  }
`
