import {reactive} from 'vue'

export const store = reactive({
    apiUrl: "http://localhost:8000/api/users",
    users: [],
    lastPage: 0,
    loading: true
});