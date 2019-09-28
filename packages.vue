<template>

  <div class="packages-container">
    <div class="container">
      <div class="row">
            <div class="col-md-4" v-for="pack in packages">
              <div class="card mb-4 shadow-sm">
                <img v-bind:src="pack.image" height="180px">
                <div class="card-body">
                <p class="card-text" style="font-family: 'Squada One', cursive;font-size:20px">
                  {{pack.package_name}}
                </p>
                  <p class="card-text">
                  From: {{pack.source}}
                </p>
                 <p class="card-text">
                  Base Fare: {{pack.price_exeutive}}
                </p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group cust">
                      <button type="button" class="btn btn-sm btn-outline-secondary" >
                      <router-link :to="{path: 'packages/' + pack.package_id, params : {id: pack.package_id}}">View Detail</router-link>
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" >
                      <router-link :to="{path: 'packages/train/' + pack.package_id, params : {id: pack.package_id}}">Book Now</router-link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>  
    <div class="container text-center" v-if="packages.length == 0">
    <div class="loader"></div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'packages',
  components:{
  },
  data(){
      return{
          toggler:false,
          packages:[],
          prices:[],
      }
  },
  beforeMount() {
    this.$http.get('http://localhost:8080/api/display')
      .then(response=>{
        this.packages= response.body;
      })

      this.$http.get('http://localhost:8080/api/prices')
      .then(response=>{
        this.prices= response.body;
      })
  },
  props: {
              specific:[]
  },
  methods:{
    view: function(id){
      var path='/package/' + id
      this.$router.push({ path: path ,params: { id:id }})
    }
  }
}
</script>


 <style scoped>
@import url('https://fonts.googleapis.com/css?family=Livvic&display=swap');
@import url('https://fonts.googleapis.com/css?family=Squada+One&display=swap');

.packages-container{
font-family: 'Livvic', sans-serif;
margin-top:100px;;
}
.cust a{
  text-decoration: none !important;
  color:black
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  margin: 20px auto;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>













 
