<template>
    <ButtonCloseMenuTools/>
    <div class="position-list-colors">
        <div class="blocks-colors" >
            <button class="tap-left" @click="selectPreviousColor">
                <svg  width="20" height="31" viewBox="0 0 20 31" class="color-management">
                    <path d="M0.911587 17.5112L15.5674 30.3334C17.2945 31.8466 20 30.6168 20 28.3202L20 2.67582C20.0004 2.16185 19.8527 1.65864 19.5745 1.22647C19.2964 0.794294 18.8995 0.451466 18.4315 0.239039C17.9635 0.0266122 17.4442 -0.0464081 16.9358 0.0287225C16.4273 0.103853 15.9513 0.32395 15.5648 0.662655L0.914262 13.4848C0.627108 13.7358 0.396961 14.0453 0.239271 14.3925C0.0815808 14.7397 -2.64308e-06 15.1166 -2.70976e-06 15.498C-2.77644e-06 15.8794 0.0815805 16.2563 0.23927 16.6035C0.39696 16.9508 0.627108 17.2602 0.914261 17.5112L0.911587 17.5112Z" fill="white"/>
                </svg>
            </button>
                <ul class="list-colors">
                    <li v-for="color in colorsList" :key="color.id">
                        <div class="blocks-color" :style="{ background: color.colorName }"
                        :class="{ 'selected': isSelectedColor(color.id) }"
                        @click="selectColor(color.colorName)"
                        ></div>
                    </li>
                </ul>
            <button class="tap-right" @click="selectNextColor">
                <svg  width="20" height="31" viewBox="0 0 20 31" class="color-management">
                    <path d="M19.0884 13.4888L4.43258 0.666642C2.70553 -0.846569 2.6766e-06 0.383249 2.47583e-06 2.6798L2.33927e-07 28.3242C-0.000440409 28.8382 0.147274 29.3414 0.425455 29.7735C0.703634 30.2057 1.10049 30.5485 1.56849 30.761C2.0365 30.9734 2.55581 31.0464 3.06425 30.9713C3.57268 30.8961 4.04868 30.6761 4.43525 30.3373L19.0857 17.5152C19.3729 17.2642 19.603 16.9547 19.7607 16.6075C19.9184 16.2603 20 15.8834 20 15.502C20 15.1206 19.9184 14.7437 19.7607 14.3965C19.603 14.0492 19.3729 13.7398 19.0857 13.4888L19.0884 13.4888Z" fill="white"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ButtonCloseMenuTools from './ButtonCloseMenuTools.vue';
import {useNameTool} from './stores/ChangeButton'

             const colorsList = [
                { id: 0, colorName: '#000000'},
                { id: 1, colorName: '#D9D9D9'},
                { id: 2, colorName: '#FF0000'},
                { id: 3, colorName: '#3793FF'},
                { id: 4, colorName: '#11FF29'},
                { id: 5, colorName: '#FFC01D'},
                { id: 6, colorName: '#DE15FF'},
                { id: 7, colorName: '#6100FF'},
                { id: 8, colorName: '#FF9900'},
                { id: 9, colorName: '#8C8C8C'},
                ];
                const selectedColorIndex = ref(0);

const selectPreviousColor = () => {
  selectedColorIndex.value = (selectedColorIndex.value - 1 + colorsList.length) % colorsList.length;
};

const selectNextColor = () => {
  selectedColorIndex.value = (selectedColorIndex.value + 1) % colorsList.length;
};

const isSelectedColor = computed(() => {
  return (colorId) => selectedColorIndex.value === colorId;
});

const selectColor = (colorName) => {
  const sendNameColor = useNameTool();
  sendNameColor.sectionName = 'tools:nameColor';
  sendNameColor.toolMarkerName = colorName;
};
</script>

<style scoped lang="scss">
.position-list-colors{
    position: absolute;
    width: 100%;
    bottom: calc(218px * var(--sw));
    z-index: 1;
}
.blocks-colors{
    display: flex;
    justify-content: space-around;
    margin: 0 calc(35px * var(--sw));
    align-items: center;
}
.tap-left {
    width: calc(99px * var(--sw));
    height: calc(99px * var(--sw));
    border: 1px solid #fff;
    background-color: #d9d9d994;
    border-radius: 50%;
    fill: #fff;
}
.list-colors {
    display: flex;
    flex: 1; 
    justify-content: space-around;
}
.blocks-color {
    width: calc(80px * var(--sw));
    height: calc(80px * var(--sw));
    border: 1px solid #fff;
    border-radius: 50%;
}
.tap-right {
    width: calc(99px * var(--sw));
    height: calc(99px * var(--sw));
    border: 1px solid #fff;
    background-color: #d9d9d994;
    border-radius: 50%;
    fill: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.color-management {
    width: calc(25px * var(--sw));
    height: calc(35px * var(--sw));
}
.selected::after {
    content: "";
    background-image: url('../assets/img/icon/colorsBtn/itsOk.svg');
    background-size: contain;
    position: absolute;
    width: calc(33px * var(--sw));
    height: calc(27px * var(--sw));
    bottom: calc(35px * var(--sw));
    margin-left: calc(20px * var(--sw));
}


</style>