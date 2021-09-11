import { Board } from "./model";
import { AppsController, BoardsController, PlayersController } from "./controller";
import { TARGETIDs } from "./config";

export class AppsListener {

    static topPage(){
        document.getElementById(TARGETIDs.newGame).addEventListener('click', function(){

            AppsController.gameSettingPage()

        })
    }
    static gameSettingPage(){

        document.getElementById(TARGETIDs.addPlayerInfo).addEventListener("click",function(){

            PlayersController.addForm()

        })
        document.getElementById
    }
    static gamePage(){

        BoardsListener.set()

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