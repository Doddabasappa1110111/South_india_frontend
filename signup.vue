<template>
  <div class="signup">
    <br><br>  
<input type="text" name=""   class="uname" placeholder="Username">
<br>
<br>
<input type="password" name=""  class="pwd" placeholder="Password">
<br>
<br>
<input type="password" name=""  class="cpwd" placeholder="Confirm Password">
<br>
 <br>
<input type="submit" name="" value="signup">


  </div>
</template>

<script>
export default {
  name: 'signup',
  props: {
  }
}
</script>

<style scoped>

.uname, .pwd, .cpwd {
	border:1px solid #e1d7ad;
	width: 230px;
	color:#6666;
	padding:3px;
	margin-right:4px;
	margin-bottom:10px;
	font-family:tahoma, arial, sans-serif;
}

</style>
