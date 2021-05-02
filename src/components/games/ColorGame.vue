<template>
    <div class="colorGame">
        <!-- Game name-->
        <h1 class="colorGame__title">Color Game</h1>
        <!-- Start Button-->
        <div v-if="gameState == 'pre' || gameState == 'post'" class="colorGame__button-wrapper">
            <base-button
                label="Start Game"
                type="primary"
                @game-start="startGame"
            >
            </base-button>
        </div>

        <!-- Game Board-->
        <div class="colorGame__game-wrapper" v-if="gameState == 'active' || gameState == 'post'">
            <div class="colorGame__game-clues">
                <!-- Clues -->
                <h2
                    class="colorGame__game-clue"
                    :style="[{ color: incorrectAnswer2 }]"
                >
                    {{ this.correctAnswer }}
                </h2>
                <h2
                    class="colorGame__game-clue"
                    :style="[{ color: correctAnswer }]"
                >
                    {{ this.incorrectAnswer1 }}
                </h2>
            </div>
            <div class="colorGame__color-wrapper">
                <div :class="'colorGame__color-button-wrapper-'+ difficulty"
                    v-for="bankColor in arrayOfPossibleColors"
                    :key="bankColor.color"
                >
                    <color-button
						:disabled="gameState == 'post'"
                        :color="bankColor.color"
                        @color-chosen="handleAnswer"
                    ></color-button>
                </div>
            </div>
        </div>

        <!-- Game Score -->
        <h2 class="colorGame__score" v-if="score">Score: {{score}}</h2>
    </div>
</template>

<script>
import BaseButton from "../base/BaseButton";
import ColorButton from "../base/ColorButton.vue";

export default {
    components: { BaseButton, ColorButton },
    name: "ColorGame",
    props: {
        difficulty: {
            type: Number,
            validator: (value) => {
                return value > 0 && value < 4;
            },
            default: 1,
        },
    },
    data() {
        return {
            gameState: "pre", // pre, active, post
            score: "",
            correctAnswer: "",
            incorrectAnswer1: "",
            incorrectAnswer2: "",
            answer: "",
            clue1: "color1",
            clue2: "color2",
            colorBank: [
                { color: "black" },
                { color: "blue" },
                { color: "green" },
                { color: "yellow" },
                { color: "pink" },
                { color: "red" },
                { color: "orange" },
                { color: "grey" },
                { color: "violet" },
                { color: "purple" },
                { color: "brown" },
                { color: "turquoise" },
                { color: "gold" },
                { color: "wheat" },
                { color: "darkred" },
                { color: "darkblue" },
            ],
        };
    },
    computed: {
        numberOfColors() {
            return Math.pow(this.difficulty + 1, 2);
        },
        arrayOfPossibleColors() {
            return this.colorBank.slice(0, this.numberOfColors);
        },
    },
    methods: {
        startGame() {
            this.gameState = "active";
            this.newRound();
        },

        newRound() {
            var correctIndex = this.getRandomIndex(this.numberOfColors - 1);

            this.correctAnswer = this.arrayOfPossibleColors[correctIndex].color;

            this.incorrectAnswer1 = this.getIndexColor(correctIndex + 1);
            this.incorrectAnswer2 = this.getIndexColor(correctIndex + 2);
        },

        getIndexColor(index) {
            var numberOfIndex = this.numberOfColors - 1;
            if (index > numberOfIndex) {
                return this.arrayOfPossibleColors[index - numberOfIndex].color;
            }

            return this.arrayOfPossibleColors[index].color;
        },

        getRandomIndex(max) {
            return Math.round(Math.random() * max);
        },

        handleAnswer(color) {
            if (color == this.correctAnswer) {
                this.score++;
                this.newRound();
            } else {
                this.loseGame(color);
            }
        },

        loseGame(answer) {
            this.gameState = "post";
            alert(
                "Wrong! You lose! \n\nYou picked " +
                    answer +
                    "\n \nThe correct answer was " +
                    this.correctAnswer
            );
        },
    },
};
</script>

<style  scoped>
.colorGame {
    max-width: 900px;
    margin: 80px auto;
    padding: 40px 30px;
    border-radius: 15px;
    background-color: #d9d9d9;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    text-align: center;
}
.colorGame__title {
    margin: 0px auto 20px auto;
}

.colorGame__button-wrapper {
    margin: 0px auto;
    display: flex;
    justify-content: center;
}

.colorGame__color-wrapper {
    display: flex;
	flex: 0 0 33.333333%;
	justify-content: center;
	width: 300px;
	height: 300px;
    flex-wrap: wrap;
    margin: 0 auto;
}

.colorGame__color-button-wrapper-1 {
	flex: 0 0 50%;
}

.colorGame__color-button-wrapper-2 {
	flex: 0 0 33.333333%;
}

.colorGame__color-button-wrapper-3 {
	flex: 0 0 25%;
}
</style>