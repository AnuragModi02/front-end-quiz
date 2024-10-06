<template>
    <button
        :disabled="isCurrentQuestionAnswered"
        v-on:click="onClick(this.text)"
        class="options-or-images"
        :style="{ border: borderStyle, height: height }"
    >
        <img
            v-if="!isQuestionnaire"
            :src="imageUrl"
            :style="{ backgroundColor: backgroundColor }"
        >
        <div
            class="left-text"
            v-else
            :style="{ backgroundColor: dynamicBackgroundColor, color: color }"
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
        selectedAnswer: Number,
        currentQuestionNumber: Number,
        isCurrentQuestionAnswered: Boolean
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

            if (!this.isCurrentQuestionAnswered) {
                return '3px solid #A729F5';
            }
            return this.isAnswerCorrect ? '3px solid #26D782' : '3px solid #EE5454';
        },

        dynamicBackgroundColor() {
            if (!this.isCurrentItemSelected) {
                return 'white';
            }
            if (!this.isCurrentQuestionAnswered) {
                return '#A729F5';
            }
            return this.isAnswerCorrect ? '#26D782' : '#EE5454';
        },

        color() {
            if (!this.isCurrentItemSelected) {
                return '#626C7F';
            }
            return 'white';
        },

        isCurrentItemSelected() {
            return this.index == this.selectedAnswer;
        },
        isAnswerCorrect() {
            const selectedOption = this.currentQuestion.options[this.index - 1];
            const isCorrect = selectedOption === this.currentQuestion.answer;

            // console.log('currentQuestion', this.currentQuestion)
            // console.log('selectedOption', selectedOption)
            // console.log('correct', this.currentQuestion.answer)

            return isCorrect;
        },
        currentQuestion() {
            return this.questionnaire.find(x => x.title == this.selectedQuiz).questions[this.currentQuestionNumber - 1];
        },
        height() {
            return this.isQuestionnaire ? '92px' : '96px';
        }
    },
    methods: {
        onClick(quizType) {

            // if it's 'select quiz' screen, then set the selected quiz, reset the values and return
            if (!this.isQuestionnaire) {
                this.$store.dispatch('quizOptions/setSelectedQuiz', quizType);
                return;
            }

            if (this.isAnswerCorrect) {
                this.$store.dispatch('quizOptions/updateScore');
            }

            this.$emit("updateSelectedAnswer", this.index);

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
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    flex-grow: 1;
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

.left-text {
    color: #626C7F;
    font-size: 28px;
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: bolder;
    flex-shrink: 0;
}
</style>