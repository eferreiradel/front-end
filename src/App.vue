<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <Jumbotron></Jumbotron>
    <div class="container-fluid">
      <div class="container">
        <div class="row py-5 justify-content-center">
          <div class="col col-md-5 col-lg-4 d-flex gap-5 flex-column">
            <div>
              <MainSelect></MainSelect>
            </div>
            <div class="">
              <PrimaryButton btnText="BOTTONE"></PrimaryButton>
            </div>
            <div>
              <SubmitButton btnText="SUBMIT"></SubmitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <body>

  </body>
</template>

<script>
import SubmitButton from "./components/ui/SubmitButton.vue";
import MainSelect from "./components/ui/MainSelect.Vue";
import PrimaryButton from "./components/ui/PrimaryButton.vue";
import NavBar from "./components/layouts/NavBar.vue";
import Jumbotron from "./components/layouts/Jumbotron.vue";

export default {
  name: "App",
  data() {
    return {
      data: "okok",
      fetchedData: null,
    };
  },
  components: {
    SubmitButton,
    MainSelect,
    PrimaryButton,
    NavBar,
    Jumbotron
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
