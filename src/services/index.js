import axios from '../config/axios'

export async function postCovidForm(data) {
  try {
    await axios.post('create', data)
  } catch (error) {
    console.log(error)
  }
}
