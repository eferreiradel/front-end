
<script>
    import axios from 'axios';
    import {store} from '../store'
    import Jumbotron from '../components/layouts/Jumbotron.vue'
    export default {
        name: "AdvancedSearch",
        components: {
            Jumbotron,
        },
        data() {
            return {
                store,
                currentPage:1
            }
        },
        methods:{
            getApi(){
                axios.get(store.apiUrl).then(response => {
                    store.users = response.data.data
                    store.loading = false
                    store.lastPage = response.data.last_page
                    console.log(store.lastPage);
                
                })
            },  
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
        mounted(){
            this.getApi();
        }

    };


</script>

<template>
    <Jumbotron />
    <h1>Products pagina ({{this.currentPage}} di {{ store.lastPage }})</h1>
    <button class="btn btn-primary me-4 ms-3" @click="prevPage()">Pagina precedente</button>
    <button class="btn btn-primary" @click="nextPage()">Pagina successiva</button>
    <p v-if="store.loading" class="m-3">Sta caricando...</p>
    <div class="d-flex flex-wrap">
        <div v-for="user in store.users" class="card_container">
            <div class="d-flex">
                <div class="me-2 fw-bold" >{{ user.name }}</div>
                <div class="fw-bold">{{ user.surname }}</div>
            </div>
            <img :src="user.profile_image" alt="">
            <p class="mt-3">{{ user.description }}</p>
            <button class="btn btn-primary">Dettagli</button>
        </div>
    </div>
    
</template>

<style scoped>

.card_container{
    width: calc(100% / 5 - 40px);
    border: 1px solid green;
    border-radius: 20px;
    margin: 20px;
    padding: 20px;
}

.card_container img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 10px;
}

</style>