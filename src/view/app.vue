<template>
  <div class="parcel-title">
    passion to live
    <img class="test-image" src="../images/8C8Z3WzIuRs.png" />
    <div>实施刷新</div>
    <mt-button type="primary" @click="changeState">primary</mt-button>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data () {
      return {
      }
    },
    computed: {
      
    },
      methods:{
          changeState(){
              console.log(this.$store.state.two.show);
              this.$store.commit('changeTwoState');
              console.log(this.$store.state.two.show);
          }
      }
  }
</script>
<style scoped>
.parcel-title{
  color: rgb(30, 28, 121);
  font-size: 20PX;
    display: flex;
    flex-direction: column;
}
.test-image{
  width: 100%;
  height: 80px;
}
</style>