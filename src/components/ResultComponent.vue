<template>
    <div class="result-container">
        <div>
            <p class="quiz-completed">Quiz Completed</p>
            <p class="scored">You scored...</p>
        </div>
        <div class="score-container">
            <div class="score">
                <SelectedComponentMeta></SelectedComponentMeta>
                <p class="final-score">{{ score }}</p>
                <p class="out-of"> out of {{ totalQuestionNumberForCurrentlySelectedCategory }}</p>
            </div>
            <button
                class="button"
                @click="reloadPage"
            >
                <p>Play Again</p>
            </button>
        </div>
    </div>
</template>

<script>
import SelectedComponentMeta from './SelectedComponentMeta.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        SelectedComponentMeta
    },
    computed: {
        ...mapGetters({
            score: 'quizOptions/score',
            totalQuestionNumberForCurrentlySelectedCategory: 'quizOptions/totalQuestionNumberForCurrentlySelectedCategory'
        }),
    },
    methods: {
        reloadPage() {
            window.location.reload(); // Reload the current page
        }
    }
}
</script>

<style scoped>
.result-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    height: 100%;
    color: white;
}

.quiz-completed {
    font-size: 64px;
    text-align: start;
}

.scored {
    font-size: 64px;
    font-weight: bolder;
    text-align: start;
}

.score-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 30px;
}

.score {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-color: #3B4D66;
    width: 100%;
    border-radius: 20px;
    justify-content: center;
    max-height: 388px;
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
    width: 100%;
}

.button:hover {
    cursor: pointer;
}

.final-score {
    font-size: 144px;
    font-weight: bolder;
}

.out-of {
    font-size: 24px;
    color: #ABC1E1
}

@media(max-width:1400px) {
    .result-container {
        grid-template-columns: 1fr;
    }

    .quiz-completed {
        font-size: 40px;
    }

    .scored {
        font-size: 40px;
    }

    .final-score {
        font-size: 88px;
    }

    .out-of {
        font-size: 18px;
    }

    .button {
        height: 56px;
        border-radius: 10px;
        font-size: 18px;
    }

    .result-container {
        grid-template-rows: auto 1fr;
        grid-row-gap: 50px;
    }

    .result-container p {
        text-align: center;
    }

    .score {
        justify-content: space-evenly;
        max-height: 300px;
    }
}
</style>