<template>
  <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://i.pinimg.com/originals/e3/94/06/e394067d60834cb6deaed2efd72b0432.jpg" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                   
                    <div class="profile-head col-md-6" v-for="d in user">
                            <h5>
                               {{d.name}}
                            </h5>
                            <h6>
                                Ticket Agent
                            </h6>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li>
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>           
                        </ul>
                    </div>
                    
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div class="col-md-6" v-for="d in user">
                                                <p>{{d.username}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                             <div class="col-md-6" v-for="d in user">
                                                <p>{{d.name}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                             <div class="col-md-6" v-for="d in user">
                                                <p>{{d.email}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6" v-for="d in user">
                                                <p>{{d.phone}}</p>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
</template>

<script>
export default {
  name: 'myprofile',
  data(){
      return{
          user:[]
      }
  },
  props: {
  },
   beforeCreate(){
       var y = localStorage.getItem('username')
      this.$http.get('http://localhost:8080/api/login/'+ y)
      .then(response=>{
        this.user= response.body;
        console.log(this.user)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    background: -webkit-linear-gradient(left, #4931af, #10c6gf);
}
.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 50%;
    height: 150px;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 51%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}
/* .profile-head .nav-tabs{
    margin-bottom:5%;
} */
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-tab label{
    font-weight: 600;
    margin-left: 350px;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
.profile-head.col-md-6 {
    padding-top: 50px;
}
</style>
