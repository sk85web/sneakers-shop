<script setup>
const emit = defineEmits(['handle-sort-change'])

const onChangeSelect = event => {
	emit('handle-sort-change', event.target.value)
}
</script>

<template>
	<select @change="onChangeSelect">
		<option value="name">По названию</option>
		<option value="-price">По по цене (дорогие)</option>
		<option value="price">По по цене (дешевые)</option>
	</select>
</template>

<style scoped>
@import './style.scss';
</style>
