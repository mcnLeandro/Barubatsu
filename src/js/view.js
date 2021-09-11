import { LIMITATION, SYMBOLS, TARGETIDs } from "./config";
import { Board } from "./model";

export class AppsView {

    static topPage(){

        document.querySelector("body").innerHTML = `
            <div class="vh-100 d-flex justify-content-center">
                <div class=" d-flex align-self-center">
                    <button id="${TARGETIDs.newGame}" class="btn btn-primary">new Game</button>
                </div>
            </div>
        `
    }
    static gameSettingPage(){

        const boardLengthSelect = () => {

            let selectHTML = `
            <select id="" class="p-2 text-2vw form-select" >`
            for (let i = LIMITATION.minBoardLength; i <= LIMITATION.maxBoardLength; i++) {
                selectHTML+=`
                <option class="p-3 text-2vw" value="${i}">${i}</option>`
            }
            selectHTML += `
            </select>
            `
            return selectHTML

        }

        document.querySelector("body").innerHTML = `
        <section class="container d-block justify-content-center">
            <div class="col-md-6 my-5 m-auto">
                <h1>Game Setting</h1>
            </div>
            <div class="col-md-6 shadow my-5 p-3 rounded m-auto">
                

                <h2 >Length of the Board</h2>

                <div class="mt-3 ">
                    ${boardLengthSelect()}
                </div>

                <h2 class="mt-2">Players Info</h2>

                <div id="${TARGETIDs.playersInfo}">
                    ${PlayersViewTamplate.form(false)}
                    ${PlayersViewTamplate.form(false)}
                </div>

                <div class="d-flex justify-content-center mt-3">
                    <i id="${TARGETIDs.addPlayerInfo}" class="fas fa-plus-circle fa-2x text-info"></i>
                </div>

                <div class="d-flex justify-content-end">
                    <button id="${TARGETIDs.gameStart}"class="btn btn-primary">Game Start</button>
                </div>

            </div>
        </section>

        `
    }
    static gamePage(){

        document.querySelector("body").innerHTML = `
        <section id="${TARGETIDs.board}"></section>
        <section id="${TARGETIDs.gameInfo}"></section>
        <section id="${TARGETIDs.players}" class="mt-5"></section>
        `

        BoardsView.set()
        PlayersView.set()

    }


}
export class BoardsView {

    static set(){

        let boardHTML = `
        <div class="mt-5">
        `;

        for (let row = 0; row < Board.blocks.length; row++) {

            const rowHTML = `
            <div class="d-flex justify-content-center">
            `

            for (let col = 0; col < Board.blocks[row].length; col++) {

                const block = Board.blocks[row][col]
                rowHTML += `
                <div id="${row}-${col}" class="bg-white border box">
                    ${block}
                </div>`;

            }

            rowHTML += `
            </div>
            `

            boardHTML += rowHTML;

        }

        boardHTML += `
        </div>
        `;

        document.getElementById(TARGETIDs.board).innerHTML = boardHTML
    }
}
export class PlayersView {

    static set(){
        let PlayersHTML = `
        <div class="container ">
            <div class="row justify-content-evenly">
        `;

        for (let i = 0; i < Board.players.length; i++) {

            const player = Board.players[i];

            PlayersHTML += `
            <div class="card col-md-3 boarder">
                <div class="card-body">
                <h5 class="card-title">${player.symbol}</h5>
                <h5 class="card-title mb-2">${player.name}</h5>
            </div>
            </div>    
            `;

        }

        PlayersHTML += `
            </div>
        </div>
        `
        document.getElementById(TARGETIDs.players).innerHTML = PlayersHTML;
    }

}



export class PlayersViewTamplate{

    static form(isDeletable){

        return `
        <div class="d-flex justify-content-between mt-3">

            <div class="col-6">
                <input type="text" class="form-control col-6" placeholder="name">
            </div>

            <div class="col-3">
                <select class="p-2 text-2vw form-select" >
                    <option class="p-3 text-2vw" value="${SYMBOLS.circle}">${SYMBOLS.circle}</option>
                    <option class="p-3 text-2vw" value="${SYMBOLS.rectangle}">${SYMBOLS.rectangle}</option>
                    <option class="p-3 text-2vw" value="${SYMBOLS.triangle}">${SYMBOLS.triangle}</option>
                    <option class="p-3 text-2vw" value="${SYMBOLS.cross}">${SYMBOLS.cross}</option>
                </select>
            </div>

            ${isDeletable ? 
                `<div class="align-self-center col-1">
                    <i id="${TARGETIDs.removePlayerInfo}" class="fas fa-minus-circle fa-2x text-danger"></i>
                </div>`
                : 
                `<div class="col-1"></div>`
            }

        </div>
        `
    }

}