<template>
  <h1>TEST</h1>
  <PrimaryButton btnText="OKOK"></PrimaryButton>
  <p>
  </p>
</template>

<script>
import axios from 'axios';
import PrimaryButton from './ui/PrimaryButton.vue';
export default {
    name: "TEST",
    data() {
        return {
            data: "okok",
            apiURL: "https://localhost.3306",
            fetchedData: null,
        };
    },
    methods: {
        getDataFromApi() {
            axios.get(this.apiURL) // Note: Use http:// instead of https:// and fix the port
                .then(response => {
                this.fetchedData = response.data;
            })
                .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
    },
    mounted() {
        this.getDataFromApi();
    },
    components: { PrimaryButton }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
