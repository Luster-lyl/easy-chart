<template>
  <VueDragResize :isActive="chartState.clickState"
                 :w="chartState.w" :h="chartState.h" :x="chartState.x" :y="chartState.y"
                 v-on:resizing="resize" v-on:dragging="resize">
    <div :id="id" :style="{'width':chartState.w+'px','height':chartState.h+'px'}"></div>
  </VueDragResize>
<!--  id是keyid-->
</template>
<!--add界面可以展示了，下一步适配option-->
<!--属性值是w.h，不是width\height -->
<!--属性值是x.y，不是left\top -->
<!--下一步把，xyhw同步-->
<!--看drag-resize的demo实例把-->
<!--chart固定300的原因是没有改变stata-->
<!--完善isactive逻辑-->
<script>

/* eslint-disable */
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
    'bigScreenId'
  ],
  data(){
    return {
      chartSize: {
        idKey: this.$props.chartState.idKey,
        bigScreenIdKey:this.$props.bigScreenId,
        typeName:'chartState',
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      myChart:null
    }
  },
  mounted() {
    this.drawECharts()
  },
  updated() {
  },
  methods: {
    // onDeactivated(){
    //   console.log(this.$props.chartState.clickState)
    //   this.$props.chartState.clickState = !this.$props.chartState.clickState
    // },
    drawECharts(){
      // 突然明白，drag-szie放的位置也不对，应该单独包括在linechart外面
      // 把drag-size 放进linechartitem里面 store的数据在add外面渲染
      // let myChart //放进来有问题
      this.myChart = echarts.getInstanceByDom(document.getElementById(`${this.$props.id}`))
      if (this.myChart == null) {
        // 如果不存在，就进行初始化
        this.myChart = echarts.init(document.getElementById(`${this.$props.id}`));
      }
      this.myChart.setOption(this.$props.chartState.option)
      this.myChart.on('click', function (params) {
      });
    },
    resize(newRect) {
      this.$data.chartSize.width = newRect.width;
      this.$data.chartSize.height = newRect.height;
      this.$data.chartSize.top = newRect.top;
      this.$data.chartSize.left = newRect.left;
      this.$store.commit('resizeState',this.$data.chartSize)
      this.myChart.setOption(this.$props.chartState.option) //魔鬼这样就可以了
      this.myChart.resize({width:this.$data.chartSize.width,height:this.$data.chartSize.height})
      // console.log(this.myChart)
      // store只能传递一个参数？？？。。？
    },
  }
}
</script>
