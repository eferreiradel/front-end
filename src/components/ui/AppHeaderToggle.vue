<template>
    <button type="button" class="toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvasExample">
        <i class="fa-solid fa-bars"></i>
    </button>  
    <div class="d-lg-none offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>

    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "AppHeaderToggle",
        data() {
            return {
            }
        },
    }
</script>

<style scoped style lang="scss">
    @import "../../style.scss";
    
    .navbar--toggle {
        cursor: pointer;
    }
    .fa-solid {
        color: white;
        font-size: 32px;
    }

</style>