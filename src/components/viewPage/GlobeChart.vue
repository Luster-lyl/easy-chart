<template>
  <VueDragResize :isActive="false" :preventActiveBehavior="true"
                 :w="globeChartState.w" :h="globeChartState.h" :x="globeChartState.x" :y="globeChartState.y">
    <div :id="id" :style="{'width':globeChartState.w+'px','height':globeChartState.h+'px'}"></div>
  </VueDragResize>
</template>

<script>
import VueDragResize from "vue-drag-resize";
import * as echarts from 'echarts';
import 'echarts-gl';

export default {
  name: "GlobeChart",
  components: {
    VueDragResize
  },
  props:[
    'id',
    'globeChartState',
  ],
  data(){
    return {
      globeChartSize: {
        idKey: this.$props.globeChartState.idKey,
      },
    }
  },
  mounted() {
    this.drawECharts()
  },
  methods:{
    drawECharts(){
      const ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
      const chartDom = document.getElementById(`${this.$props.id}`);
      const myChart = echarts.init(chartDom);
      let option;
      option = {
        backgroundColor: '#000',
        globe: {
          baseTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          heightTexture: ROOT_PATH + "/data-gl/asset/bathymetry_bw_composite_4k.jpg",
          displacementScale: 0.2,
          shading: 'realistic',
          environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          realisticMaterial: {
            roughness: ROOT_PATH + '/asset/get/s/data-1497599804873-H1SHkG-mZ.jpg',
            metalness: ROOT_PATH + '/asset/get/s/data-1497599800643-BJbHyGWQW.jpg',
            textureTiling: [8, 4]
          },
          postEffect: {
            enable: true
          },
          viewControl: {
            autoRotate: false
          },
          light: {
            main: {
              intensity: 2,
              shadow: true
            },
            ambientCubemap: {
              texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
              exposure: 2,
              diffuseIntensity: 2,
              specularIntensity: 2
            }
          }
        }
      };
      option && myChart.setOption(option);
    },
  }
}
</script>
