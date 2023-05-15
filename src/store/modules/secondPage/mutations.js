export default {
    setSecondPage(state, payload) {
        if (payload.name === 'had_covid' && (payload.value === 'no' || payload.value === 'have_right_now')) {
            state.questionnaire.had_antibody_test = null;
            state.questionnaire.covid_date = null;
            state.questionnaire.antibodies = {
                test_date: "",
                number: null
            };
        }

        if (payload.name === 'had_antibody_test' && payload.value === 'false') {
            state.questionnaire.antibodies = {
                test_date: "",
                number: null
            };
        }

        if (payload.name === 'had_antibody_test' && payload.value === 'true') {
            state.questionnaire.covid_date = null;
        }


        localStorage.setItem('questionnaire', JSON.stringify(state));
    }
}
