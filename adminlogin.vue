<template>
  <div class="Adminlogin">
    <form class="form-signin">
    <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal">Admin</h1>

    <div class="error" v-if="error">
        <p>{{result.msg}}</p>
      </div>

    <label for="inputEmail" class="sr-only">Email address</label>
    <input class="form-control" placeholder="Email address" autofocus v-model="username">
    <label for="inputPassword" class="sr-only">Password</label>
    <input class="form-control" placeholder="Password" v-model="password">
    <button class="btn btn-lg btn-primary btn-block mt-2" type="submit" v-on:click="signup">Login </button>
    
    </form>

  <div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'adminlogin',
  components: {
  },
  props:{
  },

  data(){
    return{
        username:'',
        password:'',
        result:[],
        sucessful:[],
        error:false
    }
  },
  methods:{
    signup: function(){
       this.$http.post('http://localhost:8080/api/admin/',{
         username: this.username,
        password: this.password
       })
      .then(response=>{
      this.result= response.body;
      
      if(this.result.err == 0){
        console.log(this.result)
        localStorage.setItem('adminname', this.result.username)
        this.$router.push('/')
        }else{
          this.error = true
        }
      })
    }
  }
}
</script>

<style scoped>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin: 5px 5px 5px 5px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin: 5px 5px 10px 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
input.form-control {
    margin: 10px 10px 10px 10px;
}
button.btn.btn-lg.btn-primary.btn-block.mt-2 {
    margin: 10px;
}
h1.h3.mb-3.font-weight-normal {
    margin: 5px;
    font-size: 26px;
}
textarea .form-control{
      margin: 10px 10px 10px 10px
}
.error{
  color: red;
}
</style>
