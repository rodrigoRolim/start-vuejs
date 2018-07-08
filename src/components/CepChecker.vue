<template>
 <section class="cepChecker">
  <div class="group-form">
   <label for="cep">Digite seu cep</label>
   <input v-mask="'99999-999'" @blur="checkcep" type="text" name="cep" id="cep"/>
  </div>
  <router-link class="home" to="/">ver tarefas</router-link>
  <div v-show="hasAdress()" class="logradouro">
   <p>Rua: {{address.logradouro}}</p>
   <p>Bairro: {{address.bairro}}</p>
   <p>Cidade: {{address.cidade}}</p>
   <p>Estado: {{address.estado}}</p>
  </div>
 </section>
</template>
<script>
 import AwesomeMask from 'awesome-mask'
 export default {
  data(){
   return {
    address: {}
   }
  },
  directives: {
   'mask': AwesomeMask
  },
  methods: {
   checkcep($event) {
    let cep = $event.target.value;
    this.$http.get('http://api.postmon.com.br/v1/cep/' + cep)
    .then((res) => {
     this.address = res.body;
    }, (error) => {
     console.log(error);
    })
   },
   hasAdress() {
    return Object.keys(this.address).length > 0
   }
  }
 }
</script>
<style>
.logradouro {
 align-self: center;
 text-align: center;
 margin-top: 22px;
}
.cepChecker {
 background-color: rgba(0,0,0,0.05);
 width: 50%;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 padding-bottom: 250px;
}
#cep {
 width: 100%;
 padding: 8px 7px;
 border-radius: 4px;
 border: 0.5px solid rgba(0,0,0,.2);
 margin-top: 3px;
}
.group-form {
 align-self: center;
 display: flex;
 flex-direction: column;
 margin-top: 20px;
}

 .home {
  margin-top: 20px;
  align-self: center;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
 }
</style>