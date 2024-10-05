const quizOptions = {
    namespaced: true,

    state: () => ({ 
      selectedQuiz: null,
      logoDetails: [{ }],
      currentQuestionNumber: 1
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
      },
      currentQuestionNumber(state){
        state.currentQuestionNumber += 1;
      }
    },

    actions: { 
      setSelectedQuiz(context, value) {
        context.commit('setSelectedQuiz', value);
      },
      setLogoDetails(context, value){
        context.commit('setLogoDetails', value);
      },
      currentQuestionNumber(context,value){
        context.commit('currentQuestionNumber', value);
      }
    },

    getters: { 
      selectedQuiz(state) {
        return state.selectedQuiz;
      },
      logoDetails(state){
        return state.logoDetails;
      },
      currentQuestionNumber(state){
        return state.currentQuestionNumber;
      }
    }
  };
  
  export default quizOptions;