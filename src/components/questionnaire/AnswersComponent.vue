<template>
    <div class="container">
        <QuizOptions
            :text=currentOptions[0]
            background-color="white"
            left-text="A"
            :is-questionnaire="true"
        ></QuizOptions>
        <QuizOptions
            :text=currentOptions[1]
            background-color="white"
            left-text="B"
            :is-questionnaire="true"
        ></QuizOptions>
        <QuizOptions
            :text=currentOptions[2]
            background-color="white"
            :is-questionnaire="true"
            left-text="C"
        ></QuizOptions>
        <QuizOptions
            :text=currentOptions[3]
            background-color="white"
            left-text="D"
            :is-questionnaire="true"
        ></QuizOptions>
        <button class="button">
            <p>Submit Answer</p>
        </button>
    </div>
</template>

<script>
import QuizOptions from '../Quiz-options.vue';
import { mapGetters } from 'vuex';
import questionnaire from '@/data';

export default {
    components: {
        QuizOptions
    },
    data() {
        return {
            questionnaire: questionnaire
        }
    },
    computed: {
        ...mapGetters({
            selectedQuiz: 'quizOptions/selectedQuiz',
            currentQuestionNumber: 'quizOptions/currentQuestionNumber'
        }),
        questionnaireByCategory() {
            return this.questionnaire.find(x => x.title == this.selectedQuiz).questions;
        },
        currentOptions() {
            console.log(this.questionnaireByCategory)
            return this.questionnaireByCategory[this.currentQuestionNumber].options;
        }
    }
}

</script>

<style scoped>
.container {
    width: 564px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
}

.button {
    height: 96px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    text-align: center;
    background-color: #A729F5;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 28px;
    border: none;
}

.button p {
    width: 205px;
    font-family: MyWebFont;
}
</style>