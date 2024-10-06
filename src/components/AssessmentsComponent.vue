<template>
    <div class="assessment-container">
        <Result v-if="isAllQuestionsAnswered"></Result>
        <Questions v-else />
    </div>
</template>

<script>
import Questions from './questionnaire/QuestionsComponent.vue';
import Result from './ResultComponent.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        Questions,
        Result
    },
    computed: {
        ...mapGetters({
            isAllQuestionsAnswered: 'quizOptions/isAllQuestionsAnswered'
        }),
    }
}
</script>

<style scoped>
.assessment-container {
    height: 100%;
}
</style>
