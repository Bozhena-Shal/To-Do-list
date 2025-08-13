<script>
import { ref } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import ToggleFilter from './components/ToggleFilter.vue'

let id = 0

export default {
  components: { TodoForm, TodoList, ToggleFilter },
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: []
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted 
      ? this.todos.filter((todo) => !todo.done)
      : this.todos
    }
  },
  methods: {
    addTodo(text) {
      this.todos.push({ id: id++, text, done: false })
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(t => t !== todo)
    }
  }
}
</script>

<template>
  <div class="app">
    <h1>Todo list</h1>
    <div class="container">
      <TodoForm @add="addTodo" />
      <ToggleFilter 
        :hide-completed="hideCompleted" 
        @toggle="hideCompleted = !hideCompleted" 
      />
      <TodoList 
        :todos="filteredTodos" 
        @remove="removeTodo" 
      />
    </div>
  </div>
</template>

<style>
/* Глобальные стили */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  margin: 0;
  padding: 20px;
}

.app {
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
  margin-bottom: 30px;
}

.container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
}
</style>