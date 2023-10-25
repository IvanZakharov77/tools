<template>
    <ButtonCloseMenuTools/>
    <div class="block-tools">
      <ul ref="list" @wheel="handleScroll" >
        <button  @click.prevent=""  class="tools" v-for="neon in neons" :key="neon.id" :style='{backgroundColor: neon.fonBlock}'>
            <li>
                <div class="block-rhombus" :style='{backgroundColor: neon.fonRomb}'>
                    <img class="img-tool" :src="neon.imageSrc" :alt="neon.body">
                </div>
                <p class="text-tools">{{ neon.body }}
                    <span  class="text-info">{{ neon.info }}</span>
                </p>
            </li>
        </button>
      </ul>
      </div>
</template>

<script setup>
import {ref} from 'vue'
import ButtonCloseMenuTools from './ButtonCloseMenuTools.vue';
import neon from '../assets/img/tools/neon.png';
              const  neons = [
                    {id: 0, imageSrc: neon, body: 'НЕОН', ladel: 'neon', fonBlock: '#FFB524', fonRomb: 'rgba(37, 35, 32, 0.92)',
                    info: 'Доступно 19 шт.'},
                    { id: 1, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 2, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 3, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 4, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 5, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 6, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 7, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 8, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 9, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 10, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 11, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 12, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 13, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 14, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 15, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 16, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 17, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 18, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                    { id: 19, imageSrc: neon, body: 'НАЙМЕНУВАННЯ' },
                ];
                const list = ref(null); 

const handleScroll = (event) => {
  if (list.value) {
    list.value.scrollLeft += event.deltaY;
    event.preventDefault();
  }
};

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
    border: none;
}
.tools li {
    display: flex;
}
.block-rhombus {
	position: relative;
    width: calc(67.48px * var(--sw));
    height: calc(67.48px * var(--sw));
    background-color: #FFB524;
    border-radius: calc(10px * var(--sw));
    left: calc(90px * var(--sw));
    margin-top: calc(75px * var(--sw));
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
  flex-wrap: nowrap;
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
    text-align: center;
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
    font-size: calc(35px * var(--sw));
    font-style: normal;
    font-weight: 600;
    line-height: 1;
    color: white;
    white-space: pre-wrap;
}
</style>