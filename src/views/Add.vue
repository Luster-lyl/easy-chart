<template>
<!-- 可以对可视化应用和数据源进行新增和编辑 -->
  <div class="home">
    <ElRow :gutter="24">
      <ElCol :span="24" @dblclick="removeClickActiveFalse"
        :style="{'width': $data.settingState.bigScreenSetting.w+'px','height': $data.settingState.bigScreenSetting.h+'px','background-image':'url('+$data.settingState.bigScreenSetting.backgroundImage+')','background-size':'cover'}"
      >
        <div id="bigScreenName">
          <h3 style="color: #ffffff">{{$data.settingState.bigScreenSetting.name}}</h3>
        </div>
        <ElCol :span="2" :style="{'display':$data.layerDisplay?'':'none'}">
          <ElContainer>
            <ElAside id="asideStyle">
              <h3 style="color: white">图层</h3>
              <div v-for="(text ,index) in $data.settingState.textSetting" :key="index">
                <h4 v-on:click="clickActiveTrue(text.idKey,'textSetting')" :style="{'color':text.clickState?'#409EFF':'#eeeeee'}">{{text.name}}</h4>
              </div>
            </ElAside>
          </ElContainer>
        </ElCol>
        <ElCol :span="18">
          <ElContainer>
            <ElMain>
<!--              11111111111这里1111111111-->
              <div v-for="(text ,index) in $data.settingState.textSetting" :key="index">
                <VueDragResize :isActive="text.clickState"
                               :w="text.w" :h="text.h"
                               :x="text.x" :y="text.y"
                               v-on:resizing="resize" v-on:dragging="resize">
                  <Text :id="text.idKey+'text'" :bigScreenId="$data.clickId.bigScreenId"
                        @mousedown="clickActiveTrue(text.idKey,'textSetting')"
                        :style="{'width':text.w+'px','height':text.h+'px'}"
                        :textState="text" style="z-index: 999"></Text>
                </VueDragResize>
              </div>
            </ElMain>
          </ElContainer>
        </ElCol>
        <ElCol :span="6" :style="{'display':$data.settingDisplay?'':'none','float':'right'}">
          <ElContainer>
            <ElAside id="asideRightStyle">
              <ElTabs type="card" v-if="$data.clickId.nowClickName!=='bigScreenSetting'&& $data.clickId.nowClickName!==undefined"
                      v-model="$data.activeName">
                <div class="title">
                </div>
                <ElTabPane label="配置" name="setting" :class="$data.clickId.preClickName==='bigScreen'?'bigScreenWidth':''">
                </ElTabPane>
                <ElTabPane label="数据" name="data">数据</ElTabPane>
                <ElTabPane label="格式化" name="format">格式化</ElTabPane>
                <ElTabPane label="参数" name="parameter">
                  <ElForm>
                    <ElFormItem label="长度">
                      <ElInputNumber v-model="num"></ElInputNumber>
                    </ElFormItem>
                  </ElForm>
                </ElTabPane>
              </ElTabs>
            </ElAside>
          </ElContainer>
        </ElCol>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import Text from '@/components/Add/TextLink2'
