import { useState } from 'react'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PaymentInfoModal } from './PaymentInfoModal'
import { type CardProps } from '../types/types.d'

export const PaymentCard = ({ name, icon }: CardProps): JSX.Element => {
  // Initial stat of show and card
  const [show, setShow] = useState<boolean>(false)
  const [card] = useState<boolean>(name === 'Tarjeta')

  // Show modal
  const handleShow = (): void => {
    setShow(!show)
  }
  return (
    <>
      <Card shadow="sm" className="py-4 mb-3 w-75 p-2 cursor-pointer inline-flex items-center bg-gray-200 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
      duration-300" isPressable onPress={handleShow}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h4 className="font-bold text-large">{name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <FontAwesomeIcon className="text-5xl" icon={icon} />
        </CardBody>
      </Card>
      <PaymentInfoModal show={show} handleClose={handleShow} card={card}/>
    </>
  )
}
