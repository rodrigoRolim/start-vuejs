import Vue from 'vue';
import InputTask from 'src/components/InputTask';



describe('InputTask.vue', () => {
 let vm = {};
 beforeEach(function() {
  const Constructor = Vue.extend(InputTask);
  const vm = new Constructor().$mount();
 })
 it('Should render correct contents', () => {

  expect(vm.$el.querySelectorAll('.new-todo').length).to.equal(1);
 })
 it('should create the task correctly', () => {
 
  let task = vm.createTask('to buy milk');
  expect(task.title).to.equal('to buy milk');
  expect(task.completed).to.be.false;
 })
 it('should clean the input', () => {

  vm.$el.querySelector('.new-todo').value = 'to buy milk';
  vm.clearField();
  expect(vm.$el.querySelector('.new-todo').value).to.equal('');
 })
 it('should call the event', () => {
  let spy = sinon.spy();
  vm.$on('newTask', spy);
  vm.broadcast();
  expect(spy).to.hava.been.called;
 })
})