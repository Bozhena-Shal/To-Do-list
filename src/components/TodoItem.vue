<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    emits: ['remove']
}
</script>

<template>
    <li>
        <input 
        type="checkbox"
        v-model="todo.done"
        >
        <span :class="{done: todo.done}">
            {{ todo.text }}
        </span>
        <button @click="$emit('remove', todo)">
            Х
        </button>
    </li>
</template>

<style>
.done {
    text-decoration: line-through;
}
</style>