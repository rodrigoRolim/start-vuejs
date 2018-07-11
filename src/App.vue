<template>
  <section id="todoapp">
    <header class="header">
      <h1>Tarefas</h1>
    </header>
   <input-task class="input"></input-task>
   <task-list v-bind:todo-list="tasks"></task-list>
   <router-link class="cep" to="/cep">Verificar Cep</router-link>
  </section>
</template>

<script>
import InputTask from './components/InputTask'
import TaskList from './components/TaskList'

export default {
  name: 'App',
  components: {
    InputTask,
    TaskList
  },
  data() {
    return {
      tasks: []
    }
  },
  mounted () {
    console.log('viajem');
    this.$events.on('newTask', eventData => this.addTask(eventData))
  },
  methods: {
    addTask(task) {
      console.log(task);
      this.tasks.push(task)
    }
  }

}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#todoapp {
   display: flex;
   flex-direction: column;
}
.cep {
  align-self: center;
  text-decoration: none;
}
.header {
  background-color: rgb(95, 95, 235);
  color: white;
  width: 100%;
  display: flex;
}
h1 {
  padding: 0;
  margin: 0;
  width: 80%;
  align-self: center;
}
.input{
  align-items: center;
  width: 20%;
}
</style>
