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

<style scoped>
form {
  display: flex;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  outline: none;
  transition: border 0.3s;
}

input:focus {
  border-color: #42b983;
}

button {
  padding: 10px 15px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

button:hover {
  background: #369f6b;
}
</style>