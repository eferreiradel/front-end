<template>
    <a :href="route">
      {{ label }}
    </a>
  </template>
<script>
    export default {
        name: "NavLink",
        props: {
            label: String,
            route: String,
        }
    }   
</script>
<style scoped lang="scss">

</style>