<<<<<<< HEAD
=======
<template>
  <div class="managepackage col-md-12">
    <div class="col-md-12">
      <h1>Manage the Packages</h1>
    </div>
    <hr>
    <div class="view">
        <table class="table">

            <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                    <th scope="col">Pakage Id</th>
                    <th scope="col">Package Name</th>
                    <th scope="col">Source</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Fare Id</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="apackage in packages">
                    <th scope="row">{{apackage.length}}</th>
                    <td>{{apackage.package_id}}</td>
                    <td>{{apackage.package_name}}</td>
                    <td>{{apackage.source}}</td>
                    <td>{{apackage.destination}}</td>
                    <td>{{apackage.fare_id}}</td>
                    <td><button v-on:click="deletepackage(apackage.package_id)">Delete</button></td>
                </tr>
            </tbody>
        </table> 
    <div class="option">
        <button v-on:click="addpackage=!addpackage">Add Packages</button>
    </div>        
    </div>

    <div class="add col-md-12" v-if="addpackage">
        
            <label for="pid">Package Id : </label>
            <select v-model="package_id">
                <option v-for="displayd in display" >{{displayd.package_id}}</option>
            </select>
            <br>
            <label for="pname">Package Name : </label>
            <input type="text" v-model="package_name" placeholder="Package Name" >
            <br>
            <label for="src">Source : </label>
            <input type="text" v-model="source" placeholder="Source Stattion" >
            <br>
            <label for="dest">Destination : </label>
            <input type="text" v-model="destination" placeholder="Destination Stattion" >
            <br>
            <label for="fid">Fare Id : </label>
            <select v-model="fare_id">
                <option v-for="displayd in display" >{{displayd.fare_id}}</option>
            </select>
            <br>  
            <button v-on:click="addapackage">Add</button>
    </div>  
 
  </div>
</template>

<script>
export default {
  name: 'managepackage',
  props: {
  },
  data(){
    return {
      viewpackage:true,
      addpackage:false,
      packages:[],
      display:[],
      index:1,
      package_id:null,
      package_name:null,
      source:null,
      destination:null,
      fare_id:null,
      delete:[],
      tr:[]
    }
  },
  beforeMount() {
    this.$http.get('http://localhost:8080/api/packages')
      .then(response=>{
        this.packages= response.body;
        console.log(this.packages)
      })

       this.$http.get('http://localhost:8080/api/display')
      .then(response=>{
        this.display= response.body;
      })
  },
  methods:{
      deletepackage:function(id){
         this.$http.delete('http://localhost:8080/api/packages/' + id)
        .then(response=>{
        this.delete= response.body;
                this.$swal('Package with id:'+ id +' has been deleted please refresh')

        console.log(this.delete)
      })

      },
      addapackage:function(){
         this.$http.post('http://localhost:8080/api/packages/', {
             package_id:this.package_id,
             package_name:this.package_name,
             source:this.source,
             destination:this.destination,
             fare_id:this.fare_id
         })
        .then(response=>{
        this.tr= response.body;
        this.$swal('Package has been added please refresh')
        console.log(this.tr)
      })

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
>>>>>>> 1816e05a4edbdbb5be5913f75ce6427b5e9b242b
