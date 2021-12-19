<template>
  <div class="characters">
    <div v-for="item in characters" :key="item.id">
      <div v-if="item.active">{{ item.name }} <br />{{ item.description }}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Characters",
  data() {
    return {
      characters: [
        {
          id: 1,
          name: "Steven",
          description:
            "Steven es el bicho raro y torpe del equipo. Puede no ser tan poderoso o inteligente como las otras gemas,¡pero siempre encuentra una manera sorprendente de salvar el día!",
          active: true,
        },
        {
          id: 2,
          name: "Perla",
          description:
            "Perla es una perfeccionista total que se frusta fácilmente cuando algo arruina sus planes.Ese algo es usualmente Steven. Su arma es una lanza mágica.",
          active: false,
        },
        {
          id: 3,
          name: "Amatista",
          description:
            "Amatista es la más salvaje de las Crystal Gems. Ella adora perder el tiempo con Steven e intercambiar bromas.Su arma es un látigo de cristal el cual conjura a través de la gema que tiene en su pecho.",
          active: false,
        },
        {
          id: 4,
          name: "Garnet",
          description:
            "Es una fuerte y disciplinada guerrera y la líder no oficial del grupo.Es una gema de pocas palabras y prefiere hablar con sus poderosos puños.",
          active: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.characters {
  color: #ffffff;
}
</style>