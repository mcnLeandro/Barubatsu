import { Board, Player } from "./model";
import { SYMBOLS , TARGETIDs} from "./config";
import { BoardsView, PlayersView, AppsView, PlayersViewTamplate } from "./view";
import { AppsListener, BoardsListener } from "./listener";

export class AppsController {

    static topPage(){

        AppsView.topPage()
        AppsListener.topPage()

    }
    static gameSettingPage(){

        AppsView.gameSettingPage()
        AppsListener.gameSettingPage()

    }
    static gamePage(){

        AppsView.gamePage()
        AppsListener.gamePage()

    }
    static startGame(){}

}
export class BoardsController{

    static gameStart(){

        if(Board.players.length === 0) return
        
        //ここでplayerはシャッフルできる。
        BoardsView.set()
        BoardsListener.set()

        PlayersView.set()
        
    }
    static addPlayer(player){

        Board.players.push(player)
        

    }
    static setBoard(n){
        
        Board.n = n // 後で分ける
        /** n x n
         * [
         *  [ , , , ]
         *  [ , , , ]
         *  [ , , , ]
         * ]
         */
        let blocks = [];

        for (let i = 0; i < Board.n; i++) {
            let row = [];

            for (let j = 0; j < Board.n; j++) {

                row.push(SYMBOLS.blank)
            }

            blocks.push(row)
        }

        Board.blocks = blocks;

    }
    static putSymbol(row, col){

        const block = document.getElementById(`${row}-${col}`)
        const player = Board.players[Board.nextPlayerIndex]

        if(block.innerText === SYMBOLS.blank){

            Board.blocks[row][col] = player.symbol;
            block.innerHTML =  player.symbol;

        }

        // change next player

        if(Board.nextPlayerIndex < Board.players.length-1)Board.nextPlayerIndex++;
        else Board.nextPlayerIndex = 0;
        
        this.checkBoard(player)

    }
    static checkBoard(player){

        let l = Board.n
        let horizontal = 0
        let vertical = 0

        for (let row = 0; row < l ; row++) {

            for (let col = 0; col < l; col++) {

                if(Board.blocks[row][col] == player.symbol) horizontal++;
                if(Board.blocks[col][row] == player.symbol) vertical++;

            }

            if(horizontal == l){
                console.log("win with horazontal")
            }
            if(vertical == l){
                console.log("win with vertical")
            }

            horizontal = 0;
            vertical = 0;

        }

        let upperLeft = 0 
        let upperRight = 0 
        let row = 0

        for (let col = 0; col < l; col++) {

            if(Board.blocks[col][row] == player.symbol) upperLeft++;
            if(Board.blocks[col][ l-1 - row] == player.symbol) upperRight++;
            row++;

        }

        if(upperLeft === l){
            console.log("win with upperLeft")
        }
        if(upperRight === l){
            console.log("win with upperRight")
        }
        upperLeft = 0;
        upperRight = 0;
        
    }

}
export class PlayersController{

    static create(playersParams){
        return new Player(playersParams);
    }
    static addForm(){

        document.getElementById(TARGETIDs.playersInfo).innerHTML += PlayersViewTamplate.form(true)

    }

}
