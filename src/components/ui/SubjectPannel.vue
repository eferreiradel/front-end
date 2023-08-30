<template>
 <div class="offcanvas offcanvas-bottom h-100" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      <ul>
      <li v-for="subject in subjects" :key="subject.id">{{ subject.nome }}</li>
    </ul>
    </div>
   
  </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    name:"SubjectPannel",
    data() {
        return {
          subjects: []

        }
    },
    methods: {
      async getDataFromApi() {
        axios.get('http://localhost:8000/api/subjects')
        .then(response => {
          this.subjects = response.data;
        })
        .catch(error => {
          console.error('Error fetching subjects:', error);
        });
      },
    },
    mounted() {
      this.getDataFromApi();
    },
    
    methods: {
        closePannel() {
            this.$emit('close-pannel')
        }
    }
    // methods: {
    //     getDataFromApi() {
    //     axios.get('https://api.example.com/data')
    //     .then(response => {
    //       this.lezioni = response.data;
    //       console.log('Data from API:', this.lezioni);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // }

    // }
}
</script>

<style scoped lang="scss">

    @import "../../assets/scss/variables.scss";
    .modal__open {
        height: 100vh;
        width: 100%;
        // border-radius: 20px;
        padding: 2rem;
        background-color: rgb(252, 252, 252);
        overflow: hidden;
    }

    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
        z-index: 1000
    }
</style>