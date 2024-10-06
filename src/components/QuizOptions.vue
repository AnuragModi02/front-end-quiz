<template>
    <button
        :disabled="isCurrentQuestionAnswered"
        v-on:click="onClick(this.text)"
        class="options-or-images"
        :style="{ border: borderStyle }"
    >
        <img
            v-if="!isQuestionnaire"
            :src="imageUrl"
            :style="{ backgroundColor: backgroundColor }"
        >
        <div
            class="left-text"
            v-else
        >
            {{ leftText }}
        </div>
        <h3>
            {{ text }}
        </h3>
        <img
            :src="isAnswerCorrect ? require('../assets/images/icon-correct.svg') : require('../assets/images/icon-error.svg')"
            v-if="isQuestionnaire && isCurrentQuestionAnswered && isCurrentItemSelected"
        >
    </button>
</template>

<script>

import { mapGetters } from 'vuex';
import questionnaire from '@/data';

export default {
    props: {
        index: Number,
        text: String,
        backgroundColor: String,
        isQuestionnaire: Boolean,
        leftText: String,
        selectedAnswer: Number
    },

    data() {
        return {
            questionnaire: questionnaire
        }
    },

    mounted() {
        this.setLogoDetails();
    },

    computed: {
        ...mapGetters({
            selectedQuiz: 'quizOptions/selectedQuiz',
            currentQuestionNumber: 'quizOptions/currentQuestionNumber',
            isCurrentQuestionAnswered: 'quizOptions/isCurrentQuestionAnswered'
        }),
        imageUrl() {
            const icons = {
                HTML: require('@/assets/images/icon-html.svg'),
                CSS: require('@/assets/images/icon-css.svg'),
                JavaScript: require('@/assets/images/icon-js.svg'),
                Accessibility: require('@/assets/images/icon-accessibility.svg')
            };

            return icons[this.text] || null; // Return null if no matching icon
        },
        borderStyle() {

            if (!this.isCurrentItemSelected) {
                return 'none';
            }

            return this.isCurrentQuestionAnswered ? '3px solid #26D782' : '3px solid #A729F5';
        },

        isCurrentItemSelected() {
            return this.index == this.selectedAnswer;
        },
        isAnswerCorrect() {
            return this.currentQuestion.options[this.selectedAnswer - 1] == this.currentQuestion.answer;
        },
        currentQuestion() {
            return this.questionnaire.find(x => x.title == this.selectedQuiz).questions[this.currentQuestionNumber - 1];
        }
    },
    methods: {
        onClick(quizType) {

            // if it's 'select quiz' screen, then set the selected quiz and return
            if (!this.isQuestionnaire) {
                this.$store.dispatch('quizOptions/setSelectedQuiz', quizType);
                return;
            }

            this.$store.dispatch('quizOptions/setSelectedAnswer', this.index);

        },
        setLogoDetails() {
            this.$store.dispatch(
                'quizOptions/setLogoDetails',
                {
                    name: this.text,
                    backgroundColor: this.backgroundColor,
                    backgroundImage: this.imageUrl
                })
        }
    }
}
</script>

<style scoped>
img {
    height: 56px;
    width: 56px;
    padding: 5px;
    border-radius: 5px;
}

h3 {
    font-size: 28px;
    font-weight: bolder;
}

.options-or-images {
    height: 96px;
    display: flex;
    align-items: center;
    gap: 30px;
    border-radius: 20px;
    background-color: #3B4D66;
    padding-left: 20px;
    padding-right: 20px;
}

button:hover {
    cursor: pointer;
}

h3 {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-inline: 10px;
    color: white;
    flex-grow: 1;
}

.left-text {
    color: #626C7F;
    font-size: 28px;
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    font-weight: bolder;
}
</style>