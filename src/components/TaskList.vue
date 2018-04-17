<template>
  <div class="container">
    <ul class="todo-list">
      <li v-for="todo in sortedTasks" class="todo">
        <div class="view">
          <input type="checkbox" class="toggle" v-bind:id="'done-' + todo.title"
          @click="completeTask(todo)">
          <label :class="{ 'todo-completed': todo.completed }" v-bind:for="'done-' + todo.title">
          {{ todo.title }}
          </label>
          <!--<label v-if="todo.completed" class="todo-completed" v-bind:for="'done-' + todo.title">
            {{ todo.title }}
          </label>
          <label v-else v-bind:for="'done-' + todo.title">{{ todo.title }}</label>-->
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['todoList'],
  computed: {
    sortedTasks: {
      get: function () {
        let sorted = this.todoList
        return sorted.sort(function (a, b) {
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          return 0
        })
      },
      set: function (novaLista) {
        this.todoList.concat(novaLista)
      }
    }
  },
  methods: {
    completeTask (task) {
      task.completed = !task.completed
    }
  }
}
</script>
<style>
.container {
  background-color: whitesmoke;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.todo-list {
  background-color: white;
  border: 1px solid transparent;
  width: 70%;
  padding: 20px;
  margin: 15px auto;
  box-shadow: 1px 6px 6px rgba(0,0,0, 0.05);
}
li {
  list-style-type: none;
  border-bottom: whitesmoke;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin: 18px auto;
}
.toggle {
  bottom: 0;
  top: 0;
}
.todo-completed {
  text-decoration: line-through;
}
</style>
