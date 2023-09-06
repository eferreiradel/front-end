<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<script>
import AppHeader from './components/layouts/AppHeader.vue';
import Footer from './components/ui/Footer.vue'
import { store } from '../src/store'

export default {

  name: "App",
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      store,
      data: "okok",
      fetchedData: null,
    };
  }, methods: {
    // getApi() {
    //   axios.get(store.apiUrl).then(response => {
    //     store.users = response.data.data
    //     store.loading = false
    //     store.lastPage = response.data.last_page
    //     console.log(store.lastPage);

    //   }).catch(err => {
    //     store.loading = false;
    //     this.$router.push({ name: 'error', params: { code: 404 } })
    //   });


    // }
  }, mounted() {
    // this.store.getApi();
  }
}

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
}</style>
