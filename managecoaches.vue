<template>
  <div class="managecoach col-md-12">
    <div class="col-md-12">
      <h1>Manage Coaches</h1>
    </div>
    <hr>
    <div class="view">
        <table class="table ">

            <thead class="thead-light">
                <tr>
 <th scope="col">#</th>
                    <th scope="col">Coach Id</th>
                    <th scope="col">Coach Name</th>
                    <th scope="col">Seats</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="coach in coaches">
                    <th scope="row">{{coach.length}}</th>
                    <td>{{coach.coach_id}}</td>
                    <td>{{coach.coach_name}}</td>
                    <td>{{coach.seats}}</td>
                    <td><button v-on:click="deletecoach(coach.coach_id)">Delete</button></td>
                </tr>
            </tbody>
        </table> 
    <div class="option">
        <button v-on:click="addcoach=!addcoach">Add coaches</button>
    </div>        
    </div>

    <div class="add col-md-12" v-if="addcoach">
        
            <label for="tno">coach Id : </label>
            <input type="text" v-model="coach_id" placeholder="coach Number" >
            <br>
            <label for="tname">coach Name : </label>
            <input type="text" v-model="coach_name" placeholder="coach Name" >
            <br>
            <label for="pid">seats : </label>
            <select v-model="seats">
                <option v-for="megad in mega">{{megad.seats}}</option>
            </select>
            <br>  
            <button v-on:click="addacoach">Add</button>
    </div>  
 
  </div>
</template>

<script>
export default {
  name: 'managecoach',
  props: {
  },
  data(){
    return {
      viewcoach:true,
      addcoach:false,
      coaches:[],
      mega:[],
      index:1,
      coach_id:null,
      coach_name:null,
      seats:null,
      delete:[],
      tr:[]
    }
  },
  beforeMount() {
    this.$http.get('http://localhost:8080/api/coaches')
      .then(response=>{
        this.coaches= response.body;
        console.log(this.coaches.length)
      })

       this.$http.get('http://localhost:8080/api/display/mega')
      .then(response=>{
        this.mega= response.body;
      })
  },
  methods:{
      deletecoach:function(id){
         this.$http.delete('http://localhost:8080/api/coaches/' + id)
        .then(response=>{
        this.delete= response.body;
                this.$swal('coach with id:'+ id +' has been deleted please refresh')

        console.log(this.delete)
      })

      },
      addacoach:function(){
         this.$http.post('http://localhost:8080/api/coaches/', {
             coach_number:this.coach_number,
             coach_name:this.coach_name,
             seats:this.seats
         })
        .then(response=>{
        this.tr= response.body;
        this.$swal('coach has been added please refresh')
        console.log(this.tr)
      })

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
