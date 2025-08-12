<script>
export default {
    emits: ['add'],
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        handleSubmit() {
            if (this.newTodo.trim()) {
                this.$emit('add', this.newTodo)
                this.newTodo = ''
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input 
        v-model="newTodo"
        required
        placeholder="Новая задача"
        >
    </form>
</template>