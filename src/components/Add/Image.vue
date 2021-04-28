<template>
  <VueDragResize :isActive="imageState.clickState" :w="imageState.w" :h="imageState.h"
                 :x="imageState.x" :y="imageState.y"
                 v-on:resizing="resize" v-on:dragging="resize">
    <div :style="{'width':$data.imageSize.width+'px','height':$data.imageSize.height+'px','display':'flex','flex-direction':'row','justify-content':'center'}">
      <img :id="id" style="display: inline-block" :src="imageState.imgSrc"/>
    </div>
  </VueDragResize>
  <!--  id是keyid-->
</template>
<script>
import VueDragResize from 'vue-drag-resize'
export default {
  name: "Image",
  components: {
    VueDragResize
  },
  props:[
    'id',
    'imageState',
    'bigScreenId'
  ],
  data(){
    return {
      imageSize: {
        idKey: this.$props.imageState.idKey,
        bigScreenIdKey:this.$props.bigScreenId,
        // typeName:'imageState',
        typeName:'imageSetting',
        width: this.$props.imageState.w,
        height: this.$props.imageState.h,
        x: this.$props.imageState.x,
        y: this.$props.imageState.y,
      }
    }
  },
  methods: {
    resize(newRect) {
      this.$data.imageSize.width = newRect.width;
      this.$data.imageSize.height = newRect.height;
      this.$data.imageSize.top = newRect.top;
      this.$data.imageSize.left = newRect.left;
      this.$emit('resizeSetting',this.$data.imageSize)
      // this.$store.commit('resizeState',this.$data.imageSize)
      // store只能传递一个参数？？？。。？
    },
  }
}
</script>
