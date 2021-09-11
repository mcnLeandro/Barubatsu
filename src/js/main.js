import 'css/style.scss'

import { BoardsController,PlayersController,AppsController } from "./controller";
import { SYMBOLS } from "./config";
import { AppsView } from './view';

// const p1 = PlayersController.create({name:"leandro", symbol: SYMBOLS.circle})
// const p2 = PlayersController.create({name:"grogea", symbol: SYMBOLS.rectangle})
// const p3 = PlayersController.create({name:"imlse", symbol: SYMBOLS.cross})

// BoardsController.addPlayers([p1,p2,p3])
// BoardsController.setBoard(4)
// AppsController.gamePage()


AppsController.topPage()



//playerの表示
//誰のターンか表示  //一度後回し
//勝った時の表示  // 一度後回し
//勝った後のリトライボタン //一度後回し



/**
 * issue
 */

// - when add user form , disappiar the form