<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <!-- LOADING -->
    <div v-if="store.requestsOnLoading" class="page-height position-absolute w-100 h-100 d-flex justify-content-center align-items-center bg-light z-3">
      <span class="loader"></span>
    </div>

    <transition name="fade" mode="out">
      <RouterView v-show="!store.requestsOnLoading" />
    </transition>
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
      fetchedData: null,
    };
  },
  methods:{

  },
}

</script>

<style lang="scss" scoped>
@import '/src/assets/scss/variables.scss';
.page-height{
  max-height: calc(100vh - $appheader__height);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: .3s; /* Aggiungi un ritardo per far caricare bene la pagina */
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
