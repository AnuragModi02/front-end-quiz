<template>
    <div>
        <div class="progress-container">
            <div
                class="progess-bar"
                :style="{ width: calculateWidth }"
            >
            </div>
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
            currentQuestionNumber: 'quizOptions/currentQuestionNumber',
            selectedAnswer: 'quizOptions/selectedAnswer',
            isCurrentQuestionAnswered: 'quizOptions/isCurrentQuestionAnswered'
        }),
        questionnaireByCategory() {
            return this.questionnaire.find(x => x.title == this.selectedQuiz).questions;
        },
        totalQuestions() {
            return this.questionnaireByCategory.length;
        },
        calculateWidth() {
            let width = (this.currentQuestionNumber / this.totalQuestions) * 100;
            width = isNaN(width) ? 0 : width;
            return `${width}%`;
        }
    }
}
</script>

<style>
.progress-container {
    width: 100%;
    height: 8px;
    position: relative;
}

.progess-bar {
    width: 100%;
    height: 7px;
    background-color: #A729F5;
    position: absolute;
}
</style>