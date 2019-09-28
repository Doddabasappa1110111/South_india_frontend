<template>
  <div class="home">
   <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
   <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/train11.jpg" alt="banner" width="100%" >
      <div class="carousel-caption">
        <h3>“The gladdest moment in human life is a departure into unknown lands.”</h3>
        <p>Plan your holiday now!</p>
        <button class="btn btn-primary"><router-link to="/packages">Book Now</router-link></button>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="../assets/train22.jpg" alt="banner2" width="100%" >
      <div class="carousel-caption">
        <h3>“Better to see something once than hear about it a thousand times”</h3>
        <p>Thank you, Mumbai!</p>
                <button class="btn btn-primary"><router-link to="/packages">Book Now</router-link></button>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="../assets/train33.jpg" alt="banner3" width="100%" >
      <div class="carousel-caption">
        <h3>“Travel and change of place impart new vigor to the mind.”</h3>
        <p>Thank you, Hyderabad!</p>
                <button class="btn btn-primary"><router-link to="/packages">Book Now</router-link></button>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
<defaultcomponent></defaultcomponent>
</div>
</template>

<script>
import defaultcomponent from './dafault'
export default {
  name: 'home',
  props: {
  },
  components:{
    defaultcomponent
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
.carousel-caption{
  font-family: 'Josefin Sans', sans-serif;
  
}
.carousel-caption a{
  color: whitesmoke;
    text-decoration: none;
}
</style>
