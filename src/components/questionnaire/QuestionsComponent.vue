<template>
    <div class="question-wrapper">
        <div class="question-container">
            <div class="question-number">
                <p>Question {{ currentQuestionNumber }} of {{ totalQuestions }}</p>
            </div>
            <div class="main-question">
                <h1>{{ currentQuestion }}</h1>
            </div>
            <div class="progress">
                <ProgressContainer :current-question-number="currentQuestionNumber" />
            </div>
        </div>
        <Answers
            :current-question-number="currentQuestionNumber"
            @updateCurrentQuestion="updateCurrentQuestion"
        />
    </div>
</template>

<script>
import questionnaire from '@/data';
import { mapGetters } from 'vuex';
import ProgressContainer from '../ProgressContainer.vue';
import Answers from './AnswersComponent.vue';

export default {
    components: {
        ProgressContainer,
        Answers,
    },
    data() {
        return {
            questionnaire: questionnaire,
            currentQuestionNumber: 1,
        };
    },
    computed: {
        ...mapGetters({
            selectedQuiz: 'quizOptions/selectedQuiz',
        }),
        questionnaireByCategory() {
            const category = this.questionnaire.find(x => x.title === this.selectedQuiz);
            return category ? category.questions : [];
        },
        totalQuestions() {
            const totalQuestions = this.questionnaireByCategory.length;
            this.$store.dispatch('quizOptions/setTotalQuestionNumberForCurrentlySelectedCategory', totalQuestions);
            return totalQuestions;
        },
        currentQuestion() {
            return this.questionnaireByCategory[this.currentQuestionNumber - 1]?.question || '';
        }
    },
    methods: {
        updateCurrentQuestion() {
            this.currentQuestionNumber += 1;
        },
    }
}
</script>

<style scoped>
.question-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    height: 100%;
    color: white;
}

.question-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    justify-items: start;
    row-gap: 30px;
    width: 465px;
    height: 465px;
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

.progress {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
}
</style>
