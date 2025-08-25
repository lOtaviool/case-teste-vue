<script >
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<template>
  <div class="layout">
    <Header></Header>
    <router-view />
  </div>
</template>

<style scoped>
.layout{
  display: grid;  
  background-color: #fff;
  color: #61646B;
}
</style>
