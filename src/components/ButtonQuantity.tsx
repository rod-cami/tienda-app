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
      <Button className='cursor-pointer bg-white text-gray-900 shadow-sm border' onClick={decreaseQuantity}>-</Button>
      <Button className='cursor-not-allowed pointer-events-none bg-white text-gray-900 shadow-sm border'>{quantity}</Button>
      <Button className={quantity !== maxQuantity ? 'cursor-pointer bg-white text-gray-900 shadow-sm border' : 'cursor-not-allowed pointer-events-none bg-white text-gray-900 shadow-sm border'} onClick={increaseQuantity}>+</Button>
    </ButtonGroup>
  )
}
