import { Board } from "./model";
import { AppsController, BoardsController, PlayersController } from "./controller";
import { TARGETIDs , LIMITATION } from "./config";

export class AppsListener {

    static topPage(){
        document.getElementById(TARGETIDs.newGame).addEventListener('click', function(){

            AppsController.gameSettingPage()

        })
    }
    static gameSettingPage(){

        document.getElementById(TARGETIDs.addPlayerInfo)?.addEventListener("click",function(){

            PlayersController.addForm()

        })

        // PlayersListener.form()
        
        document.getElementById(TARGETIDs.gameStart).addEventListener("click",function(){

            const boardLength =  Number(document.getElementById(TARGETIDs.boardLengthSelect).value)

            const playersParams = []
            document.querySelectorAll(`#${TARGETIDs.playersInfo} .${TARGETIDs.playerInfo}`).forEach( ele => {

                playersParams.push({
                    name: ele.querySelector("input").value ,
                    symbol: ele.querySelector("select").value,
                })

            })

            AppsController.create({boardLength: boardLength, playersParams: playersParams})

        })

    }
    static gamePage(){

        BoardsListener.set()

    }
    static endGamePopUp(){

        const deletePopUp = ()=>{
            document.getElementById(TARGETIDs.endGamePopUp).remove()
        }
        document.getElementById(TARGETIDs.goToTop).addEventListener("click", function(){
            deletePopUp()
            AppsController.topPage()
        })
        document.getElementById(TARGETIDs.retry).addEventListener("click",function(){
            deletePopUp()
            AppsController.gamePage()
        })

    }

}
export class BoardsListener{
    static set(){

        for (let row = 0; row < Board.n; row++) {
            for (let col = 0; col < Board.n; col++) {
                document.getElementById(`${row}-${col}`).addEventListener('click',function(){

                    BoardsController.putSymbol(row,col)

                })
            }
        }

    }
}

export class PlayersListener {

    static form(){

        document.querySelectorAll(`.${TARGETIDs.removePlayerInfo}`).forEach(ele => {
            ele.addEventListener("click",function(){

                this.closest(`.${TARGETIDs.playerInfo}`).remove()
                PlayersController.addAddPlayerBtnIfIsntLimit()

            })
        })

    }

}