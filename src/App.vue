<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>
<script>
import AppHeader from './components/layouts/AppHeader.vue';

export default {
  
  name: "App",



  data() {
    return {
      data: "okok",
      fetchedData: null,
    };
  },
  components: {
    
    AppHeader
}
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
