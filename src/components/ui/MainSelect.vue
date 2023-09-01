<template>
            <v-autocomplete @keyup.enter="goToAdvancedSearch()" v-model="searchTerm" v-if="allSubjectsName" label="Cosa vuoi imparare?" :items="allSubjectsName" multiple>
            </v-autocomplete>
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
            searchTerm: null,
            allSubjectsName: []
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
            if (this.searchTerm) {
                this.searchTerm = this.searchTerm.join(',');
                this.store.putFilteredUsers(this.searchTerm, "");

                this.$router.push({ 
                    name: 'search', 
                    query: { subjects: this.searchTerm} 
                });
            } else {
                this.store.putFilteredUsers("", "");
                this.$router.push({ 
                    name: 'search'
                });
            }
        },
    },
    components: { SubjectPannel },
    mounted(){
        this.store.getAllSubjectsName().then(subjectNames => {
            this.allSubjectsName = subjectNames;
        });
    }
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