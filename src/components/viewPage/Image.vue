<template>
  <VueDragResize :isActive="false" :preventActiveBehavior="true"
                 :w="imageState.w" :h="imageState.h" :x="imageState.x" :y="imageState.y">
    <div :style="{'width':imageState.w+'px','height':imageState.h+'px','display':'flex','flex-direction':'row','justify-content':'center'}">
      <img :id="id" style="display: inline-block" :src="imageState.imgSrc"/>
    </div>
  </VueDragResize>
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
  ],
  data(){
    return {
      imageSize: {
        idKey: this.$props.imageState.idKey,
      }
    }
  },
}
</script>
