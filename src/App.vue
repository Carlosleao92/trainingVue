<template>
    <div>
		<color-game :difficulty="3"></color-game>
	</div>
</template>

<script>
import ColorGame from "./components/games/ColorGame";

export default {
    name: "App",
    components: {ColorGame}
};
</script>

<style>
</style>
