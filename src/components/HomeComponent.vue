<template>
  <div
    class="home-wrapper"
    v-if="!isAnyQuizSelected"
  >
    <Welcome></Welcome>
  </div>
  <div
    v-else
    class="assessment-wrapper"
  >
    <Assessments></Assessments>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import Assessments from './AssessmentsComponent.vue';
import Welcome from './WelcomeComponent.vue';

export default {
  components: {
    Welcome,
    Assessments
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
.home-wrapper {
  height: 564px;
}

.assessment-wrapper {
  height: 564px;
}
</style>
