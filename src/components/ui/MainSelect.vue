<template>
    <div class="d-md-none">
        <SubjectPannel v-if="this.isPannelVisible" @close-pannel="closePannel"></SubjectPannel>
    </div>
    <div class="mainContainer">
            <div class="d-none d-md-block modal__small" v-if="this.isPannelVisible">
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
        <div class="p-0 d-flex">
            <input @keyup.enter="goToAdvancedSearch()" v-model="searchTerm" class="mainSelect" placeholder="Cosa vuoi imparare?">
            <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" class="mainSelect__button" @click="this.showPannel()">
                <i class="fa-solid fa-chevron-up"></i>
            </div>
        </div>
        </div>
</template>
<script>
import SubjectPannel from './SubjectPannel.vue';
import {store} from '../../store'

    export default {
    name: "MainSelect",
    data() {
        return {
            store,
            isPannelVisible: false,
            searchTerm:""
        };
    },
    props: {
        placeholder: String,
    },
    methods: {
        showPannel() {
            this.isPannelVisible = true;
        },
        closePannel() {
            this.isPannelVisible = false;
        },
        goToAdvancedSearch(){
            this.store.putFilteredUsers(this.searchTerm);
            this.$router.push({ name: 'search', params: { term: this.searchTerm } });
        }

    },
    components: { SubjectPannel }
}
</script>
<style scoped style lang="scss">
    @import "../../style.scss";


.mainSelect {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    border: 1px solid #000;
    background: #FFF;
    color: darkgray;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    width: 100%;


    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    

    display: flex;
    justify-content: start;
    align-items: center;
}
i {
    color: black;
       
}
.modal__small {
    background-color: blue;
    position: absolute;
    border-radius: 10px;
    padding: 1rem;
    background-color: white;
    border: 1px solid black;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    bottom: 70px;
    right: 0;
}

.modal-hider {
    background-color: blue;
    overflow: hidden;
    height: 50px;
}

.mainContainer {
    position: relative;
    padding: 0;
    width: 100%;
}
.dropDown-items {
    position: absolute;
    opacity: 0;
    width: 100%;
    bottom: 100%;
    background-color: $color__light;
}
.mainSelect__button {
    padding: 1rem 1rem;
    border-right: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color__primary;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);


  &:hover {
    background-color: $color__primary;
    cursor: pointer;
    .dropDown-items {
        opacity: 100%;
    }
    i {
      color: black;
    }
  }
}
</style>