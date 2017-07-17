Vue.component('score', {
	props: ['player'],
	template: `<div>
		<h3>{{ player.name }}</h3>
		<div class="scoreboard__total">
			Score: {{ player.score }}
		</div>
		<button v-on:click="player.score += 5">
			+ 5
		</button>
		<button v-on:click="player.score += 10">
			+ 10
		</button>
		<button v-on:click="player.score += 15">
			+ 15
		</button>
		<button v-on:click="player.score += 20">
			+ 20
		</button>
	</div>`
})

Vue.component('win', {
	props: ['winner', 'restart'],
	template: `<div class="winner">
		<h1>{{ winner.name }} WINS!</h1>
		<button v-on:click="restart">Play Again</button>
	</div>`
})

Vue.component('getnames', {
  props: ['players', 'begin'],
  template: `
    <div class="get-names">
      <h2>Player Names</h2>
      <div>
        <input v-for="player in players" v-bind:id="player" v-model="player.name"/>
        <button v-on:click="begin">Start Game</button>
      </div>
    </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    gameinprogress: false,
    player1: {
    	name: 'Player 1',
    	score: 0,
    },
    player2: {
    	name: 'Player 2',
    	score: 0,
    },
  }, 
  computed: {
  	gamefinished: function() {
  		if (this.player1.score >= 100 || this.player2.score >= 100) {
        this.gameinprogress = false
        return true
      }
      return false
  	},
  	winner: function() {
  		if (this.player1.score > this.player2.score) {
  			return this.player1
  		}
  		return this.player2
  	}
  },
  methods: {
    begin: function() {
      this.gameinprogress = true
    },
  	restart: function() {
      this.player1.score = 0
      this.player2.score = 0
      this.gameinprogress = true
  	}
  }
})
