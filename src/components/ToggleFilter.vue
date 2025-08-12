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
    <button @click="$emit('toggle')">
        {{ hideCompleted ? 'Показать все' : 'Скрыть выполненные' }}
    </button>
</template>