<template>
  <div class="settings-auto">
      <ColorsList v-if="changeButtonStore.markers === 'painting'"/>
      <AllTools v-if="changeButtonStore.markers === 'allTools' || changeButtonStore.markers === 'painting'"/>
      <DiskList v-if="changeButtonStore.markers === 'disk'" />
      <Donat_t v-if="changeButtonStore.markers === 'efficientdynamics'" />
      <Bumper v-if="changeButtonStore.markers === 'bumper'" />
      <Back_bump v-if="changeButtonStore.markers === 'back-bump'" />
      <Nitro v-if="changeButtonStore.markers === 'nitro'" />
      <Pack v-if="changeButtonStore.markers === 'pack'" />
      <Spoiler v-if="changeButtonStore.markers === 'spoiler'" />
      <Krugina v-if="changeButtonStore.markers === 'krugina'" />
      <Vinil v-if="changeButtonStore.markers === 'vinil'" />
      <Exhaust v-if="changeButtonStore.markers === 'exhaust'" />
      <Avtosvet v-if="changeButtonStore.markers === 'avtosvet'" />
      <Toning v-if="changeButtonStore.markers === 'toning'" />
      <Rgb_colors v-if="changeButtonStore.markers === 'rgb_colors'" />
      <!-- ремонт авто -->
      <div style="font-size: 50px; color: white; text-align: center;" v-if="changeButtonStore.markers === 'hammer'">
        РЕМОНТ
        </div>
        <!--  -->
  </div>
</template>

<script setup>
import ColorsList from './ColorsList.vue';
import AllTools from './AllTools.vue';
import DiskList from './DiskList.vue';
import Donat_t from './Donat_t.vue';
import Bumper from './Bumper.vue';
import Back_bump from './Back_bump.vue';
import Nitro from './Nitro.vue';
import Pack from './Pack.vue';
import Spoiler from './Spoiler.vue';
import Krugina from './Krugina.vue';
import Vinil from './Vinil.vue';
import Exhaust from './Exhaust.vue';
import Avtosvet from './Avtosvet.vue';
import Toning from './Toning.vue';
import Rgb_colors from './Rgb_colors.vue';
import { useChangeButtonStore } from './stores/ChangeButton';
    const changeButtonStore = useChangeButtonStore();
</script>

<style scoped>
.settings-auto {
    width: 100vw;
    height: 100vh;
    display: block;
    background-color: #5C5C5C;
}
</style>