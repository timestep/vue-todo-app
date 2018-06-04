<template>
  <div id="app">
    <Todo />
    <TodoList />
  </div>
</template>

<script>
import Todo from './components/Todo.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',
  components: {
    Todo,
    TodoList,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 2rem;
  display: flex;
}
</style>
