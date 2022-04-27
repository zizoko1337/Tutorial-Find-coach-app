<template>
  <section>FILTERe</section>
  <section>
    LIST OF COACHES
    <router-link to="/coaches/c1">Example coach</router-link>
    <div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
        </li>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']; // [ 'namespace name from ./store/index.js', 'getter name']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']; 
    },
  },
};
</script>
