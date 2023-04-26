import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blacklogo from "../../assets/black-rook.png";
import whitelogo from "../../assets/white-rook.png";

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.ROOK ;
    }
    canMoveOn(target: Cell): boolean {
        if(!super.canMoveOn(target)){return false;}
        if (this.cell.isEmptyHorizontal(target) || this.cell.isEmptyVertical(target)){
            return true;
        }
        return false;
    }
}