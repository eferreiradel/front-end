<template>
    <!-- mobile screen -->
    <div class="overlay container-fluid px-0 d-md-none">
        <div class="modal__open w-100">
            <div class="container d-flex flex-column px-0">
                <div class="d-flex justify-content-end px-0">
                    <i @click="closePannel()" class="fa-solid fa-xmark"></i>
                </div>
                <div class="text-">
                    Top Materie
                </div>
                <div>
                    <li>
                        Matematica
                    </li>
                    <li>
                        Inglese
                    </li>
                    <li>
                        Francese
                    </li>
                </div>
            </div>
        </div>
    </div>
    <!-- large screen -->
    
</template>
<script>
import axios from 'axios';

export default {
    name:"SubjectPannel",
    data() {
        return {
                 
            // apiURL,
            // lezioni,
        }
    },
    props: {
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