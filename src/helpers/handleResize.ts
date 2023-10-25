import { ref } from 'vue';

let zoomDesign = ref(1);

export default function handleResize(): void {
  let zoomCountOne: number = document.body.clientWidth / 1920; //1920;
  let zoomCountTwo: number = document.body.clientHeight / 1080; //1080;
  console.log(zoomCountOne, zoomCountTwo);

  if (zoomCountOne < zoomCountTwo) {
    zoomDesign.value = zoomCountOne;
    document.documentElement.style.setProperty('--sw', String(zoomCountOne));
  } else {
    zoomDesign.value = zoomCountTwo;
    document.documentElement.style.setProperty('--sw', String(zoomCountTwo));
  }
}
