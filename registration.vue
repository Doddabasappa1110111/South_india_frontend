<template>
  <div class="registration">
<div class="container col-md-8 pb-4">
  <div class="row">
    
    <div class="col-md-12 order-md-1">
      <h4 class="mb-3">Sign in Here!</h4>
      <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">Name</label>
            <input type="text" class="form-control" v-model="name" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
              first name is required.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Username</label>
            <input type="text" class="form-control"  v-model="username" id="lastName" placeholder="" value="" required v-on:keyup.enter="check"> <button v-on:click="check">Check</button>
            <div class="invalid-feedback">
               last name is required.
            </div>
            <div class="" v-if="!valid">
              Username already exist
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" v-model="email" id="email" placeholder="you@example.com">
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
         </div>

        <div class="mb-3">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="password" id="password" required>
          <div class="invalid-feedback">
            Please enter password.
          </div>
        </div>
        <div class="mb-3">
          <label for="password">Repeat Password</label>
          <input type="password" class="form-control" v-model="repeatpassword" id="cpassword"  required>
          <div class="invalid-feedback">
            Not a Match
          </div>
        </div>
        {{username}}
        <button class="btn btn-primary btn-md" type="submit">Sign In</button>
      </form>
  </div>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'registration',
  props: {
  },
  data(){
    return{
      name:null,
      username:null,
      usernames:[],
      valid:true,
      password:null,
      repeatpassword:null,
      notcorrect:false,
      email:null
    }
  },
  beforeMount(){
    this.$http.get('http://localhost:8080/api/login/user/names')
      .then(response=>{
        this.usernames= response.body;
        console.log(this.usernames)
      })
  },
  methods:{
    check: function(){
      console.log('working')
      for (var i in this.usernames){
      if(this.username == this.usernames[i]){
        console.log('Taken')
        this.valid = false;
      }else{

        this.valid = true;
      }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
