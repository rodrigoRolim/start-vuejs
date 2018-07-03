<template>
  <div class="container">
    <input type="text" class="new-todo"
     @keyup.enter="addTask"
     placeholder="o que precisa ser feito?">
  </div>
</template>

<script>
import { Task } from '../models/Task'
export default {
  data () {
    return {
    }
  },
  methods: {
    addTask ($event) {
      let value = $event.target.value
      let task = this.createTask(value)
      this.broadcast(task)
      this.clearField()
    },
    createTask (value) {
      let task = new Task()
      task.completed = false
      task.title = value
      return task;
    },
    clearField ($event) {
      this.$el.querySelector('input').value = ''
    },
    broadcast (task) {
      this.$emit('newTask', task)
    }
  }
}
</script>

<style>
.new-todo {
    padding: 12px 10px;
    border-radius: 2px;
    border: 1px solid gainsboro;
}
</style>
