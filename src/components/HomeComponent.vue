<template>
  <div class="background-container">
    <div class="container">
      <div
        class="header"
        :style="{ 'justify-content': headerJustifyContent }"
      >
        <SelectedComponentMeta v-if="selectedQuiz" />
        <ToggleComponent />
      </div>
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Assessments from './AssessmentsComponent.vue';
import Welcome from './WelcomeComponent.vue';
import ToggleComponent from './ToggleComponent.vue';
import SelectedComponentMeta from './SelectedComponentMeta.vue';

export default {
  components: {
    Welcome,
    Assessments,
    ToggleComponent,
    SelectedComponentMeta
  },

  data() {
    return {
      justifycontent: 'flex-end'
    }
  },

  computed: {
    ...mapGetters({
      selectedQuiz: 'quizOptions/selectedQuiz',
    }),
    isAnyQuizSelected() {
      return this.selectedQuiz != null;
    },
    headerJustifyContent() {
      return this.selectedQuiz ? 'space-between' : 'flex-end';
    },
  }
}
</script>

<style scoped>
.home-wrapper {
  height: 636px;
}


.background-container {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(/src/assets/images/pattern-background-desktop-dark.svg);
  background-size: cover;
}

.container {
  max-width: 1160px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-auto-rows: auto 1fr;
  justify-content: normal;
  gap: 70px;
  padding: 40px;
}

.header {
  display: flex;
  align-items: center;
  height: 56px;
}

@media(max-width:800px) {
  .container {
    gap: 40px;
  }
}
</style>
