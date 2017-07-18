import 'vue'
import './components'

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
