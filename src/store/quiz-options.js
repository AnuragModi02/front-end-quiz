const quizOptions = {
    namespaced: true,

    state: () => ({ 
      selectedQuiz: '',
      logoDetails: [{ }]
    }),

    mutations: { 
      setSelectedQuiz(state, selectedQuiz) {
        state.selectedQuiz = selectedQuiz;
      },
      setLogoDetails(state, value) {
        state.logoDetails.push(
            {   name : value.name, 
                backgroundColor: value.backgroundColor,
                backgroundImage: value.backgroundImage
            });
      }
    },

    actions: { 
      setSelectedQuiz(context, value) {
        context.commit('setSelectedQuiz', value);
      },
      setLogoDetails(context, value){
        context.commit('setLogoDetails', value);
      }
    },

    getters: { 
      selectedQuiz(state) {
        return state.selectedQuiz;
      },
      logoDetails(state){
        return state.logoDetails;
      }
    }
  };
  
  export default quizOptions;