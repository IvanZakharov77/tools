<template>
    <div class="btn-shop" :class="{
        'rest-menu': changeButtonStore.markers != 'painting',
        'colors-menu': changeButtonStore.markers === 'painting'}
        ">
        <button class="btn-back"  @click.prevent="changeBtn">НАЗАД</button>
        <button class="btn-buy" @click.prevent="sendingDataNameTool">ПРИДБАТИ</button>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import { useChangeButtonStore, useNameTool } from './stores/ChangeButton';
import uCef from '../cef';

const MODE = computed(() => {
  return import.meta.env.MODE
});

let changeButtonStore = '';
changeButtonStore = useChangeButtonStore();

    const changeBtn = () => {
        const store = useChangeButtonStore()
        store.markers = 'allTools';
    };
    const  sendingDataNameTool = () => {
        const store = useNameTool()
        uCef.triggerEvent(store.sectionName, store.toolMarkerName)
    }
</script>

<style scoped lang="scss">
.btn-shop{
    position: absolute;
    left: 0;
    z-index: 1;
}
.rest-menu {
    bottom: calc(240px * var(--sw));
}
.colors-menu {
    bottom: calc(356px * var(--sw));
}
.btn-back {
    margin-left: calc(35px * var(--sw));
    width: calc(174px * var(--sw));
    height: calc(62px * var(--sw));
    border-radius: calc(4px * var(--sw));
    background:linear-gradient(110deg, #387DBD, #4298E8);
    border: none;
    font-size: calc(25px * var(--sw));
    font-weight: 700;
    color: white;
    cursor: pointer;
}
.btn-buy {
    margin-left: calc(1450px * var(--sw));
    width: calc(221px * var(--sw));
    height: calc(62px * var(--sw));
    border-radius: 4px;
    background:linear-gradient(110deg, #DEC542, #ECBF1E);
    border: none;
    font-size: calc(25px * var(--sw));
    font-weight: 700;
    color: white;
    cursor: pointer;
}
</style>