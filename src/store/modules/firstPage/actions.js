export default {
  getFirstPage(context, data) {
    const formData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email
    }

    context.commit('setFirstPage', {
      ...formData
    })
  }
}
