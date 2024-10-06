const quizOptions = {
    namespaced: true,

    state: () => ({ 
      selectedQuiz: null,
      logoDetails: [{ }],
      totalQuestionNumberForCurrentlySelectedCategory: 0,
      score: 0,
      isAllQuestionsAnswered: false
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
      updateScore(state, value){
        state.score = !value ? state.score + 1 : value;
      },
      setIsAllQuestionsAnswered(state, value){
        state.isAllQuestionsAnswered = value;
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
      updateScore(context, value = 0){
        context.commit('updateScore', value);
      },
      updateSetIsAllQuestionsAnswered(context, value){
        context.commit('setIsAllQuestionsAnswered', value);
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
      },
      isAllQuestionsAnswered(state){
        return state.isAllQuestionsAnswered;
      }
    }
  };
  
  export default quizOptions;