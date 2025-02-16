<script setup lang="ts">
import { Header, Intro, Products, CartDriver } from '#components'
</script>

<template>
	<CartDriver />
	<div class="container">
		<Header />
		<Intro />
		<Products />
	</div>
</template>

<style>
@import './assets/styles/global.scss';
</style>
