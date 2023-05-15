export default {
    async getSecondPage(context,  payload) {
        context.commit('setSecondPage',  payload)
    }
}