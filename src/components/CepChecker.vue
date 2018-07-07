<template>
 <section class="cepChecker">
  <div class="group-form">
   <label for="cep">Digite seu cep</label>
   <input type="text" name="cep" id="cep"/>
  </div>
  <router-link class="home" to="/">ver tarefas</router-link>
 </section>
</template>
<script>
 export default {
  data (){
   return {

   }
  }
 }
</script>
<style>
.cepChecker {
 background-color: rgba(0,0,0,0.05);
 width: 50%;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
}
#cep {
 width: 100%;
 padding: 8px 7px;
 border-radius: 4px;
 border: 0.5px solid rgba(0,0,0,.2);

}
.group-form {
 align-self: center;
 display: flex;
 flex-direction: column;
}

 .home {
  width: 15%;
  align-self: center;
  text-decoration: none;
  border: 1px solid transparent;
  padding: 10px 12px;
  background-color: rgb(187, 185, 185);
  color: white;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
 }
</style>