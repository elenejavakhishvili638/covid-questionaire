export default {
    setThirdPage(state, payload) {
        if (payload.name === 'had_vaccine' && payload.value === 'true') {
            state.vaccination.what_are_you_waiting = "";
           
        }
        if (payload.name === 'had_vaccine' && payload.value === 'false') {
            state.vaccination.vaccination_stage = "";
           
        }

        state.vaccination[payload.name] = payload.value
        localStorage.setItem('vaccination', JSON.stringify(state));
    }
}
