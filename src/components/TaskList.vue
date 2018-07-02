<template>
  <div class="container">
    <ul class="todo-list">
      <li v-for="todo in sortedTasks" class="todo">
        <div class="view">
          <label class="container-label">
            <input type="checkbox" class="toggle" v-bind:id="'done-' + todo.title"
             @click="completeTask(todo)">
             <span class="draw-check"><span class="v">&#x2713;</span></span>
             <label :class="{ 'todo-completed': todo.completed, 'text-danger': isCritical }"
              v-bind:for="'done-' + todo.title">
              {{ todo.title }}
             </label>
          </label>
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
  .toggle {
   display: none;
  }
  .toggle:checked + .draw-check .v {
   visibility: visible;
  }
  .v {
   visibility: hidden;
  }
 .container-label{
   display: flex;
   flex-direction: row;
   cursor: pointer;
  }
  .container-label > label {
    margin-left: 10px;
  }
  .draw-check {
   margin-right: 5px;
   border: 1px solid rgba(0,0,0,0.2);
   border-radius: 100%;
   width: 22px;
   height: 22px;
   text-align: center;
  
  }
  .draw-check .v {
   color: rgb(110, 214, 124);
   font-weight: bold;
   
  }

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
  padding-bottom: 8px;
}
.toggle {
  bottom: 0;
  top: 0;
}
.todo-completed {
  text-decoration: line-through;
}
</style>
