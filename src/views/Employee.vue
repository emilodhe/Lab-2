<template>
  <div class="employee">
  <employeeList/>
  <h2>Vote for Your <strong>EMPLOYEE</strong> of the Month - {{ employeeQuestion }}</h2>
  <input v-model="employeeQuestion">
  <Button btn-text="Submit"/>
  </div>
</template>

<script>
import employeeList from '../components/employeeList'
import Button from '../components/Button'

export default {
  components: {
    employeeList,
    Button
  },
  data() {
    return {
      employeeQuestion: 'Emil'
    }
  }
}
</script>

<style scoped>

</style>