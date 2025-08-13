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

<style scoped>
li {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

input[type="checkbox"] {
  margin-right: 12px;
  transform: scale(1.2);
  cursor: pointer;
}

span {
  flex: 1;
  transition: color 0.3s;
}

.done {
  color: #888;
}

button {
  background: none;
  border: none;
  color: #ff5a5f;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  margin-left: 10px;
  opacity: 0.7;
  transition: opacity 0.3s;
}

button:hover {
  opacity: 1;
}
</style>