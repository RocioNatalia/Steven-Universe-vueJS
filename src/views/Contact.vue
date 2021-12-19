<template>
  <div
    class="bottom-image"
    v-bind:style="{ 'background-image': 'url(' + image + ')' }"
  >
    <div class="form-container">
      <basic-input
        v-model="form.name"
        label="Tu nombre"
        type="text"
      ></basic-input>
      <basic-input
        v-model="form.email"
        label="E-mail"
        type="email"
      ></basic-input>
      <basic-input
        v-model="form.message"
        label="Escribenos tu mensaje"
        type="textarea"
      ></basic-input>

      <button class="basic-button">Enviar</button>
    </div>
  </div>
</template>

<script>
import image from "../assets/imagen-footer.png";
import BasicInput from "../components/BasicInput.vue";

export default {
  components: { BasicInput },
  name: "Contact",
  data() {
    return {
      image: image,
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>

<style scoped>
.bottom-image {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

.form-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-top: 10vh;
  width: 90vw;
  max-width: 500px;
}

.basic-button {
  padding: 8px;
  margin: 10px 0;
  width: 100%;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  border-radius: 4px;
  border: none;
  background-color: #ffd249;
}

.basic-button:hover {
  cursor: pointer;
  border: solid 2px #d3a827;
  padding: 6px;
}

@media only screen and (max-width: 700px) {
  .form-container {
    width: 85vw;
    margin-top: 5vh;
  }
}
</style>