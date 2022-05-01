<template>
<!-- page where new coaches can register -->
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
        <!-- save-data emit from coach-form, sends register coach object -->
        <coach-form @save-data="saveData"></coach-form> 
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
        //dispatch is using action
      this.$store.dispatch('coaches/registerCoach', data); //'namespace coaches/ action registerCoach' data is a parameter for action
      this.$router.replace('/coaches'); //navigates us to coaches
    }
  }
};
</script>