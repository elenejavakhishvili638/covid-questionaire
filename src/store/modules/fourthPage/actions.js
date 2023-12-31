import router from '@/router'
import { postCovidForm } from '../../../services'

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

    if (convertedPayload.had_antibody_test) {
      convertedPayload.had_antibody_test = convertedPayload.had_antibody_test === 'true'
    }
    convertedPayload.had_vaccine = convertedPayload.had_vaccine === 'true'

    convertedPayload.number_of_days_from_office = Number(
      convertedPayload.number_of_days_from_office
    )

    try {
      await postCovidForm(convertedPayload)
      router.push('/thank-you')
      localStorage.clear()
    } catch (error) {
      console.log(error)
    }
  }
}
