<template>
  <!-- Modal -->
  <div class="modal fade" id="ContactModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Contatta</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <form @submit.prevent="this.sendMessageForm">
                    <div class="mb-4">
                      <input v-model="this.contactForm.email" type="email" name="email" id="email" class="form-control"
                        placeholder="Email" required>
                    </div>
                    <div class="mb-4">
                      <textarea v-model="this.contactForm.message_text" name="content" id="content" class="form-control"
                        placeholder="Messaggio" required></textarea>
                    </div>
                      <button type="submit" class="btn btn-primary">Invia</button>
                    <div v-if="this.sendMessage == true">
                      <p class="text-success">Messaggio inviato con successo! &#10003</p>
                    </div>
                    <div v-if="this.sendMessage == false">
                      <p class="text-danger">Ops qualcosa è andato storto! &#10007;</p>
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
import { store } from '../../store';
import axios from 'axios'


export default {
  name: "ContactModal",
  data() {
    return {
      store,
      sendMessage:null,
      isVisible: false,
      contactForm: {
        userId: this.$route.params.userId,
        email: '',
        message_text: ''
      },
    };
  },
  methods: {
    sendMessageForm() {
      axios.post('http://localhost:8000/api/sendmessage', this.contactForm)
        .then(response => {
          console.log(response);
          this.sendMessage = true;
          this.contactForm.email = "";
          this.contactForm.message_text = "";
        })
        .catch(error => {
          console.error(error);
          this.sendMessage = false;
        });
      
    }

  },
};
</script>
<style lang="scss">
@import "../../style.scss";
</style>
