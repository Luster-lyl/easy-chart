<template>
  <div>
    <ElRow :gutter="24">
      <ElCol :span="24">
        <ElContainer v-bind:contentState = $attrs.contentState>
          <ElMain
              id="viewMain"
            :style="{'width': $data.contentState.w+'px','height': $data.contentState.h+'px','background-image':'url('+$data.contentState.backgroundImage+')','background-size':'cover'}"
          >
            <div id="bigScreenName">
              <h3 style="color: #ffffff">{{contentState.name}}
                <ElLink id="editorLink" :underline="false" :href="'#/add/'+$data.id"
                        target="_blank" style="font-size: 10px;">点击编辑大屏</ElLink>
              </h3>
            </div>
            <div v-for="(text ,index) in $data.contentState.textState" :key="index" style="float: left">
              <Text :id="text.idKey+'text'" :textState="text" v-on:mousedown="clickActiveTrue(text.idKey,'textState')" style="z-index: 999"></Text>
            </div>
            <div v-for="(image ,index) in $data.contentState.imageState" :key="index" style="float: left">
              <Image :id="image.idKey+'image'" :imageState="image" v-on:mousedown="clickActiveTrue(image.idKey,'imageState')" style="z-index: 999"></Image>
            </div>
            <div v-for="(chart ,index) in $data.contentState.chartState" :key="index" style="float: left">
              <chart :id="chart.idKey+'chart'" :chartState="chart" v-on:mousedown="clickActiveTrue(chart.idKey,'chartState')" style="z-index: 999"></chart>
            </div>
            <div v-for="(candleStick ,index) in $data.contentState.candleStickState" :key="index" style="float: left">
              <candle-stick :id="candleStick.idKey+'candleStick'" :candleStickState="candleStick" v-on:mousedown="clickActiveTrue(candleStick.idKey,'candleStickState')" style="z-index: 999"></candle-stick>
            </div>
            <div v-for="(globeChart,index) in $data.contentState.globeChartState" :key="index" style="float: left">
              <globe-chart :id="globeChart.idKey+'globeChart'" :globeChartState="globeChart" v-on:mousedown="clickActiveTrue(globeChart.idKey,'globeChartState')" style="z-index: 990"></globe-chart>
            </div>
          </ElMain>
        </ElContainer>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import Chart from '@/components/viewPage/Chart'
import Text from '@/components/viewPage/Text'
import Image from "@/components/viewPage/Image";
import CandleStick from "@/components/viewPage/CandleStick"
import GlobeChart from "@/components/viewPage/GlobeChart"
export default {
  name: "Show",
  components:{
    GlobeChart,
    Chart,
    Text,
    Image,
    CandleStick,
  },
  data(){
    return{
      id:history.state.current.split("/")[2],
      contentState:this.$store.state.userDataBaseState.bigScreenState[history.state.current.split("/")[2]]
    }
    // 把bigscreen数据传进来
  },
  mounted() {
    console.log(this.$data.contentState)
  }
}
</script>

<style scoped>
/*.el-col{*/
/*  padding: 0 !important;*/
/*  margin: 0 !important;*/
/*}*/
#viewMain{
    padding: 0 !important;
    margin: 0 !important;
}
#bigScreenName{
  background-image: url("../assets/header1.png");
  background-position: center -2px;
  line-height: 58px;
  display: flex;
  justify-content: center;
}
#editorLink{
  vertical-align: center;
}
</style>
