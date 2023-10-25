<template>
    <div>
        <button class="btn-exit">ВИЙТИ</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.btn-exit {
    position: absolute;
    bottom: calc(240px * var(--sw));
    left: calc(35px * var(--sw));
    width: calc(174px * var(--sw));
    height: calc(62px * var(--sw));
    border-radius: calc(4px * var(--sw));
    background:linear-gradient(110deg, #FC5D5D, #F54242, #EC1E1E);
    border: none;
    font-size: calc(25px * var(--sw));
    font-weight: 700;
    color: white;
    z-index: 1;
}
</style>