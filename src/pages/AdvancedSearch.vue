
<script>
    import axios from 'axios';
    import {store} from '../store'
    import Jumbotron from '../components/layouts/Jumbotron.vue'
    import TeacherCard from '../components/TeacherCard.vue'
    export default {
        name: "AdvancedSearch",
        components: {
            Jumbotron,
            TeacherCard
        },
        data() {
            return {
                store,
                currentPage:1
            }
        },
        methods:{ 
            nextPage(){
                if(this.currentPage < store.lastPage){
                    let config = {
                        params:{
                        page: (this.currentPage + 1)
                    }
                    };

                    axios.get(store.apiUrl, config).then(response => {
                        store.users = response.data.data
                        store.loading = false
                        store.lastPage = response.data.last_page
                        this.currentPage = response.data.current_page
                        console.log(this.store.lastPage);

                    
                    })

                }
            },
            prevPage(){
                if(this.currentPage >= 1){
                    let config = {
                        params:{
                        page: (this.currentPage - 1)
                    }
                    };

                    axios.get(store.apiUrl, config).then(response => {
                    store.users = response.data.data
                    store.loading = false
                    store.lastPage = response.data.last_page
                    this.currentPage = response.data.current_page
                    
                    })
                }
            }},

    };


</script>

<template>
    <Jumbotron />
    <p v-if="store.loading" class="m-3">Sta caricando...</p>
    <div class="d-flex flex-wrap">
        <div v-for="user in store.users" class="card_container">
            <TeacherCard :teacher="user" />
        </div>
    </div>
    <!-- <h5 class="ms-5">Pagina corrente({{this.currentPage}} di {{ store.lastPage }})</h5> -->
    <div class="mb-5 mt-3">
        <button class="btn btn-success me-4 ms-4" @click="prevPage()">Pagina precedente</button>
        <button class="btn btn-success" @click="nextPage()">Pagina successiva</button>
    </div>
    
    
</template>

<style scoped>

.card_container{
    width: calc(100% / 4 - 40px );
    margin: 20px;
}

</style> 