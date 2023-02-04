<template>
	<div class="home">
		<h1>{{ count }}</h1>
		<button @click="incrementCount">+1</button>
	</div>
</template>

<script setup lang="ts">
import appStore from "@/store";
import { storeToRefs } from "pinia";
const { countStore } = appStore;
const { count } = storeToRefs(countStore);
const incrementCount = () => {
	count.value++;
};
</script>

<style scoped lang="scss">
.home {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>
