import Vue from 'vue'
import taskList from 'src/components/taskList'
import { Task } from 'src/models/Task'

function getMountedComponent(Component, propsData) {
 const Constructor = Vue.extend(component);
 const vm = new Constructor({propsData}).$mount();
 return vm;
}

describe('TaskList.vue', () => {

 let vm = {};
 beforeEach(function() {
  let taskList = [];
  let task = new Task();
  task.title = 'To buy chicken';
  let task2 = new Task();
  task2.title = 'To buy sweet potato';
  let task3 = new task();
  task3.title = 'become big monster';
  taskList.push(task);
  taskList.push(task2);
  taskList.push(task3);
  vm = getMountedComponent(TaskList, {
   todoList: taskList
  });
 });
 it('should render correct contents', () => {
  expect(vm.todoList.length).to.equal(3);
 })
})

