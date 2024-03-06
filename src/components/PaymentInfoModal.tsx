import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import { type PaymentInfoModalProps } from '../types/types.d'
import { CustomerInformationForm } from './CustomerInformationForm'
import { CreditCardInformationForm } from './CreditCardInformationForm'

export const PaymentInfoModal = ({ show, handleClose, card }: PaymentInfoModalProps): JSX.Element => {
  return (
    <>
      <Modal size='3xl' backdrop='blur' isOpen={show} onClose={handleClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{card ? 'Detalles de facturación' : 'Pago en efectivo' }</ModalHeader>
          <ModalBody className='mb-2'>
            {
              card ? <CreditCardInformationForm/> : <CustomerInformationForm/>
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
