<template>
  <div class="home">
    <ElContainer style="height: 700px; border: 1px solid #eee" id="homeMain">
      <ElAside style="width:200px">
        <ElMenu :router="true" default-active="/">
          <ElMenuItemGroup>
            <template #title>
              <h2>Easy Chart</h2>
            </template>
            <ElMenuItem index="/">我的大屏</ElMenuItem>
            <ElMenuItem @click="addBigScreen">添加大屏</ElMenuItem>
          </ElMenuItemGroup>
        </ElMenu>
      </ElAside>
      <ElContainer>
        <ElHeader style="text-align: right; font-size: 12px">
          <ElDropdown>
            <i class="el-icon-setting" style="margin-right: 10px"></i>
            <template #dropdown>
              <ElDropdownMenu>
                <ElDropdownItem>{{bigScreenData.userName}}</ElDropdownItem>
                <ElDropdownItem>个人资料</ElDropdownItem>
                <ElDropdownItem>新增大屏</ElDropdownItem>
                <ElDropdownItem>注销</ElDropdownItem>
              </ElDropdownMenu>
            </template>
          </ElDropdown>
          <ElAvatar style="margin-top: 10px " :src=bigScreenData.userAvatar></ElAvatar>
        </ElHeader>
        <ElMain>
          <div v-for="(bigScreenItem ,index) in $data.bigScreenData.bigScreenState" :key="index" style="display: inline-block;width: 278px;margin: 0px 15px 15px 0px;border: 1px solid #333;">
            <ElLink :href="'#/bigScreen/'+bigScreenItem.id" target="_blank">
              <ElImage :src=bigScreenItem.backgroundImage style="width: 278px;height: 150px;"></ElImage>
              <p class="bigScreenTitle">{{bigScreenItem.name}}</p>
              <p class="bigScreenTitle" style="float: right">{{bigScreenItem.w}}×{{bigScreenItem.h}}</p>
            </ElLink>
          </div>
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ElMessageBox } from 'element-plus';
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      // data结尾的是请求的数据
      bigScreenData:this.$store.state.userDataBaseState,
      bigScreenCreateName:'',
    }
  },
  mounted() {
    // console.log(this.bigScreenData)
    console.log(history)
  },
  methods:{
    addBigScreen(){
      ElMessageBox.prompt('请输入您需要创建的大屏名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue:this.$data.bigScreenCreateName,
        inputPattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
        inputErrorMessage: '输入包含空格或特殊符号',
      });
    },
  }
}
</script>
<style>
/*#homeMain{*/
/*  padding: 0 !important;*/
/*  margin: 0 !important;*/
/*}*/
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.bigScreenTitle{
  display: inline-block;
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 10px;
  line-height: 25px;
  height: 25px;
  font-size: 13px;
  letter-spacing: 2px;
  text-indent: 2px;
  color: #333;
}
</style>
