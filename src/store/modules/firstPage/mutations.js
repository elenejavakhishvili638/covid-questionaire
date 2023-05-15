export default {
    setFirstPage(state, payload) {
        state.identification[payload.name] = payload.value
        localStorage.setItem('identification', JSON.stringify(state));
    }
}