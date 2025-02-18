<script setup>
import { DriverHead, CartItemsList, CartOrder } from '#components'
</script>

<template>
	<div class="wrapper"></div>
	<div class="cart-display">
		<DriverHead />
		<CartItemsList />
		<CartOrder />
	</div>
</template>

<style scoped>
@import './style.scss';
</style>
