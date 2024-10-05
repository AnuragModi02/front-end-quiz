<template>
    <div class="wrapper">
        <div class="container">
            <div class="question-number">
                <p>Question {{ this.currentQuestionNumber }} of {{ totalQuestions }}</p>
            </div>
            <div class="main-question">
                <h1>{{ currentQuestion }}</h1>
            </div>
            <div class="div"></div>
        </div>
    </div>
</template>

<script>
import questionnaire from '@/data';
import { mapGetters } from 'vuex';

export default {
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
        totalQuestions() {
            return this.questionnaireByCategory.length;
        },
        currentQuestion() {
            return this.questionnaireByCategory[this.currentQuestionNumber].question;
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 465px;
}

.container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    justify-items: start;
    row-gap: 30px;
    width: 465px;
}

.question-number p {
    color: #ABC1E1;
    font-size: 20px;
}

.main-question h1 {
    color: white;
    font-size: 36px;
    text-align: start;
    font-weight: bolder;
}
</style>