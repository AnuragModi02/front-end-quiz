<template>
  <div
    class="wrapper"
    v-if="!isAnyQuizSelected"
  >
    <Welcome></Welcome>
  </div>
  <div
    v-else
    class="wrapper"
  >
    <div class="questionnaire">
      <Questions></Questions>
      <Answers></Answers>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import Questions from './questionnaire/QuestionsComponent.vue';
import Answers from './questionnaire/AnswersComponent.vue';
import Welcome from './WelcomeComponent.vue';

export default {
  components: {
    Questions,
    Answers,
    Welcome
  },
  computed: {
    ...mapGetters({
      selectedQuiz: 'quizOptions/selectedQuiz',
    }),
    isAnyQuizSelected() {
      return this.selectedQuiz != null;
    },
  }
}
</script>

<style scoped>
.questionnaire {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  height: 100%;
  color: white;
}

.wrapper {
  height: 564px;
}
</style>
