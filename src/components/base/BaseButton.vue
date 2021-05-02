<template>
    <button 
	class="baseButton" 
	:class="'baseButton__' + type"
	v-on:click="$emit('game-start')">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        label: {
            type: String,
            required: true,
            dafault: "HELLO WORLD",
        },
        type: {
            type: String,
            required: true,
            dafault: "primary",
        },
    },
};
</script>

<style scoped>
.baseButton {
    padding: 10px 15px;
	margin: 15px auto;
	text-align: center;
	overflow: hidden;
	cursor: pointer;
}

.baseButton__primary {
    background-color:  #0099ff;
	border:  #007acc;
	border-radius: 15px;
	color: white;
}

</style>