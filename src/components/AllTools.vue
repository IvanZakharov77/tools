<template>
    <ButtonExit v-if="changeButtonStore.markers != 'painting'"/>
        <div class="block-tools">
      <ul class="list" ref="list" @wheel="handleScroll">
        <button v-for="tool in tools"
            :key="tool.id"
            class="tools"
            @click="updateStoreText(tool)"
            :style="changeButtonStore.markers === 'painting' ? { backgroundColor: tool.fonBlock } : {}">
            <li :class="{'unavailable' : tool.sup != true}">
                    <div class="block-rhombus"
                    :style="changeButtonStore.markers === 'painting' ? { backgroundColor: tool.fonRomb } : {}">
                        <img class="img-tool" :src="tool.imageSrc" :style="{ width: tool.width }" :alt="tool.body">
                    </div>
                    <p class="text-tools">{{ tool.body }}<br/>
                        <span class="text-info">{{ tool.info }}</span>
                    </p>
            </li>
        </button>
      </ul>
    </div>
</template>

<script setup>
import {ref, onMounted } from 'vue'
import ButtonExit from './ButtonExit.vue';
import balonAzot from '../assets/img/tools/balon.png';
import hammer from '../assets/img/tools/hammer.png';
import bmw_efficientdynamics from '../assets/img/tools/bmw_efficientdynamics.png';
import disk from '../assets/img/tools/disk.png';
import bumper from '../assets/img/tools/bumper.png';
import back_bump from '../assets/img/tools/back-bump.png';
import nitro from '../assets/img/tools/nitro.png';
import pack from '../assets/img/tools/pack.png';
import spoiler from '../assets/img/tools/spoiler.png';
import krugina from '../assets/img/tools/krugina.png';
import vinil from '../assets/img/tools/vinil.png';
import exhaust from '../assets/img/tools/exhaust.png';
import neon from '../assets/img/tools/neon.png';
import avtosvet from '../assets/img/tools/avtosvet.png';
import toning from '../assets/img/tools/toning.png';
import colors from '../assets/img/tools/colors.png';
import { useChangeButtonStore} from './stores/ChangeButton';
import uCef from '../cef';

              const tools = [
                    {id: 1, imageSrc: balonAzot,  body: 'ФАРБУВАННЯ', label: 'painting', fonBlock: '#FFB524', fonRomb: 'rgba(37, 35, 32, 0.92)', info: `Изменение цвета вашего автомобиля`, sup: true},
                    {id: 2, imageSrc: hammer,  body: 'РЕМОНТ ТС', label: 'hammer', sup: true},
                    {id: 3, imageSrc: bmw_efficientdynamics, body: 'ДОНАТ-ТЮНІНГ', label: 'efficientdynamics',
                    info: 'Установка эксклюзивного тюнинга', sup: true},
                    {id: 4, imageSrc: disk, body: 'ДИСКИ', label: 'disk', sup: true},
                    {id: 5, imageSrc: bumper,  body: 'ПЕРЕД. БАМПЕР', label: 'bumper', sup: true},
                    {id: 6, imageSrc: back_bump,  body: 'ЗАД. БАМПЕР', label: 'back-bump', sup: true},
                    {id: 7, imageSrc: nitro,  body: 'НІТРО', label: 'nitro', sup: true},
                    {id: 8, imageSrc: pack,  body: 'ПОРОГИ', label: 'pack', sup: true},
                    {id: 9, imageSrc: spoiler,  body: 'СПОЙЛЕР', label: 'spoiler', sup: true},
                    {id: 10, imageSrc: krugina,  body: 'ГІДРАВЛІКА', label: 'krugina', sup: true},
                    {id: 11, imageSrc: vinil,  body: 'ВІНІЛИ', label: 'vinil', sup: true},
                    {id: 12, imageSrc: exhaust,  body: 'ВИХЛОПНА', label: 'exhaust', sup: true},
                    {id: 13, imageSrc: neon,  body: 'НЕОН', label: 'neon', sup: true},
                    {id: 14, imageSrc: avtosvet,  body: 'КОЛІР ФАР', label: 'avtosvet', sup: true},
                    {id: 15, imageSrc: toning,  body: 'ТОНУВАННЯ', label: 'toning', sup: true},
                    {id: 16, imageSrc: colors,  body: 'RGB КОЛІР', label: 'rgb_colors', sup: true},
                ];

                const list = ref(null);

                const handleScroll = (event) => {
                    if (list.value) {
                        list.value.scrollLeft += event.deltaY;
                        event.preventDefault();
                    }
                };
                const updateStoreText = (marker) => {
                    const store = useChangeButtonStore();
                    store.markers = marker.label;
                    uCef.triggerEvent('serviceStation:eventSelectedInstrument', marker.label)
                };
                const changeButtonStore = useChangeButtonStore()

                onMounted(() => {
                    uCef.addEvent('serviceStation:checkingButtons', (arrLockedBtns) => {
                        tools.forEach(tool => {
                            if (arrLockedBtns.includes(tool.label)) {
                                tool.sup = false;
                            }
                        });
                    });
                });
