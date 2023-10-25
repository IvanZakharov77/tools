<template>
  <div>
    <SettingsAuto/>
  </div>
</template>

<script setup>
import {onMounted, onBeforeUnmount, ref } from 'vue';
import handleResize from "./helpers/handleResize";
import SettingsAuto from './components/SettingsAuto.vue';



onMounted(() => {
	handleResize();
  window.addEventListener('resize', handleResize);

});

onBeforeUnmount(() => {
	window.removeEventListener('resize', handleResize);
});
</script>

<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
body::-webkit-scrollbar {
  display: none;
}
</style>