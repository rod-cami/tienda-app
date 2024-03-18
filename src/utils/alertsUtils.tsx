export const alertText = (cadena: string): string => {
  const partes = cadena.split(':') || cadena
  const textoDespuesDeDosPuntos = partes[1].trim()
  return textoDespuesDeDosPuntos
}
