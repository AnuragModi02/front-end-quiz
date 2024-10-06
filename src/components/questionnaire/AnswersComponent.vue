<template>
    <div class="container">
        <QuizOptions
            :index=1
            :text=currentOptions[0]
            background-color="white"
            left-text="A"
            :is-questionnaire="true"
            :selectedAnswer="this.selectedAnswer"
        ></QuizOptions>
        <QuizOptions
            :index=2
            :text=currentOptions[1]
            background-color="white"
            left-text="B"
            :is-questionnaire="true"
            :selectedAnswer="this.selectedAnswer"
        ></QuizOptions>
        <QuizOptions
            :index=3
            :text=currentOptions[2]
            background-color="white"
            :is-questionnaire="true"
            left-text="C"
            :selectedAnswer="this.selectedAnswer"
        ></QuizOptions>
        <QuizOptions
            :index=4
            :text=currentOptions[3]
            background-color="white"
            left-text="D"
            :is-questionnaire="true"
            :selectedAnswer="this.selectedAnswer"
        ></QuizOptions>
        <button
            class="button"
            v-if="!isCurrentQuestionAnswered"
            v-on:click="setIsCurrentQuestionAnswered()"
        >
            <p>Submit Answer</p>
        </button>
        <button
            class="button"
            v-else
            @click="loadNextQuestion()"
            :disabled="isLastQuestion"
        >
            <p>Next Question</p>
        </button>
    </div>
</template>

<script>
import QuizOptions from '../QuizOptions.vue';
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
            currentQuestionNumber: 'quizOptions/currentQuestionNumber',
            selectedAnswer: 'quizOptions/selectedAnswer',
            isCurrentQuestionAnswered: 'quizOptions/isCurrentQuestionAnswered',
            totalQuestionNumberForCurrentlySelectedCategory: 'quizOptions/totalQuestionNumberForCurrentlySelectedCategory'

        }),
        questionnaireByCategory() {
            return this.questionnaire.find(x => x.title == this.selectedQuiz).questions;
        },
        currentOptions() {
            return this.questionnaireByCategory[this.currentQuestionNumber - 1].options;
        },
        isLastQuestion() {
            return this.currentQuestionNumber >= this.totalQuestionNumberForCurrentlySelectedCategory;
        }
    },
    methods: {
        setIsCurrentQuestionAnswered() {
            this.$store.dispatch('quizOptions/setIsCurrentQuestionAnswered', true);
        },
        loadNextQuestion() {
            // reset the value
            this.$store.dispatch('quizOptions/setIsCurrentQuestionAnswered', false);
            this.$store.dispatch('quizOptions/currentQuestionNumber', this.currentQuestionNumber + 1);
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

.button:hover {
    cursor: pointer;
    caret-color: black;
}
</style>