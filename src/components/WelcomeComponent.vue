<template>
  <div class="welcome-wrapper">
    <div class="welcome-container">
      <div class="text-section">
        <div class="text">
          <div class="welcome-text-container">
            <p class="welcome-text-row-1">Welcome to the </p>
            <p class="welcome-text-row-2">Frontend Quiz! </p>
          </div>
          <p class="pick-a-subject">Pick a subject to get started.</p>
        </div>
      </div>
      <div class="quiz-options">
        <QuizOptions
          :index=1
          text="HTML"
          background-color="#FFF1E9"
          :is-questionnaire=false
        >
        </QuizOptions>
        <QuizOptions
          :index=2
          text="CSS"
          background-color="#E0FDEF"
          :is-questionnaire=false
        >
        </QuizOptions>
        <QuizOptions
          :index=3
          text="JavaScript"
          background-color="#EBF0FF"
          :is-questionnaire=false
        >
        </QuizOptions>
        <QuizOptions
          :index=4
          text="Accessibility"
          background-color="#F6E7FF"
          :is-questionnaire=false
        >
        </QuizOptions>
      </div>
    </div>
  </div>
</template>

<script>
import QuizOptions from './QuizOptions.vue';
export default {
  components: {
    QuizOptions
  },
}
</script>

<style scoped>
.welcome-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  height: 100%;
  color: white;
}

.text-section {
  text-align: start;
  width: 465px;
}

.text {
  width: 453px;
  display: flex;
  flex-direction: column;
  gap: 42px;
}

.pick-a-subject {
  font-size: 20px;
  color: #ABC1E1;
}

.welcome-text-row-1 {
  font-weight: lighter;
}

.welcome-text-row-2 {
  font-weight: bolder;
}

.welcome-text-container {
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 62px;
}

.quiz-options {
  width: 564px;
  height: 456px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
}
</style>