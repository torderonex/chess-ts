import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blacklogo from "../../assets/black-knight.png";
import whitelogo from "../../assets/white-knight.png";

export class Knight extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.KNIGHT;
    }
    canMoveOn(target: Cell): boolean {
        if(!super.canMoveOn(target)){return false;}
        return true;
    }
}