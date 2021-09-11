import { Board, Player } from "./model";
import { LIMITATION, SYMBOLS , TARGETIDs} from "./config";
import { BoardsView, PlayersView, AppsView, PlayersViewTamplate } from "./view";
import { AppsListener, BoardsListener , PlayersListener} from "./listener";

export class AppsController {

    static topPage(){

        AppsView.topPage()
        AppsListener.topPage()

    }
    static gameSettingPage(){

        AppsView.gameSettingPage()
        AppsListener.gameSettingPage()

    }
    static create({boardLength, playersParams}){

        BoardsController.setN(boardLength)
        BoardsController.setPlayers(playersParams.map(params => PlayersController.create(params)))
        //playerシャッフルしたり可能
        AppsController.gamePage()

    }
    static gamePage(){

        BoardsController.setBoard()
        BoardsController.setFistPlayer()

        AppsView.gamePage()
        AppsListener.gamePage()
        BoardsView.displayGameInfo(`${Board.players[Board.nextPlayerIndex].name} is the Next`)

    }
    static endGamePopUp(player){

        AppsView.endGamePopUp(player)
        AppsListener.endGamePopUp()

    }

}
export class BoardsController{

    static setPlayers(players){

        Board.players = players;
        

    }
    static setN(n){

        Board.n = n 

    }
    static setFistPlayer(){
        Board.nextPlayerIndex = 0;
    }
    static setBoard(){
        
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

        
        this.changeTurn()
        if(!this.checkBoard(player)) BoardsView.displayGameInfo(`${Board.players[Board.nextPlayerIndex].name} is the Next`)


    }
    static changeTurn(){

        if(Board.nextPlayerIndex < Board.players.length-1)Board.nextPlayerIndex++;
        else Board.nextPlayerIndex = 0;

    }
    static checkBoard(player){

        let isThereWinner = false;
        let l = Board.n
        let horizontal = 0
        let vertical = 0

        for (let row = 0; row < l ; row++) {

            for (let col = 0; col < l; col++) {

                if(Board.blocks[row][col] == player.symbol) horizontal++;
                if(Board.blocks[col][row] == player.symbol) vertical++;

            }

            if(horizontal == l){
                AppsController.endGamePopUp(player)
                BoardsView.displayGameInfo(`${player.name} won with horazontal line`)
                isThereWinner = true;
            }
            if(vertical == l){
                AppsController.endGamePopUp(player)
                BoardsView.displayGameInfo(`${player.name} won with vertical line`)
                isThereWinner = true;
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
            AppsController.endGamePopUp(player)
            BoardsView.displayGameInfo(`${player.name} won with upperLeft line`)
            isThereWinner = true;
        }
        if(upperRight === l){
            AppsController.endGamePopUp(player)
            BoardsView.displayGameInfo(`${player.name} won with upperRight line`)
            isThereWinner = true;
        }
        upperLeft = 0;
        upperRight = 0;

        return isThereWinner
        
    }

}
export class PlayersController{

    static create(playersParams){

        return new Player(playersParams);

    }
    static addForm(){

        

        document.getElementById(TARGETIDs.playersInfo).innerHTML += PlayersViewTamplate.form(true)
        PlayersListener.form()
        PlayersController.removeAddPlayerBtnIfIsLimit()
        

    }
    static addAddPlayerBtnIfIsntLimit(){
        if(document.querySelectorAll(`.${TARGETIDs.playerInfo}`).length < LIMITATION.maxPlayerNumber ){

            document.getElementById(TARGETIDs.addPlayerInfo).classList.add("fas", "fa-plus-circle", "fa-2x", "text-info" )

        }
    }
    static removeAddPlayerBtnIfIsLimit(){
        if(document.querySelectorAll(`.${TARGETIDs.playerInfo}`).length >= LIMITATION.maxPlayerNumber ){

            document.getElementById(TARGETIDs.addPlayerInfo).classList.remove("fas", "fa-plus-circle", "fa-2x", "text-info" )

        }
    }

}
