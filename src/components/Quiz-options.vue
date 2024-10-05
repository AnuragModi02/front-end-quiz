<template>
    <div
        v-on:click="onClick(this.text)"
        class="options-or-images"
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
        <h3>{{ text }}</h3>
    </div>
</template>

<script>

export default {
    props: {
        text: String,
        backgroundColor: String,
        isQuestionnaire: Boolean,
        leftText: String
    },

    mounted() {
        this.setLogoDetails();
    },

    computed: {
        imageUrl() {
            const icons = {
                HTML: require('@/assets/images/icon-html.svg'),
                CSS: require('@/assets/images/icon-css.svg'),
                JavaScript: require('@/assets/images/icon-js.svg'),
                Accessibility: require('@/assets/images/icon-accessibility.svg')
            };

            return icons[this.text] || null; // Return null if no matching icon
        }
    },
    methods: {
        onClick(quizType) {
            if (!this.isQuestionnaire) {
                this.$store.dispatch('quizOptions/setSelectedQuiz', quizType);
            }

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
}

div:hover {
    cursor: pointer;
}

h3 {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 10px;
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