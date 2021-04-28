<template>
  <VueDragResize :isActive="false"  :preventActiveBehavior="true"
                 :w="textState.w" :h="textState.h" :x="textState.x" :y="textState.y">
<!--    :isDraggable="false" :isResizable="false"-->
    <div :style="{'width':textState.w+'px','height':textState.h+'px','display':'flex','flex-direction':'row','justify-content':'center',}">
      <a :id="id" style="display:inline-block" :href="textState.to?textState.to:'#'">{{textState.innerContent}}</a>
    </div>
  </VueDragResize>
</template>
<script>
import VueDragResize from 'vue-drag-resize'
export default {
  name: "Text",
  components: {
    VueDragResize
  },
  props:[
    'id',
    'textState',
  ],
  data(){
    return {
      textSize: {
        idKey: this.$props.textState.idKey,
      }
    }
  },
}
</script>
