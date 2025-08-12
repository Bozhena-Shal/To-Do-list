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
  <TodoForm @add="addTodo" />
  <ToggleFilter 
    :hide-completed="hideCompleted" 
    @toggle="hideCompleted = !hideCompleted" 
  />
  <TodoList 
    :todos="filteredTodos" 
    @remove="removeTodo" 
  />
</template>