import React, {useRef} from 'react'
import styled, {StyledComponentProps} from 'styled-components'

export interface ModalProps {
  title?: string
  onClose: () => void
}

function Modal({title, open, onClose, children, ...rest}: ModalProps & StyledComponentProps<any, any, any, any>) {
  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <Wrapper
      ref={modalRef}
      onClick={(event) => {
        if (modalRef.current === event.target) onClose()
      }}
      {...rest}
    >
      <ModalWrapper>
        <ModalTitle>
          {title}
          <CloseButton onClick={onClose}>close</CloseButton>
        </ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </Wrapper>
  )
}

export default Modal

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);
`

const ModalWrapper = styled.section`
  position: relative;
`

const ModalTitle = styled.h1`
  height: fit-content;
`

const CloseButton = styled.button`
  position: absolute;
  right: 24px;
`

const ModalContent = styled.section`
  height: fit-content;
`
