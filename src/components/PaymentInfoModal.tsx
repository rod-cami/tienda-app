import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import { type ModalProps } from '../types/types.d'
import { CustomerInformationForm } from './CustomerInformationForm'
import { CreditCardInformationForm } from './CreditCardInformationForm'

interface PaymentInfoModalProps extends ModalProps {
  card: boolean
}
export const PaymentInfoModal = ({ show, handleClose, card }: PaymentInfoModalProps): JSX.Element => {
  return (
    <>
      <Modal size='xl' backdrop='blur' isOpen={show} onClose={handleClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{card ? 'Detalles de facturación' : 'Información del cliente' }</ModalHeader>
              <ModalBody className='mb-2'>
                {
                  card ? <CreditCardInformationForm/> : <CustomerInformationForm/>
                }
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
