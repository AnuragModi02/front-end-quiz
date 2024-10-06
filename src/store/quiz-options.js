const quizOptions = {
    namespaced: true,

    state: () => ({ 
      selectedQuiz: null,
      logoDetails: [{ }],
      totalQuestionNumberForCurrentlySelectedCategory: 0,
      score: 0
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
      setTotalQuestionNumberForCurrentlySelectedCategory(state, value){
        state.totalQuestionNumberForCurrentlySelectedCategory = value;
      },
      updateScore(state){
        state.score = state.score + 1;
      }
    },

    actions: { 
      setSelectedQuiz(context, value) {
        context.commit('setSelectedQuiz', value);
      },
      setLogoDetails(context, value){
        context.commit('setLogoDetails', value);
      },
      setTotalQuestionNumberForCurrentlySelectedCategory(context,value){
        context.commit('setTotalQuestionNumberForCurrentlySelectedCategory', value);
      },
      updateScore(context){
        context.commit('updateScore');
      },
    },

    getters: { 
      selectedQuiz(state) {
        return state.selectedQuiz;
      },
      logoDetails(state){
        return state.logoDetails;
      },
      totalQuestionNumberForCurrentlySelectedCategory(state){
        return state.totalQuestionNumberForCurrentlySelectedCategory;
      },
      score(state){
        return state.score;
      }
    }
  };
  
  export default quizOptions;