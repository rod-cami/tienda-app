import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import { type ModalProps } from '../types/types.d'
import { PaymentCard } from './PaymentCard'
import { faMoneyBills, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export const PaymentModal = ({ show, handleClose }: ModalProps): JSX.Element => {
  return (
    <>
      <Modal size='3xl' backdrop='blur' isOpen={show} onClose={handleClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl fw-bolder">Formas de Pago</ModalHeader>
          <ModalBody>
            <div className='flex'>
              <PaymentCard name='Efectivo' icon={faMoneyBills}/>
              <PaymentCard name='Tarjeta' icon={faCreditCard}/>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
