<template>
    <div class="answer-container">
        <QuizOptions
            :index=1
            :text=currentOptions[0]
            background-color="white"
            left-text="A"
            :is-questionnaire="true"
            :selectedAnswer="this.selectedAnswer"
            :current-question-number="currentQuestionNumber"
            :is-current-question-answered="isCurrentQuestionAnswered"
            @updateSelectedAnswer="updateSelectedAnswer"
        ></QuizOptions>
        <QuizOptions
            :index=2
            :text=currentOptions[1]
            background-color="white"
            left-text="B"
            :is-questionnaire="true"
            :selectedAnswer="this.selectedAnswer"
            :current-question-number="currentQuestionNumber"
            :is-current-question-answered="isCurrentQuestionAnswered"
            @updateSelectedAnswer="updateSelectedAnswer"
        ></QuizOptions>
        <QuizOptions
            :index=3
            :text=currentOptions[2]
            background-color="white"
            :is-questionnaire="true"
            left-text="C"
            :selectedAnswer="this.selectedAnswer"
            :current-question-number="currentQuestionNumber"
            :is-current-question-answered="isCurrentQuestionAnswered"
            @updateSelectedAnswer="updateSelectedAnswer"
        ></QuizOptions>
        <QuizOptions
            :index=4
            :text=currentOptions[3]
            background-color="white"
            left-text="D"
            :is-questionnaire="true"
            :selectedAnswer="this.selectedAnswer"
            :current-question-number="currentQuestionNumber"
            :is-current-question-answered="isCurrentQuestionAnswered"
            @updateSelectedAnswer="updateSelectedAnswer"
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
        >
            <p>Next Question</p>
        </button>
        <div
            class="validation"
            v-if="!isCurrentQuestionAnswered && this.isSubmitAttempted && this.selectedAnswer == 0"
        >
            <img
                :src="require('../../assets/images/icon-error.svg')"
                alt="Error Icon"
            >
            <p> please select an answer</p>
        </div>
    </div>
</template>

<script>
import QuizOptions from '../QuizOptions.vue';
import { mapGetters } from 'vuex';
import questionnaire from '@/data';

export default {
    props: {
        currentQuestionNumber: Number,
    },
    components: {
        QuizOptions
    },
    data() {
        return {
            questionnaire: questionnaire,
            selectedAnswer: 0,
            isCurrentQuestionAnswered: false,
            isSubmitAttempted: false
        }
    },
    computed: {
        ...mapGetters({
            selectedQuiz: 'quizOptions/selectedQuiz',
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
        },
    },
    methods: {
        setIsCurrentQuestionAnswered() {
            this.isSubmitAttempted = true;
            if (this.selectedAnswer > 0) {
                this.isCurrentQuestionAnswered = true;
            }
        },
        loadNextQuestion() {

            if (this.isLastQuestion && this.isCurrentQuestionAnswered) {
                return this.$store.dispatch('quizOptions/updateSetIsAllQuestionsAnswered', true);
            }

            this.$emit("updateCurrentQuestion");
            this.selectedAnswer = 0;
            this.isCurrentQuestionAnswered = false;
            this.isSubmitAttempted = false;
        },
        updateSelectedAnswer(value) {
            this.selectedAnswer = value;
        },
    }
}

</script>

<style scoped>
.answer-container {
    width: 564px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: flex-start;
    width: 100%;
}

.button {
    height: 92px;
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

.validation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #F4F6FA;
    font-size: 24px;
}


@media (max-width: 1400px) {
    .answer-container {
        height: 100%;
    }
}

@media(max-width: 800px) {
    .button {
        font-size: 18px;
        height: 64px;
    }

    .validation {
        font-size: 18px;
    }

    .validation img {
        height: 32px;
        width: 32px;
    }
}
</style>