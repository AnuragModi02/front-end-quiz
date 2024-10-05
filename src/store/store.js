import { createStore } from 'vuex';
import quizOptions from './quiz-options';

const store = createStore({
  modules: {
    quizOptions,
  },
});

export default store;