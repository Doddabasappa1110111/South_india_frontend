<template>
<nav class="navbar navbar-expand-md navbar-dark fixed-top m-0 p-0">
    <a class="navbar-brand"><router-link to="/">South India Heritage Express</router-link></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
         <a><router-link to="/" exact-active-class="active" >Home</router-link></a> 
        </li>
         <li class="nav-item">
         <a><router-link to="/packages"  exact-active-class="active">Packages</router-link></a> 
        </li>
        <li class="nav-item">
         <a><router-link to="/contact"  exact-active-class="active">Contact Us</router-link></a> 
        </li>
        <li class="nav-item" v-if="!login">
         <a><router-link to="/login" exact-active-class="active">Login</router-link></a> 
        </li>
         <li class="nav-item dropdown" v-if="login">
            <a class="nav-item dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a><router-link to="/login/myaccount">My Account</router-link></a>
              <a class="dropdown-item" href="#">My Bookings</a>
               <a class="dropdown-item" v-on:click="logout">Logout</a> 
            </div>
          </li> 
          <li class="nav-item dropdown" v-if="adminlogin">
            <a class="nav-item dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item"><router-link to="/admin/managepackage">Manage Packages</router-link></a>
              <a class="dropdown-item"><router-link to="/admin/managetrain">Manage Train</router-link></a>
              <a class="dropdown-item"><router-link to="/admin/managecoaches">Manage Coaches</router-link></a>
              <a class="dropdown-item"><router-link to="/admin/feedback">Queries</router-link></a>
               <a class="dropdown-item" v-on:click="logoutAdmin">Logout</a> 
            </div>
          </li> 
      </ul>
    </div>
  </nav>
   
</template>
<script src="https://unpkg.com/vue-slider"></script>

<script>
export default {
  name: 'navigation',
  data(){
    return{
      login:false,
      adminlogin:false,
      active1:true
    }
  },
  created(){
      var y = localStorage.getItem('username')
      if(y != null){
        this.login = true
      }else{
        this.login= false
      }
       var z = localStorage.getItem('adminname')
      if(z != null){
        this.adminlogin = true
      }else{
        this.adminlogin= false
      }
  },
  methods:{
    logout: function(){
      localStorage.removeItem('username')
      this.login= false
      this.$router.push('/')
    },
    logoutAdmin: function(){
      localStorage.removeItem('adminname')
      this.adminlogin= false
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
li.nav-item {
    padding-left: 8px;
    margin: 4px;
    text-decoration: none;
}
.navbar-toggler{
  color: black;
  background-color:black
}
.navbar-collapse ul li a{
  color: black;
    text-decoration: none;
    background-color: transparent;
}
.navbar-brand a {
    color: black;
    text-decoration: none;
    background-color: transparent;
    padding-left: 5px;
}
.navbar{
  background-color: #fff;
    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.1);
    -moz-box-shadow: 0 2px 5px rgba(0,0,0,.1);
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
    font-family: 'Ubuntu', sans-serif;
    padding: 10px 5px 10px 5px !important;}

.navbar-collapse ul li a:hover{
  color: green
}
.active{
  border-bottom: 3px solid rgb(170, 170, 146);
  padding-bottom: 7px
}

</style>
