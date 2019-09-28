<template>
  <div id="display">
  <div class="padding">
     <div class="container" style="margin-top:30px">
  <div class="row">
    <div class="col-sm-4">
     
      <div class="fakeimg" v-for="pack in packages">
          <img :src="pack.image" width="450px;">
      </div>
     
    </div>
    <div class="col-sm-8 custom" v-for="pack in packages">
      <div class="any">
          <h2>{{pack.package_name}}</h2>
            <p>Source: {{pack.source}}</p><br>
            <p>Price Breakdown</p>
            <p>Executive: Rs. {{pack.price_exeutive}}</p>
            <p>Premier: Rs. {{pack.price_premier}}</p>
            <p>Club: Rs. {{pack.price_club}}</p>
      </div>
        <p>Add on</p>
        <p>Wifi: {{pack.wifi}}</p>
        <p>Spa: {{pack.spa}}</p>
      <button class="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>

  </div>   
  </div>
</template>

<script>


export default {
  name: 'display',
  data(){
      return{
          packages:[]
      }
  },
  components: {
  },
  mounted(){
  },
  created(){
},
beforeMount() {
     var id = this.$route.params.id
     console.log(id)
    this.$http.get('http://localhost:8080/api/display/' + id)
      .then(response=>{
        this.packages= response.body;
      })
  },
}
</script>

<style>
.padding{
  margin-top: 90px;
}
.custom{
    line-height: 8px;
}
.any{
    margin-bottom: 4px;
}
</style>