import VueDragResize from 'vue-drag-resize'
export default ({
  name: 'Add',
  components: {
    Text,
    VueDragResize
  },
  data() {
    return {
      value1:true,
      num:1,
      chooseName:'chart',
      globeState:this.$store.state.userDataBaseState.bigScreenState[history.state.current.split("/")[2]],
      activeName: 'parameter',
      activeBigScreenName: 'bigScreenSetting',
      layerDisplay:true,
      settingDisplay:true,
      clickId:{
        bigScreenId:history.state.current.split("/")[2],
        preClickId:undefined,
        preClickName:undefined,
        nowClickId:history.state.current.split("/")[2],//初始值为大屏的id
        nowClickName:'bigScreenSetting',
      },
      settingState:{
        bigScreenSetting:{
          idKey: 0,
          name:'默认大屏setting',
          introduction:'',
          w:1440,
          h:800,
          backgroundImage:'https://bootapi.jeecg.com/bigscreen/img/bg/bg10.png',
          titleBackgound:''
        },
        chartSetting:[],
        imageSetting:[],
        globeChartSetting:[],
        candleStickSetting:[],
        textSetting:[
          {
            idKey:0,
            name:'文本框setting',
            chartType:'超链接',
            clickState:false,
            display: false,
            innerContent:'文本框setting',
            to:'https://www.baidu.com/',
            minWidth:50,
            minHeight:30,
            x:960,
            y:150,
            w:80,
            h:50,
          },
          {
            idKey:1,
            name:'文本框settingdddd',
            chartType:'文本框',//超链接文本框合二为一吧。。
            clickState:false,
            display: false,
            innerContent:'文本框settinghhhhhh',
            minWidth:50,
            minHeight:30,
            x:960,
            y:150,
            w:80,
            h:50,
          },
        ]
      }
    }
  },
  mounted() {
  },
  updated() {
  },
  methods:{
    //隐藏/显示 图层/编辑栏
    changeLayerDisplay(){
      this.$data.layerDisplay = !this.$data.layerDisplay
    },
    changeSettingDisplay(){
      this.$data.settingDisplay = !this.$data.settingDisplay
    },
    //添加图表
    addBarChart(){
      // this.$store.commit('addBarChartState',this.$data.clickId.bigScreenId)
    },
    addLineChart(){
      // this.$store.commit('addLineChartState',this.$data.clickId.bigScreenId)
    },
    addPieChart(){
      // this.$store.commit('addPieChartState',this.$data.clickId.bigScreenId)
    },
    // k图
    addCandleStick(){
      // this.$store.commit('addCandleStickState',this.$data.clickId.bigScreenId)
    },
    addGlobeChart(){
      // this.$store.commit('addGlobeChartState',this.$data.clickId.bigScreenId)
    },
    addText(){},
    addTextLink(){
      // this.$store.commit('addTextLinkState',this.$data.clickId.bigScreenId)
    },
    addImage(){},
    // 双向数据流绑定
    //子组件
    resize(newRect){
      if(newRect){
        this.$data.settingState[this.$data.clickId.nowClickName][this.$data.clickId.nowClickId].w = newRect.width
        this.$data.settingState[this.$data.clickId.nowClickName][this.$data.clickId.nowClickId].h = newRect.height
        this.$data.settingState[this.$data.clickId.nowClickName][this.$data.clickId.nowClickId].x = newRect.left
        this.$data.settingState[this.$data.clickId.nowClickName][this.$data.clickId.nowClickId].y = newRect.top
      }
    },
    //active 操作
    clickActiveTrue(num,name){
      this.$data.clickId.preClickId = this.$data.clickId.nowClickId
      this.$data.clickId.preClickName = this.$data.clickId.nowClickName
      this.$data.clickId.nowClickId = num
      this.$data.clickId.nowClickName = name
      if (this.$data.clickId.preClickId !== undefined && this.$data.clickId.preClickName !== undefined) {
        this.$data.settingState[this.$data.clickId.preClickName][this.$data.clickId.preClickId].clickState = false;
      }
      this.$data.settingState[this.$data.clickId.nowClickName][this.$data.clickId.nowClickId].clickState = true;
    },
    removeClickActiveFalse(){
      this.$data.clickId.preClickId = this.$data.clickId.nowClickId
      this.$data.clickId.preClickName = this.$data.clickId.nowClickName
      this.$data.clickId.nowClickId = undefined
      this.$data.clickId.nowClickName = 'bigScreenSetting'
      this.$data.settingState[this.$data.clickId.preClickName][this.$data.clickId.preClickId].clickState = false;
    },
  },
})
</script>

<style>
.el-form-item__label{
  padding: 0 20px 0 0 !important;
}
#tab-bigScreenSetting{
  width: 300px !important;
  text-align: center;
}
.el-col{
  padding: 0 !important;
  /*margin:0px 0px 0px !important;*/
  margin-top: -10px !important;
}
#asideStyle{
  width: 100% !important;
  padding: 10px 10px 0  20px !important;
  margin:-40px 0px 0px !important;
  /*background-color: rgba(255,255,255,0.4);*/
}
#asideRightStyle{
  float: right;
  width: 100% !important;
  padding: 10px 10px 0  10px !important;
  margin:-40px 0px 0px !important;
}
.title{
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 10px;
  line-height: 35px;
  height: 35px;
  text-align: center;
  font-size: 13px;
  letter-spacing: 2px;
  text-indent: 2px;
  background-color: #2d343c;
  color: #fff;
}
#bigScreenName{
  background-image: url("../assets/header1.png");
  background-position: center -2px;
  line-height: 58px;
  display: flex;
  justify-content: center;

}
</style>

