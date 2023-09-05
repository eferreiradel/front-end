<template>
    <ContactModal></ContactModal>
  <div v-if="teacherData" class="container">
    <div class="d-flex flex-column flex-md-row flex-wrap mt-5">
      <div
        class="order-2 order-md-2 order-lg-1 d-flex flex-column gap-3 col-12 col-md-12 col-lg-7 mt-3"
      >
        <div class="d-flex ps-4 flex-column gap-2">
          <!-- <h5 class="p-4">{{ teacherData.name }} {{ teacherData.surname }}</h5> -->
          <div class="card w-100 p-4 rounded-top shadow-sm">
            <div class="py-3">
                <h3>{{ teacherData.description }}</h3>
            </div>
            <div class="px-0">
                <h4 class="py-3">Modalità</h4>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <div
                v-if="teacherData.is_live_lesson"
                class="rounded-pill border px-3 py-2"
              >
                <i class="fa-solid fa-location-pin"></i> In presenza
                {{ teacherData.city }}
              </div>
              <div
                v-if="teacherData.is_remote_lesson"
                class="rounded-pill border px-3 py-2"
              >
                <i class="fa-solid fa-video"></i> Via webcam
              </div>
            </div>
            <div class="container px-0">
              <button
              type="button"
                class="my-btn-container-static btn my-5 py-2 my-rounded my-bgGreen-btn"
                data-bs-toggle="modal"
                data-bs-target="#ContactModal">
                CONTATTA
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="order-1 order-md-1 order-lg-2 col-12 col-md-12 col-lg-5">
        <div class="card bg-primary shadow col-12 col-lg-8 offset-lg-4 mt-3 p-2">
          <div
            class="d-flex flex-column align-items-center text-light py-4 gap-3"
          >
            <img
              :src="teacherData.profile_image"
              class="img-fluid rounded-circle mt-3 my-border-img"
              alt="Nome Cognome"
            />
            <h2>{{ teacherData.name }} {{ teacherData.surname }}</h2>
            <p class="card-text m-0">
              <span
                :class="
                  teacherData.avg_vote >= 1
                    ? 'fa fa-star fs-5 checked'
                    : 'fa fa-star fs-5'
                "
              ></span>
              <span
                :class="
                  teacherData.avg_vote >= 2
                    ? 'fa fa-star fs-4 checked'
                    : 'fa fa-star fs-4'
                "
              ></span>
              <span
                :class="
                  teacherData.avg_vote >= 3
                    ? 'fa fa-star fs-3 checked'
                    : 'fa fa-star fs-3'
                "
              ></span>
              <span
                :class="
                  teacherData.avg_vote >= 4
                    ? 'fa fa-star fs-4 checked'
                    : 'fa fa-star fs-4'
                "
              ></span>
              <span
                :class="
                  teacherData.avg_vote >= 5
                    ? 'fa fa-star fs-5 checked'
                    : 'fa fa-star fs-5'
                "
              ></span>
            </p>
            <p>({{ teacherData.total_votes }} voti)</p>
            <div
              class="my-border d-flex gap-3 bg-light text-dark rounded-pill p-md-3 py-2 px-5 justify-content-around"
            >
              <div class="d-flex justify-content-center align-items-center p-2">
                <span>Tariffa oraria</span>
                <h5 class="ms-2 mb-0">{{ teacherData.price_for_hour }}€</h5>
              </div>
            </div>
            <div
              class="d-flex text-dark flex-wrap justify-content-center align-items-center gap-2 p-md-3"
            >
              <template v-for="subject in teacherData.subjects">
                <div class="my-border subject bg-light py-2 px-3 rounded-pill">
                  {{ subject.name }}
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column gap-5 mb-5 py-5 col-12">
      <div class="d-flex flex-column gap-2">
        <h3 class="ps-5">Recensioni</h3>
        <div class="p-4 ps-5">
          <span class="my-4">Lascia una recensione</span>
          <div class="col-12 col-md-6">
            <!-- FORM RECENSIONE -->
            <form action="" method="POST" enctype="multipart/form-data">
              <div class="my-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  placeholder="Nome"
                  required
                />
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
                <button type="submit" class="button">Invia</button>
              </div>
            </form>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <span class="mt-5 mb-4">Lascia una voto</span>
            <form action="" method="POST" enctype="multipart/form-data">
              <div class="my-4">
                <span
                  :class="
                    teacherData.avg_vote >= 1
                      ? 'fa fa-star fs-5 checked'
                      : 'fa fa-star fs-5'
                  "
                ></span>
                <span
                  :class="
                    teacherData.avg_vote >= 2
                      ? 'fa fa-star fs-4 checked'
                      : 'fa fa-star fs-4'
                  "
                ></span>
                <span
                  :class="
                    teacherData.avg_vote >= 3
                      ? 'fa fa-star fs-3 checked'
                      : 'fa fa-star fs-3'
                  "
                ></span>
                <span
                  :class="
                    teacherData.avg_vote >= 4
                      ? 'fa fa-star fs-4 checked'
                      : 'fa fa-star fs-4'
                  "
                ></span>
                <span
                  :class="
                    teacherData.avg_vote >= 5
                      ? 'fa fa-star fs-5 checked'
                      : 'fa fa-star fs-5'
                  "
                ></span>
              </div>
            </form>
          </div>
        </div>
        <div class="d-flex flex-column gap-4">
          <div
            v-for="review in teacherData.review"
            class="m-0 w-100 my-rounded border p-4 px-5"
          >
            <h5>{{ review.name }}</h5>
            <p class="m-0">{{ review.review_text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="mx-auto d-flex justify-content-center align-items-center">
          <button
            class="w-50 my-btn-container btn my-3 fs-5 py-3 position-fixed bottom-0 my-rounded my-bgGreen-btn w-100 text-center"
            data-bs-toggle="modal"
            data-bs-target="#ContactModal"
          >
            Prova
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="position-absolute top-50 start-50 translate-middle">
    Caricamento dati profilo...
  </div>
</template>

<script>
import ContactModal from "../components/ui/ContactModal.vue";
import { store } from "../store";

export default {
  name: "ShowTeacher",
  data() {
    return {
      store,
      teacherData: null,
    };
  },
  methods: {
    handleScroll() {
      const button = document.querySelector(".my-btn-container");
      if (window.scrollY > 600) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    store.getUserById(this.$route.params.userId).then((userData) => {
      this.teacherData = userData;
      console.log(this.teacherData);
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    ContactModal,
  },
};
</script>

<style scoped style lang="scss">
@import "../style.scss";

.my-bgGreen {
  background-color: $color__primary;
  border: 1px solid $color__dark;
}

.my-bgGreen-btn {
  background-color: $color__secondary;
  border: 1px solid $color__dark;
}

img {
  width: 150px !important;
}

.my-rounded {
  border-radius: 3rem;
}

.my-btn-container {
  color: $color__dark;
  max-width: 300px;
  border: 1px solid $color__dark;
  display: none;
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}
.my-btn-container:hover {
  background-color: $color__light !important;
  color: #000;
  border: 1px solid #000;
}

.my-btn-container-static {
  font-size: 1.2rem;
  padding: 3rem;
  color: $color__dark;
  border: 1px solid $color__dark;
}
.my-btn-container-static:hover {
  background-color: $color__light !important;
  color: #000;
  border: 1px solid #000;
}

.my-border {
  border: 1px solid $color__dark !important;
  border-radius: 15px;
}

.my-border-img {
  border: 3px solid $color__light !important;
}

h2 {
  font-weight: 700;
}
</style>
