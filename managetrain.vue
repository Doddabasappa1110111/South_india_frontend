<template>
  <div class="managetrain col-md-12">
    <div class="col-md-12">
      <h1>Manage Trains</h1>
    </div>
    <hr>
    <div class="view">
        <table class="table">

            <thead class="thead-light">
                <tr>
                   <th scope="col">#</th>
                    <th scope="col">Train Number</th>
                    <th scope="col">Train Name</th>
                    <th scope="col">Package Id</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="train in trains">
                    <th scope="row">{{train.length}}</th>
                    <td>{{train.train_number}}</td>
                    <td>{{train.train_name}}</td>
                    <td>{{train.package_id}}</td>
                    <td><button v-on:click="deletetrain(train.train_number)">Delete</button></td>
                </tr>
            </tbody>
        </table> 
    <div class="option">
        <button v-on:click="addtrain=!addtrain">Add Trains</button>
    </div>        
    </div>

    <div class="add col-md-12" v-if="addtrain">
        
            <label for="tno">Train No : </label>
            <input type="text" v-model="train_number" placeholder="Train Number" >
            <br>
            <label for="tname">Train Name : </label>
            <input type="text" v-model="train_name" placeholder="Train Name" >
            <br>
            <label for="pid">Package Id : </label>
            <select v-model="package_id">
                <option v-for="megad in mega">{{megad.package_id}}</option>
            </select>
            <br>
            <label for="tid">Time Id : </label>
            <select v-model="time_id">
                <option v-for="megad in mega" >{{megad.time_id}}</option>
            </select>
            <br>  
            <button v-on:click="addatrain">Add</button>
    </div>  
 
  </div>
</template>

<script>
export default {
  name: 'managetrain',
  props: {
  },
  data(){
    return {
      viewtrain:true,
      addtrain:false,
      trains:[],
      mega:[],
      index:1,
      train_number:null,
      train_name:null,
      package_id:null,
      time_id:null,
      delete:[],
      tr:[]
    }
  },
  beforeMount() {
    this.$http.get('http://localhost:8080/api/trains')
      .then(response=>{
        this.trains= response.body;
        console.log(this.trains.length)
      })

       this.$http.get('http://localhost:8080/api/display/mega')
      .then(response=>{
        this.mega= response.body;
      })
  },
  methods:{
      deletetrain:function(id){
         this.$http.delete('http://localhost:8080/api/trains/' + id)
        .then(response=>{
        this.delete= response.body;
                this.$swal('Train with id:'+ id +' has been deleted please refresh')

        console.log(this.delete)
      })

      },
      addatrain:function(){
         this.$http.post('http://localhost:8080/api/trains/', {
             train_number:this.train_number,
             train_name:this.train_name,
             package_id:this.package_id,
             time_id:this.time_id
         })
        .then(response=>{
        this.tr= response.body;
        this.$swal('Train has been added please refresh')
        console.log(this.tr)
      })

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
