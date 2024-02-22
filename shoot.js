class Player{
    // Buat class dengan property nama, HP, kekuatan
    constructor(_fullName, _healthPoint = 100, _power = 10){
        this.fullName = _fullName
        this.healthPoint = _healthPoint
        this.power = _power
    }
    // Buat method Mengurangi HP player
    hit(_power){
        this.healthPoint = this.healthPoint - _power
    }
    //buat method Tambahkan HP atau power berdasarkan method getRandom()
    getUseItem(item){
        this.healthPoint = this.healthPoint + item.healthPoint
        this.power = this.power + item.power

    }
    //buat method showstatus
    showStatus(){
        console.log(`${this.fullName} (Health => ${this.healthPoint}, Power => ${this.power})`); 
    }
}


class ShootingGame {
    //Buat class dengan constructur parameter player 1 dan player 2
    constructor (player1, player2){
        this.player1 = player1
        this.player2 = player2
    }
    // Membuat method getRandomItem dengan mereturn  health point + 10 atau power + 10
    getRandomItem(){
        return {healthPoint: Math.round(Math.random()) * 10, power: Math.round(Math.random()) * 10}
    }
    start(){
        let ronde = 1
        while(this.player1.healthPoint > 0 && this.player2.healthPoint > 0){
            console.log(`===============<<<<    [RONDE ${ronde}]  >>>>===============\n===[TUNJUKAN KEKUATAN SUDUT BIRU DAN MERAH]===\n`);
            this.player1.showStatus()
            this.player2.showStatus()
            console.log("\n");
            console.log(`==========[KEADAAN SETELAH MENGGUNAKAN ITEM]==========`);
            const player1Item = this.getRandomItem()
            const player2Item = this.getRandomItem()
            
            this.player1.getUseItem(player1Item)
            this.player2.getUseItem(player2Item)

            this.player1.showStatus()
            this.player2.showStatus()
            console.log("\n");
            
            console.log(`==========[KOMENTAR SAAT SEDANG BERTARUNG]==========`);
            console.log(`${this.player1.fullName} melakukan pukulan dengan impak ${this.player1.power} kepada ${this.player2.fullName} sehingga HPnya menjadi ${this.player2.healthPoint - this.player1.power}`);
            console.log(`${this.player2.fullName} melakukan pukulan dengan impak ${this.player2.power } kepada ${this.player1.fullName} sehingga HPnya menjadi ${this.player1.healthPoint - this.player2.power}\n`);
            
            this.player1.hit(this.player2.power)
            this.player2.hit(this.player1.power)
            

            console.log(`==========[TUNJUKAN STATUS SETELAH BERTARUNG]==========\n`);
            this.player1.showStatus()
            this.player2.showStatus() 
            ronde++
            console.log("\n");
            
            if(this.player2.healthPoint <= 0 && this.player1.healthPoint <= 0){
                console.log(`==========[HASIL DRAW]==========`);
            } else if(this.player1.healthPoint <= 0){
                console.log(`==========[PEMENANGNYA ADALAH ${this.player2.fullName}]==========`.toUpperCase());
            } else if(this.player2.healthPoint <= 0){
                console.log(`==========[PEMENANGNYA ADALAH ${this.player1.fullName}]==========`.toUpperCase());
            }
        }
        console.log(`===[ROUND SELESAI]===`);
    }
}


const player1 = new Player("El Rumi");
const player2 = new Player("Jefri Nicol");
const game = new ShootingGame(player1, player2)
game.start();