<template>
    <div v-on:click="setSelectedQuiz(this.text)">
        <img
            :src="imageUrl"
            :style="{ backgroundColor: backgroundColor }"
        >
        <h3>{{ text }}</h3>
    </div>
</template>

<script>

export default {
    props: {
        text: String,
        backgroundColor: String
    },

    mounted() {
        this.setLogoDetails();
    },

    computed: {
        imageUrl() {
            const icons = {
                HTML: require('@/assets/images/icon-html.svg'),
                CSS: require('@/assets/images/icon-css.svg'),
                Javascript: require('@/assets/images/icon-js.svg'),
                Accessibility: require('@/assets/images/icon-accessibility.svg')
            };

            return icons[this.text] || null; // Return null if no matching icon
        }
    },
    methods: {
        setSelectedQuiz(quizType) {
            this.$store.dispatch('quizOptions/setSelectedQuiz', quizType);
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
}

div {
    height: 96px;
    display: flex;
    align-items: center;
    gap: 30px;
    border-radius: 20px;
    background-color: #3B4D66;
    padding-left: 20px;
}

div:hover {
    cursor: pointer;
}

h3 {
    height: 28px;
}
</style>