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
      let task = new Task()
      task.completed = false
      task.title = value
      this.$emit('newTask', task)
      $event.target.value = ''
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
