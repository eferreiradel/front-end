import {reactive} from 'vue'
import axios from 'axios';

export const store = reactive({
    apiUrl: "http://localhost:8000/api/",
    users: [],
    lastPage: 0,
    requestsOnLoading: 0,


    //FUNZIONI
    putAllUsers() {
        this.requestsOnLoading += 1
        axios.get(this.apiUrl + 'users').then(response => {
            this.users = response.data.data
            this.requestsOnLoading -= 1
            this.lastPage = response.data.last_page
            console.log(this.lastPage);

        }).catch(err => {
            this.loading = false;
            this.$router.push({ name: 'error', params: { code: 404 } })
        });
    },

    putFilteredUsers(subject) {
        this.requestsOnLoading += 1
        axios.get(this.apiUrl + 'users?subjects=' + subject).then(response => {
            this.users = response.data.data
            this.requestsOnLoading -= 1
            this.lastPage = response.data.last_page
            console.log(this.lastPage);

        }).catch(err => {
            this.requestsOnLoading -= 1
            this.$router.push({ name: 'error', params: { code: 404 } })
        });
    },

    getAllSubjectsName(){
        this.requestsOnLoading += 1
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + 'subjects').then(response => {
                const subjects = response.data
                const subjectNames = subjects.map(subject => subject.name)
                this.requestsOnLoading -= 1
                resolve(subjectNames);
            }).catch(err => {
                this.requestsOnLoading -= 1
                this.$router.push({ name: 'error', params: { code: 404 } })
                reject(err);
            });
        });
    }
    
});