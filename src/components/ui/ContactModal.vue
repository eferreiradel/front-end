<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="ContactModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Contatta</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <form action="" method="POST" enctype="multipart/form-data">
                    <div class="my-4">
                      <input 
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      placeholder="Name"
                      >
                    </div>
                    <div class="mb-4">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="mb-4">
                      <textarea
                        name="content"
                        id="content"
                        class="form-control"
                        placeholder="Messaggio"
                        required
                      ></textarea>
                    </div>
                    <div class="mb-4">
                      <button type="submit" class="button my-bg-primary w-100">Invia</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    name: "ContactModal",
    data() {
        return {
            isVisible: false,
        };
    },
    methods: {
        hideModal() {
            this.isVisible = false;
        },
    },
};
</script>
<style lang="scss">
@import "../../style.scss";
</style>
