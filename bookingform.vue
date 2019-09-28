<template>
<div class="container">
	<div class="row ">
        <div class="control-group col-md-12" id="fields">
            <div class="controls "> 
                <form role="form" autocomplete="off">
                    <div class="jumbotron" v-for="pack in packages" >
                        <p>Booking for ID: {{pack.package_id}}</p>
                        <p>Booking for: {{pack.package_name}}</p>
                        <p>Booking for Source: {{pack.source}}</p>
                    </div>
                    <div class="entry input-group col-xs-3">
                     <input class="form-control" name="name" type="text" placeholder="Name" />
                        <input class="form-control " name="age" type="text" placeholder="Age" />
                        <input class="form-control" name="pnumber" type="text" placeholder="Phone Number" />
                    	<span class="input-group-btn">
                            <button class="btn btn-success btn-add" type="button">
                                <span class="glyphicon glyphicon-plus">+</span>
                            </button>

                        </span>
                    </div>
                </form>
            <br>
           
            </div>
        </div>
	</div>
    <hr>
    <div class="coaches" >
      <label for="e">Executive Coach</label>
      <input type="radio" v-model="response" name="options" :value="executive" id="e" >|
      <label for="p">Premiere Coach</label>
      <input type="radio" v-model="response" name="options" :value="premium" id="p">|
      <label for="c">Club Coach</label>
      <input type="radio" v-model="response" name="options" :value="club" id="c">

    </div>
    
    <div class="seats" v-if="response == executive">
        <label>select seat:</label>
        <select for="seatexecutive">
            <option  v-for="d in vaccantexecutive">{{d.seat_number}}</option>
        </select>
        <p>All the add ons are includede in this package.</p>
    </div>

    <div class="seats" v-if="response == premium">
        <label>select seat:</label>
        <select for="seatpremier">
            <option  v-for="d in vaccantpremier">{{d.seat_number}}</option>
        </select>
        <p>Wifi is included but not spa, select if you want.</p>
    </div>

    <div class="seats" v-if="response == club">
        <label>select seat:</label>
        <select for="seatclub"> 
            <option  v-for="d in vaccantclub">{{d.seat_number}}</option>
        </select>
        <p>No add ons available, you can select if you want.</p>
    </div>

    <div class="addon" v-if="response == premium"  v-for="pack in packages">
        spa: <input type="checkbox"  :value="pack.wifi">
    </div>
    <div class="addon" v-if=" response == club" v-for="pack in packages">
     wifi: <input type="checkbox" v-model="spa" :value="pack.spa">
    spa: <input type="checkbox" v-model="wifi"  :value="pack.wifi">
    </div>

    <div class="price" >
        <p>Rs. {{totalprice}}</p>
    </div>
     
    {{spa}}
    {{wifi}}
    <hr>
    <div>
        <button>Submit</button>
    </div>
</div>


</template>

<script>
export default {
    data(){
        return{
            response:[],
            executive:'executive',
            premium:'premium',
            club:'club',
            packages:[],
            wifi:[],
            spa:[],
            totalprice:0,
            vaccantexecutive:[],
            vaccantpremier:[],
            vaccantclub:[]
        }
    },
    beforeMount() {
     var id = this.$route.params.id
     console.log(id)

    this.$http.get('http://localhost:8080/api/display/'+ id)
      .then(response=>{
        this.packages= response.body;
        console.log(this.packages)
       })

       this.$http.get('http://localhost:8080/api/coaches/executive/vaccant')
      .then(response=>{
        this.vaccantexecutive= response.body;
      })

      this.$http.get('http://localhost:8080/api/coaches/premier/vaccant')
      .then(response=>{
        this.vaccantpremier= response.body;
      })
      this.$http.get('http://localhost:8080/api/coaches/club/vaccant')
      .then(response=>{
        this.vaccantclub= response.body;
      })
  },
  methods:{
      executives: function(){
          this.totalprice = this.totalprice + this.packages[0].price_exeutive
      },
      premier: function(){
          this.totalprice = this.totalprice + this.packages[0].price_premier
      },
      club: function(){
          this.totalprice = this.totalprice + this.packages[0].price_club
      }
  },

} 

$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus">-</span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});
});


</script>


<style scoped>
.container{

    margin: 0px auto;
}
.entry:not(:first-of-type)
{
    margin-top: 10px;
}

.glyphicon
{
    font-size: 12px;
}

.entry button{
    margin-left: 5px;
}
.coaches input{
    margin: 0px 15px 0px 15px;
}
.addon{
margin: 10px 0px 10px 0px;
}
</style>
