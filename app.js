new Vue({
    el: "#Exercicio_7",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns:[]
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true,
            this.playerHealth = 100,
            this.monsterHealth = 100
        },
        attack: function(){
            var damage = this.calculateDamage (3,10);
            this.turns.unshift({
                isPlayer: true,
                text:"Player hits Monster for " + damage
            });
            if(this.checkWin()){
                return;
            }
        },
        specialAttack: function(){
            var damage = this.calculateDamage (1,6);
            this.turns.unshift({
                isPlayer :true,
                text: "Player "
            })
                
            
        },
        heal: function(){

        },
        giveUp: function(){

        },
        calculateDamage: function(min,max){
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;
        },
        checkWin: function(){
            
            this.gameIsRunning = true,
            this.playerHealth = 100,
            this.monsterHealth = 100 
        }
    }
})