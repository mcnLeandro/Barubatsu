import 'css/style.scss'
import { 
    BoardsController,
    PlayersController,
    AppsController
} from "./controller";
import { SYMBOLS } from "./config";
import { AppsView } from './view';

const p1 = PlayersController.create({name:"leandro", symbol: SYMBOLS.circle})
const p2 = PlayersController.create({name:"grogea", symbol: SYMBOLS.rectangle})
const p3 = PlayersController.create({name:"imlse", symbol: SYMBOLS.cross})

BoardsController.addPlayer(p1)
BoardsController.addPlayer(p2)
BoardsController.addPlayer(p3)

BoardsController.setBoard(4)
AppsController.gamePage()


// AppsController.topPage()
// AppsController.gameSettingPage()



//playerの表示
//誰のターンか表示  //一度後回し
//勝った時の表示  // 一度後回し
//勝った後のリトライボタン //一度後回し

// application
// 始める、ページ
// redirect

// ask player num max4 for now
// ask board n num
// redirect

// ask player info(name, symbol) then redirect for number
// redirect

// game start

