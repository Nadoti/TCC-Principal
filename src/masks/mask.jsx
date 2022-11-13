export function mascaraDataNascimento(e) {
  e.currentTarget.maxLength = 9
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "").replace(/^(\d{10})/, '$1').replace(/^(\d{5})(\d)/, '$1-$2')
  e.currentTarget.value = value
}

export function mascaraCPF(e) {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "").replace(/^(\d{10})/, '$1').replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4')
  e.currentTarget.value = value
}