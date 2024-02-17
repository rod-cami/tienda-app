export interface Customer {
  name: string
  dni: number
}

export interface CreditCard {
  name: string
  dni: number
  cardNumber: number
  dateEx: Date
  cvc: number
}
