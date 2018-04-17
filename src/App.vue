<template>
  <section id="todoapp">
    <header class="header">
      <h1>Tarefas</h1>
    </header>
   <input-task class="input" @newTask="addTask"></input-task>
   <task-list v-bind:todo-list="tasks"></task-list>
    <div>
    <todo-list></todo-list>
  </div>
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
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    addTask (task) {
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
.todoapp {
   display: flex;
   flex-direction: row;
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
