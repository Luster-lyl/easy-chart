<template>
<!--  <VueDragResize :isActive="textState.clickState" :w="$data.textSize.width" :h="$data.textSize.height"-->
<!--                 :x="$data.textSize.x" :y="$data.textSize.y"-->
<!--                 v-on:resizing="resize" v-on:dragging="resize">-->
    <!--    v-on:activated="onActivated" v-on:deactivated="onDeactivated"-->
<!--    <div :style="{'width':$props.textState.width+'px','height':$props.textState.height+'px','display':'flex','flex-direction':'row','justify-content':'center'}">-->
<!--      <a :id="$props.id" style="display:inline-block" :href="$props.textState.to?$props.textState.to:'#'">{{$props.textState.innerContent}}</a>-->
<!--    </div>-->
    <div :style="{'width':$props.textState.width+'px','height':$props.textState.height+'px','display':'flex','flex-direction':'row','justify-content':'center'}">
<!--      <a :id="$props.id" style="display:inline-block" :href="$props.textState.to?$props.textState.to:'#'">{{$props.textState.innerContent}}</a>-->
      <a :id="$props.id" style="display:inline-block;color: #eeeeee;border: 1px solid #eeeeee;" >{{$props.textState.innerContent}}</a>
    </div>
<!--  </VueDragResize>-->
  <!--  id是idkey-->
</template>
<script>
// import VueDragResize from 'vue-drag-resize'
export default {
  name: "TextLink2",
  components: {
    // VueDragResize
  },
  props:[
    'id',
    'textState',
    'bigScreenId',
  ],
  data(){
    return {
      // textSize: {
      //   idKey: this.$props.textState.idKey,
      //   bigScreenIdKey:this.$props.bigScreenId,
      //   // typeName:'textState',
      //   typeName:'textSetting',
      //   width: this.$props.textState.w,
      //   height: this.$props.textState.h,
      //   x: this.$props.textState.x,
      //   y: this.$props.textState.y,
      // },
    }
  },
  mounted() {
    // console.log(this.$props)
    // console.log(this.$data.textSize.x)
    // console.log(this.$props.textState)
  },
  // emits:[
  //   'resizeSetting'
  // ],
  methods: {
    // onActivated(){
    //   console.log("单击组件时调用，以显示句柄。")
    //   this.$store.commit('keyActiveTrue',this.$data.textSize)
    // },
    // onDeactivated(){
    //   console.log("每当用户单击组件外部的任何位置时调用，以便将其停用。")
    //   this.$store.commit('removeActiveFalse',this.$data.textSize)
    // },
    // resize(newRect) {
    //   // console.log(newRect)
    //   this.$data.textSize.width = newRect.width;
    //   this.$data.textSize.height = newRect.height;
    //   this.$data.textSize.x = newRect.top;
    //   this.$data.textSize.y = newRect.left;
    //   // this.resizeState(this.$data.textSize)
    //   // console.log(this.$props.textState)
    //   // this.$emit('resizeSetting',this.$data.textSize)
    //   // this.$store.commit('resizeState',this.$data.textSize) //先不传给store
    //   // store只能传递一个参数？？？。。？
    // },
  }
}
</script>
