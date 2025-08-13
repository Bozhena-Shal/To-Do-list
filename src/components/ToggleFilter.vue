<script>
export default {
    props: {
        hideCompleted: {
            type: Boolean,
            required: true 
        }
    },
    emits: ['toggle']
}
</script>

<template>
    <button class="filter-btn" @click="$emit('toggle')">
        {{ hideCompleted ? 'Показать все' : 'Скрыть выполненные' }}
    </button>
</template>

<style scoped>
.filter-btn {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  background: #f5f5f5;
  color: #333;
}
</style>