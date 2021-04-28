<template>
  <VueDragResize :isActive="false"  :preventActiveBehavior="true"
                 :w="chartState.w" :h="chartState.h" :x="chartState.x" :y="chartState.y">
    <div :id="id" :style="{'width':chartState.w+'px','height':chartState.h+'px'}"></div>
  </VueDragResize></template>
<script>
import VueDragResize from 'vue-drag-resize'
import * as echarts from "echarts"
export default {
  name: "Chart",
  components: {
    VueDragResize
  },
  props:[
      'id',
      'chartState',
  ],
  data(){
    return {
      chartSize: {
        idKey: this.$props.chartState.idKey,
      },
    }
  },
  mounted() {
    this.drawECharts()
  },
  methods: {
    drawECharts(){
      this.myChart = echarts.getInstanceByDom(document.getElementById(`${this.$props.id}`))
      if (this.myChart == null) {
        // 如果不存在，就进行初始化
        this.myChart = echarts.init(document.getElementById(`${this.$props.id}`));
      }
      this.myChart.setOption(this.$props.chartState.option)
    },
  }
}
</script>
