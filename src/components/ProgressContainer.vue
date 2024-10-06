<template>
    <div>
        <div class="progress-container">
            <div
                class="progress-bar"
                :style="{ width: calculateWidth }"
            ></div>
        </div>
    </div>
</template>

<script>
import questionnaire from '@/data';
import { mapGetters } from 'vuex';

export default {
    props: {
        currentQuestionNumber: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            questionnaire: questionnaire
        };
    },
    computed: {
        ...mapGetters({
            selectedQuiz: 'quizOptions/selectedQuiz',
            selectedAnswer: 'quizOptions/selectedAnswer',
        }),
        questionnaireByCategory() {
            const category = this.questionnaire.find(x => x.title === this.selectedQuiz);
            return category ? category.questions : [];
        },
        totalQuestions() {
            return this.questionnaireByCategory.length;
        },
        calculateWidth() {
            const width = (this.currentQuestionNumber / this.totalQuestions) * 100;
            return isNaN(width) ? '0%' : `${width}%`;
        }
    }
}
</script>

<style>
.progress-container {
    width: 100%;
    height: 8px;
    position: relative;
    background-color: #3B4D66;
}

.progress-bar {
    height: 100%;
    background-color: #A729F5;
    position: absolute;
    transition: width 0.3s;
    padding: 5px;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
}
</style>
