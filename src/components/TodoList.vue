<script>
import TodoItem from './TodoItem.vue';

export default {
    components: { TodoItem },
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    emits: ['remove']
}
</script>

<template>
    <ul>
        <TodoItem 
        v-for = "todo in todos"
        :key = "todo.id"
        :todo="todo"
        @remove="$emit('remove', 'todo')"
        />
    </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>