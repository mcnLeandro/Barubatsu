export class Player {
    constructor({name,symbol}){

        this.name = name;
        this.symbol = symbol;
        
    }

}
export class Board{
    
    static n = 0
    static nextPlayerIndex = 0;
    static players = [];
    static blocks = [];

}