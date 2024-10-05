<template>
    <div>
        <img
            :src="imageSrc"
            :style="{ backgroundColor: backgroundStyle }"
        >
        <h2> {{ this.selectedQuiz }}</h2>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            selectedQuiz: 'quizOptions/selectedQuiz',
            logoDetails: 'quizOptions/logoDetails'
        }),
        imageSrc() {
            return this.logoDetails.find(x => x.name == this.selectedQuiz).backgroundImage;
        },
        backgroundStyle() {
            return this.logoDetails.find(x => x.name == this.selectedQuiz).backgroundColor;
        }
    },
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 25px;
}

img {
    height: 56px;
    width: 56px;
    border-radius: 5px;
    padding: 5px;
}

h2 {
    font-size: 28px;
    color: white;
    align-self: center;
    font-weight: bolder;
}
</style>