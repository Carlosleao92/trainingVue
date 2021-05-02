<template>
		<button 
			class="color-button" 
			:style="disabled? [{backgroundColor: 'grey'},{borderColor: black}] : {backgroundColor: color}"
			v-on:click="$emit('color-chosen', color)"
			>
		</button>
</template>

<script>
export default {
    name: "ColorButton",
    props: {
        color: {
            type: String,
            default: "grey",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
	.color-button {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>