</script>

<style scoped>
.block-tools  {
    position: absolute;
    width: 100%;
    height: calc(197px * var(--sw));
    padding-top: calc(25px * var(--sw));
    padding-bottom: calc(25px * var(--sw));
    bottom: calc(16px * var(--sw));
    background-color: rgba(28, 28, 28, 0.5);
    z-index: 1;
}
.tools {
    min-width: calc(406px * var(--sw));
    height: calc(150px * var(--sw));
    background-color: rgba(37, 35, 32, 0.92);
    border-radius: calc(10px * var(--sw));
    margin: 0 calc(10.5px * var(--sw)) 0 calc(10.5px * var(--sw));
    list-style: none;
    position: relative;
}
.tools li {
    display: flex;
}
button {
    background-color: #ffffff00;
    border: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
}
.block-rhombus {
	position: relative;
    width: calc(67.48px * var(--sw));
    height: calc(67.48px * var(--sw));
    background-color: #FFB524;
    border-radius: calc(10px * var(--sw));
    margin-top: calc(75px * var(--sw));
    left: calc(80px * var(--sw));
    transform: translate(-50%, -50%) rotate(45deg);
    box-shadow: 0px 0px 40px 20px rgba(255, 189, 20, 0.2);
}
.img-tool{
    position: absolute;
    max-width: calc(174px * var(--sw));
    max-height: calc(91px * var(--sw));
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
}
.block-tools ul {
  min-width: 100%;
  white-space: nowrap;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;
}

.block-tools ul::-webkit-scrollbar {
  display: none;
}

.block-tools ul:active {
  cursor: grabbing;
}
.text-tools {
    text-align: left;
    margin-left: calc(85px * var(--sw));
    margin-top: calc(25px * var(--sw));
    font-family: Akrobat, sans-serif;
    font-size: calc(35px * var(--sw));
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: white;
}
.text-info{
    display: block;
    font-family: Akrobat, sans-serif;
    font-size: calc(20px * var(--sw));
    font-style: normal;
    font-weight: 500;
    line-height: 1;
    color: white;
    white-space: pre-wrap;
}
.unavailable{
    width: 100%;
    height: 100%;
    border-radius: calc(10px * var(--sw));
    background: linear-gradient(0deg, rgba(56, 10, 10, 0.84) 0%, rgba(56, 10, 10, 0.84) 100%), rgba(37, 32, 32, 0.92);
}
.unavailable > div, 
.unavailable > p{
    display: none;
}
.unavailable::before{
    white-space: pre;
    content: 'НЕДОСТУПНО\AНА ВАШЕ АВТО';
    color: white;
    font-family: Akrobat, sans-serif;
    font-size: calc(35px * var(--sw));
    font-style: normal;
    font-weight: 600;
    margin-top: calc(30px * var(--sw));
    margin-left: auto;
    margin-right: auto;
}

</style>