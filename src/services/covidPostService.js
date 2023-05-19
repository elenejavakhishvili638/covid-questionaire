import { covidAPI } from '../config/axios/axiosInstances'

export async function postCovidForm(data) {
  try {
    await covidAPI.post('create', data)
  } catch (error) {
    console.log(error)
  }
}
