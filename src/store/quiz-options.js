const quizOptions = {
    namespaced: true,

    state: () => ({ 
      selectedQuiz: null,
      logoDetails: [{ }],
      currentQuestionNumber: 1,
      selectedAnswer: 0,
      isCurrentQuestionAnswered: false,
      totalQuestionNumberForCurrentlySelectedCategory: 0
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
      },
      setSelectedAnswer(state, value){
        state.selectedAnswer = value;
      },
      setIsCurrentQuestionAnswered(state, value){
        state.isCurrentQuestionAnswered = value;
      },
      setTotalQuestionNumberForCurrentlySelectedCategory(state, value){
        state.totalQuestionNumberForCurrentlySelectedCategory = value;
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
      },
      setSelectedAnswer(context,value){
        context.commit('setSelectedAnswer', value);
      },
      setIsCurrentQuestionAnswered(context,value){
        context.commit('setIsCurrentQuestionAnswered', value);
      },
      setTotalQuestionNumberForCurrentlySelectedCategory(context,value){
        context.commit('setTotalQuestionNumberForCurrentlySelectedCategory', value);
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
      },
      selectedAnswer(state){
        return state.selectedAnswer;
      },
      isCurrentQuestionAnswered(state){
        return state.isCurrentQuestionAnswered;
      },
      totalQuestionNumberForCurrentlySelectedCategory(state){
        return state.totalQuestionNumberForCurrentlySelectedCategory;
      }
    }
  };
  
  export default quizOptions;