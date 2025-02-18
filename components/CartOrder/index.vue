<script setup>
import ButtonWithIcon from '@/components/ui/ButtonWithIcon'
</script>

<template>
	<div class="order__container">
		<span class="span__total">Итого:</span>
		<span class="span__dashed"></span>
		<span class="span__price">21 498 руб.</span>
	</div>
	<div class="order__container">
		<span class="span__total">Налог 5%:</span>
		<span class="span__dashed"></span>
		<span class="span__price">1074 руб.</span>
	</div>
	<ButtonWithIcon text="Оформить заказ" :isDisabled="true" />
</template>

<style scoped>
@import './style.scss';
</style>
