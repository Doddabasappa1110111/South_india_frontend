<template>
  <div class="feedback">
    <div class="container">
            <h2 class="col-md-12">Queries</h2>	
            <hr>
			<div id="comments-wrapper" class= "col-md-12">
				<div class="comment clearfix" >
						<div class="comment-details" v-for="feedback in feedbacks">
							<span class="comment-name">Name: {{feedback.name}}</span>
							<br><span class="comment-date">Phone : {{feedback.phone}}</span>
                            <br><span class="comment-date">Email : {{feedback.email}}</span>
							<p>Message : {{feedback.message}}</p>
						 </div>
                        <hr>

					</div>
			</div>	
</div>
  </div>
</template>

<script>
export default {
  name: 'feedback',
  props: {
  },
  data(){
      return {
          feedbacks:[]
      }
  },
  beforeMount() {
    this.$http.get('http://localhost:8080/api/contact')
      .then(response=>{
        this.feedbacks= response.body;
        console.log(this.feedbacks)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
