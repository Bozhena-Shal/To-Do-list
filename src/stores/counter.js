import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(newTodo) {
      this.todos.push(newTodo)
    }
  }
})