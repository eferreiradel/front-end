
<script>
    import axios from 'axios';
    import {store} from '../store'
    import Jumbotron from '../components/layouts/Jumbotron.vue'
    import TeacherCard from '../components/TeacherCard.vue'
    import MainSelect from '../components/ui/MainSelect.vue'

    export default {
        name: "AdvancedSearch",
        components: {
            Jumbotron,
            TeacherCard,
            MainSelect
        },
        data() {
            return {
                store,
                currentPage:1,
                minVote: 1,
                reviewNumber:"",
            }
        },
        watch: {
            currentPage() {
                this.changePage();
            },
        },
        methods:{ 
            changePage() {
                let config = {
                    params:{
                    page: this.currentPage
                    }
                };

                store.loading = true;
                axios.get(store.apiUrl + "users", config).then(response => {
                    store.users = response.data.data;
                    store.loading = false;
                    store.lastPage = response.data.last_page;
                    this.currentPage = response.data.current_page;
                });
            },
            switchStars(index){
                this.minVote = index;
             },
            searchWithFilter(){
                this.store.putFilteredUsers(this.$refs.MainSelect.searchTerm ?? '', this.minVote ?? '', this.reviewNumber ?? '', false);
                this.$router.push({ 
                    name: 'search', 
                    query: { subjects: this.$refs.MainSelect.searchTerm, 'minvote': this.minVote, 'reviewnumber' : this.reviewNumber} 
                });
            },
        },
        mounted(){
            this.store.putFilteredUsers(this.$route.query.subjects ?? '', this.$route.query.minvote ?? '', this.$route.query.reviewnumber ?? '');
        },
    }


</script>

<template>
    <div class="container">
        <div class="row">
            <div class="d-flex align-items-center justify-content-between p-5 gap-5 border mt-4 rounded">
                <div class="col-12 col-md-4">
                    <MainSelect @keyup.enter="searchWithFilter()"  ref="MainSelect" />
                </div>
                <div class="numberReviewSelect">
                    <label class="fw-bold" for="review">Numero recensioni:</label>
                    <select v-model="reviewNumber" class="form-select" aria-label="Default select example" name="review" id="review">
                        <option selected value="">Qualsiasi </option>
                        <option value="5">più di 5 </option>
                        <option value="10">più di 10 </option>
                        <option value="15">più di 15 </option>
                        <option value="20">più di 20 </option>
                    </select>
                </div>
                <div>
                    <h5>Voto minimo</h5>
                    <div  class="stars d-flex align-items-center">
                        <i 
                            v-for="(star, index) in 5" 
                            :key="index"
                            @click="switchStars(index + 1)" 
                            :class="(index + 1) <= minVote ? 'fa fa-star fs-3 checked' : 'fa fa-star fs-3'"
                        ></i>
                    </div>
                </div>
                <button @click="searchWithFilter()"><i class="fa-solid fa-magnifying-glass"></i> CERCA</button>
            </div>
            <div class="p-3">
                <h5>Filtri attivi:</h5>
                <div class="d-flex gap-2">
                    <span class="my-bg-primary rounded p-2 text-white" v-for="subject in $route.query.subjects">{{subject}}</span>
                    <span v-if="$route.query.minvote" class="my-bg-primary rounded p-2 text-white">Minimo {{$route.query.minvote}} stelle</span>
                    <span v-if="$route.query.reviewnumber" class="my-bg-primary rounded p-2 text-white">Più di {{$route.query.reviewnumber}} recensioni</span>
                </div>
            </div>
            <p v-if="store.loading" class="m-3">Sta caricando...</p>
            <div class="d-flex flex-column justify-content-center align-items-center">
                <v-pagination class="my-4"
                    v-model="currentPage"
                    :length="store.lastPage"
                    :total-visible="5"
                ></v-pagination>
                <p v-if="this.store.users <= 0">nessun risultato</p>


                <div class="d-md-flex flex-wrap gap-2 justify-content-center">
                    <div v-for="user in store.users">
                        <TeacherCard :teacher="user" />
                    </div>
                </div>

                <v-pagination class="my-4"
                    v-model="currentPage"
                    :length="store.lastPage"
                    :total-visible="5"
                ></v-pagination>
            </div>
        </div>
    </div>
</template>

<style  scoped lang="scss">
    @import "../style.scss";

    .card_container{
        width: calc(100% / 4 - 45px );
        margin: 20px;
    }

    .my-btn {
        background-color: $color__light !important;
        border: 1px solid #000;
        color: black;
    }
    .my-btn:hover {
        background-color: $color__primary !important;
        color: #000;
        border: 1px solid #000;
    }

    .checked {
        color: orange;
    }

</style> 