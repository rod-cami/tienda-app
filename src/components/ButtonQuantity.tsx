import { Button, ButtonGroup } from '@nextui-org/react'
import { type ButtonProps } from '../types/types.d'

export const ButtonQuantity = ({ quantity, setQuantity, maxQuantity}: ButtonProps): JSX.Element => {
  const decreaseQuantity = (): void => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1))
  }

  const increaseQuantity = (): void => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  return (
    <ButtonGroup>
      <Button className='cursor-pointer bg-white text-gray-900 shadow-sm border text-2xl fw-bolder' onClick={decreaseQuantity}>-</Button>
      <Button className='cursor-not-allowed pointer-events-none bg-white text-gray-900 shadow-sm border text-xl fw-bolder'>{quantity}</Button>
      <Button className={quantity !== maxQuantity ? 'cursor-pointer bg-white text-gray-900 shadow-sm border text-2xl fw-bolder' : 'cursor-not-allowed pointer-events-none bg-white text-gray-900 shadow-sm border text-2xl fw-bolder'} onClick={increaseQuantity}>+</Button>
    </ButtonGroup>
  )
}
