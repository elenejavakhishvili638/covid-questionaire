import { defineRule } from 'vee-validate'

defineRule('required', (value) => {
  if (!value || !value.length) {
    return 'ველი აუცილებელია'
  }
  return true
})

defineRule('email', (value) => {
  const regex = /@redberry\.ge$/
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!value) {
    return 'ველი აუცილებელია'
  } else if (!regexEmail.test(value)) {
    return 'თქვენ მიერ შეყვანილი მეილი არასწორია'
  } else if (!regex.test(value)) {
    return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
  }
  return true
})

defineRule('minLength', (value, name) => {
  if (value.length < 3) {
    return `${name} ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`
  }
  return true
})

defineRule('inGeo', (value, name) => {
  const georgianRegex = /^[\u10A0-\u10FF\s]+$/

  if (!georgianRegex.test(value)) {
    return `${name} ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`
  }

  return true
})

defineRule('covidDate', (value) => {
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/

  if (value.length > 0) {
    const match = dateRegex.exec(value)
    if (!match) {
      return 'გამოიყენეთ სწორი ფორმატი - დდ/თთ/წწ'
    } else {
      const day = parseInt(match[1], 10)
      const month = parseInt(match[2], 10)

      if (month < 1 || month > 12) {
        return 'გამოიყენეთ სწორი თვე (01-12)'
      }

      if (day < 1 || day > 31) {
        return 'გამოიყენეთ სწორი დღე (01-31)'
      }
    }
  }

  return true
})
