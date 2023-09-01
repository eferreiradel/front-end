
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
            }
        },
        watch: {
            currentPage() {
                this.loadPage();
            },
        },
        methods:{ 
            loadPage() {
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
            }
        },
        mounted(){
            this.store.putFilteredUsers(this.$route.params.term);
        }
    }


</script>

<template>
    <div class="container">
        <div class="row">
            <div class="p-3 col-12 col-md-4">
                <MainSelect />
            </div>
            <p v-if="store.loading" class="m-3">Sta caricando...</p>
            <div class="d-flex flex-column justify-content-center align-items-center">
                <v-pagination class="my-4"
                    v-model="currentPage"
                    :length="store.lastPage"
                    :total-visible="5"
                ></v-pagination>

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

</style> 