<template>
  <span
    type="button"
    class="toggle"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvas"
    aria-controls="offcanvasExample"
  >
    <i class="fa-solid fa-bars"></i>
  </span>
  <OffCanvas></OffCanvas>
</template>

<script>
import OffCanvas from './OffCanvas.vue';

export default {
    name: "AppHeaderToggle",
    data() {
        return {};
    },
    components: { OffCanvas }
};
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
