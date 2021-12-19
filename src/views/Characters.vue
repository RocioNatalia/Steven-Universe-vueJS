<template>
  <div class="characters">
    <div v-for="(item, i) in characters" :key="item.id">
      <div class="characters-container" v-if="item.active">
        <div class="name-character">
          <div class="arrow-button" @click="changeCharacter(-1, i)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#f162b1"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
              />
            </svg>
          </div>
          <transition name="fade" appear
            ><div>{{ item.name }}</div></transition
          >

          <div class="arrow-button" @click="changeCharacter(+1, i)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#f162b1"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"
              />
            </svg>
          </div>
        </div>

        <transition name="fade" appear>
          <div
            class="character-image"
            v-bind:style="{ 'background-image': 'url(' + item.urlImage + ')' }"
          ></div>
        </transition>
        <transition name="fade" appear>
          <div class="description">{{ item.description }}</div>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Characters",
  methods: {
    changeCharacter(type, index) {
      let move = type + index;

      if (type < 0) {
        move < 0 ? (move = this.characters.length - 1) : (move = type);
      }

      if (type > 0) {
        move > this.characters.length - 1
          ? (move = -(this.characters.length - 1))
          : (move = type);
      }

      this.characters[index].active = false;
      this.characters[index + move].active = true;
    },
  },
  data() {
    return {
      characters: [
        {
          id: 1,
          name: "Steven",
          urlImage:
            "https://qph.fs.quoracdn.net/main-qimg-fc24daa656740e920a2ed8c4aba0b196",
          description:
            "Steven es el bicho raro y torpe del equipo. Puede no ser tan poderoso o inteligente como las otras gemas, ¡pero siempre encuentra una manera sorprendente de salvar el día!",
          active: true,
        },
        {
          id: 2,
          name: "Perla",
          urlImage:
            "https://i.pinimg.com/originals/91/28/8a/91288a46abdba887aa0d781a76a46007.png",
          description:
            "Perla es una perfeccionista total que se frusta fácilmente cuando algo arruina sus planes. Ese algo es usualmente Steven. Su arma es una lanza mágica.",
          active: false,
        },
        {
          id: 3,
          name: "Amatista",
          urlImage:
            "https://i.pinimg.com/originals/bf/3d/9d/bf3d9d97eb267f98fd03252bcb311cb1.png",
          description:
            "Amatista es la más salvaje de las Crystal Gems. Ella adora perder el tiempo con Steven e intercambiar bromas.Su arma es un látigo de cristal el cual conjura a través de la gema que tiene en su pecho.",
          active: false,
        },
        {
          id: 4,
          name: "Garnet",
          urlImage:
            "https://upload.wikimedia.org/wikipedia/en/d/d7/Garnet_-_Steven_Universe.png",
          description:
            "Es una fuerte y disciplinada guerrera y la líder no oficial del grupo. Es una gema de pocas palabras y prefiere hablar con sus poderosos puños.",
          active: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.characters {
  margin: 15vh 0;
  display: flex;
  justify-content: center;
}

.characters-container {
  max-width: 500px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name-character {
  font-size: 24px;
  font-weight: bold;
  color: #ffd249;
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
}

.arrow-button {
  margin: 0 10px;
}

.arrow-button:hover {
  cursor: pointer;
}
.description {
  padding: 0 30px;
  text-align: justify;
}

.character-image {
  width: 25vw;
  height: 25vw;
  min-width: 300px;
  min-height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 15px 0;
}

@media only screen and (max-width: 700px) {
  .characters {
    margin-top: 15vh;
  }

  .character-image {
    min-width: 200px;
    min-height: 200px;
  }
  .name-character{
     width: 90%;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>