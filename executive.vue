<template>
  <div class="executive">
      <div class="first" v-show="first">
          <div class="custom">
              <h1>First Executive Coach</h1>
        <div class="buttons">
            <button v-on:click="add('E1S1')">E1</button>
            <button v-on:click="add('E1S2')">E2</button>
        </div>
        <button class="three" v-on:click="add('E1S3')">E3</button>
    </div>
    <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E1S4')">E4</button>
            <button v-on:click="add('E1S5')">E5</button>
        </div>
        <button class="three" v-on:click="add('E1S6')">E6</button>
    </div>
    <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E1S7')" :disabled="booked">E7</button>
            <button v-on:click="add('E1S8')">E8</button>
        </div>
        <button class="three" v-on:click="add('E1S9')">E9</button>
    </div>


    <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E1S10')" :disabled="booked">E10</button>
            <button v-on:click="add('E1S11')">E11</button>
        </div>
        <button class="three" v-on:click="add('E1S12')">E12</button>
    </div>
    
      </div>

    <div class="more" v-show="Second">
        <div class="custom">
             <h1>Second Executive Coach</h1>

        <div class="buttons">
            <button v-on:click="add('E2S1')">E1</button>
            <button v-on:click="add('E2S2')">E2</button>
        </div>
        <button class="three" v-on:click="add('E1S3')">E3</button>
    </div>
    <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E2S4')">E4</button>
            <button v-on:click="add('E2S5')">E5</button>
        </div>
        <button class="three" v-on:click="add('E2S6')">E6</button>
    </div>
    <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E2S7')">E7</button>
            <button v-on:click="add('E2S8')">E8</button>
        </div>
        <button class="three" v-on:click="add('E2S9')">E9</button>
    </div>
     <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E2S10')">E10</button>
            <button v-on:click="add('E2S11')">E11</button>
        </div>
        <button class="three" v-on:click="add('E2S12')">E12</button>
    </div>
    
<div class="third" v-show="third">
          <div class="custom">
              <h1>third Executive Coach</h1>
        <div class="buttons">
            <button v-on:click="add('E3S1')">E1</button>
            <button v-on:click="add('E3S2')">E2</button>
        </div>
        <button class="three" v-on:click="add('E3S3')">E3</button>
    </div>
    <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E3S4')">E4</button>
            <button v-on:click="add('E3S5')">E5</button>
        </div>
        <button class="three" v-on:click="add('E1S6')">E6</button>
    </div>
    <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E3S7')" :disabled="booked">E7</button>
            <button v-on:click="add('E3S8')">E8</button>
        </div>
        <button class="three" v-on:click="add('E3S9')">E9</button>
    </div>
    <div class="custom">
        <div class="buttons">
            <button v-on:click="add('E3S10')" :disabled="booked">E10</button>
            <button v-on:click="add('E3S11')">E11</button>
        </div>
        <button class="three" style="text-align:center" v-on:click="add('E3S12')">E12</button>
    </div>

    </div>
    <p>{{seats}}</p>

    <button class="prev" v-on:click="prev" >Prev</button>
    <button class="next" v-on:click="next">Next</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
     return {
         seats:[],
         Second: true,
         third: true,
         first: true,
         
     }
  },
  props: {
  },
  methods:{
      add(num){
          this.seats.push(num)
      },prev(){
          this.first = true;
            this.Second= true;
            this.third= true;
            
      },
      next(){
        this.first = false;
            this.Second= true;
            this.third = true; 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom{
    background-color: red;
    width: 500px;
    margin: 0px auto;
}
.buttons button{
    margin:14px 4px 4px 14px;
}
.three{
    margin-top: 10px;
      top: 10%;
      left: 10%;
      text-align:  center;
}
</style>
