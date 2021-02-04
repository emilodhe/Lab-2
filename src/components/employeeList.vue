<template>
    <div>
        <h1>Employee List</h1>
    <table>
        <tr>
            <td><strong>Name</strong></td>
            <td><strong>Salary</strong></td>
            <td><strong>Age</strong></td>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
            <td>{{item.employee_name}}</td>
            <td>{{item.employee_salary}}</td>
            <td>{{item.employee_age}}</td>
        </tr>
    </table>
    <input id="button" type="button" @click="onClick" value="Previous Employee of the Month">
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name: 'employeeList',
    data() {
        return {
            list:undefined
            }
    },
    created()
    {
        Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response)=>{
            this.list=response.data.data
            //console.log(response.data.data)
        })
    },
    methods: {
        onClick: function () {
            alert('Sonya Frost')
        }
    }
}
</script>

<style>
table {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
td {
    text-align: left;
}
#button {
    margin: 50px;
    background-color: lightgreen;
    font-size: 20px;
    border-radius: 10px;
    padding: 10;
    margin-top: 10px;
    color: black;
}
</style>