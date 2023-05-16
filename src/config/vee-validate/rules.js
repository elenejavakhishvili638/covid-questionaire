import { defineRule } from "vee-validate"; 

const requiredRule = defineRule('required', value => {
    if (!value || !value.length) {
      return 'ველი აუცილებელია';
    }
    return true;
  });
  
  const emailRule = defineRule('email', value => {
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
  });
  
  const minLength = defineRule('minLength', (value, name) => {
    if(value.length < 3) {
        return `${name} ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`
    }
    return true
  });

  const inGeo = defineRule('inGeo', (value, name) => {
    const georgianRegex = /^[\u10A0-\u10FF\s]+$/

   if (!georgianRegex.test(value)) {
      return `${name} ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`
    }

    return true
  } )

  const covidDate = defineRule('covidDate', (value) => {
    const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
    if (value.length > 0) {
      if (!dateRegex.test(value)) {
        return "გამოიყენეთ სწორი ფორმატი - დდ/თთ/წწ"
      }
    }
    return true
  })

  
  export default {
    required: requiredRule,
    email: emailRule,
    minLength,
    inGeo,
    covidDate
  };