<template>
    <div class="toggle-container">
        <img
            class="bright"
            src="../assets/images/icon-sun-light.svg"
        >
        <div class="toggle">
            <div class="toggle-button">

            </div>
        </div>
        <img
            class="dark"
            src="../assets/images/icon-moon-light.svg"
        >
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.toggle-container {
    display: flex;
    gap: 10px;
    align-self: flex-end;
}

.bright .dark {
    height: 24px;
    width: 24px;
}

.toggle {
    width: 48px;
    height: 28px;
    max-height: 28px;
    background-color: #A729F5;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 3px;
    padding-left: 3px;
}

.toggle-button {
    height: 20px;
    background-color: white;
    position: absolute;
    width: 20px;
    border-radius: 50%;
    border: 1px solid white;
}
</style>