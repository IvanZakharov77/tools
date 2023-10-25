import { defineStore } from 'pinia';

export const useChangeButtonStore = defineStore('changeButtonStore', {
  state: () => ({
    markers: 'allTools',
  }),
});

export const useNameTool = defineStore('nameTool', {
  state: () => ({
    sectionName: '',
    toolMarkerName: '',
  }),
});
