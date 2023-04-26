import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blacklogo from "../../assets/black-king.png";
import whitelogo from "../../assets/white-king.png";

export class King  extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.KING;
    }

    canMoveOn(target: Cell): boolean {
        if(!super.canMoveOn(target)){return false;}
        return true;
    }
}