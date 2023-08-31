import {reactive} from 'vue'
import axios from 'axios';

export const store = reactive({
    apiUrl: "http://localhost:8000/api/users",
    users: [],
    lastPage: 0,
    loading: true,


   //FUNZIONI
   putAllUsers() {
    axios.get(this.apiUrl).then(response => {
        this.users = response.data.data
        this.loading = false
        this.lastPage = response.data.last_page
        console.log(this.lastPage);

    }).catch(err => {
        this.loading = false;
        this.$router.push({ name: 'error', params: { code: 404 } })
    });
},

putFilteredUsers(subject) {
    axios.get(this.apiUrl + '?subjects=' + subject).then(response => {
        this.users = response.data.data
        this.loading = false
        this.lastPage = response.data.last_page
        console.log(this.lastPage);

    }).catch(err => {
        this.loading = false;
        this.$router.push({ name: 'error', params: { code: 404 } })
    });
}


});