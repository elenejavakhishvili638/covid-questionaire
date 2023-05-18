import router from '@/router'
import axios from 'axios'

export default {
  async submit(context, payload) {
    let convertedPayload = JSON.parse(JSON.stringify(payload))

    if (convertedPayload.covid_sickness_date) {
      const parts = convertedPayload.covid_sickness_date.split('/')
      convertedPayload.covid_sickness_date = `${parts[2]}-${parts[1]}-${parts[0]}`
    }

    if (convertedPayload.antibodies && convertedPayload.antibodies.test_date) {
      const parts = convertedPayload.antibodies.test_date.split('/')
      convertedPayload.antibodies.test_date = `${parts[2]}-${parts[1]}-${parts[0]}`
    }

    convertedPayload.had_antibody_test = convertedPayload.had_antibody_test === 'true'
    convertedPayload.had_vaccine = convertedPayload.had_vaccine === 'true'

    convertedPayload.number_of_days_from_office = Number(
      convertedPayload.number_of_days_from_office
    )

    try {
      const response = await axios.post('https://covid19.devtest.ge/api/create', convertedPayload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 201) {
        router.push('/thank-you')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
