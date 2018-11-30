<template>
  <div class="parcel-title">
    passion to live
    <mt-button type="default" @click="changeState">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>
<script>
  export default {
    name: 'Two',
    data() {
      return {}
    },
    mounted() {
      this.$http({
        method: 'get',
        url: 'http://top.baidu.com/mobile_v2/buzz/hotspot',
        data: {
          
        }
      });
      let name = 'passion';
    },
    computed: {

    },
      methods:{
          log(c='console something'){
              console.log(c);
          },
          changeState(){
              this.log(this.$store.state.two.show);
              this.$store.commit('changeTwoState');
              this.log(this.$store.state.two.show);
          }
      }
  }
</script>
<style scoped>

</style>