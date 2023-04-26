import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blacklogo from "../../assets/black-queen.png";
import whitelogo from "../../assets/white-queen.png";

export class Queen extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.QUEEN;
    }
    canMoveOn(target: Cell): boolean {
        if(!super.canMoveOn(target)){return false;}
        if (this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target) || this.cell.isEmptyDiagonal(target)){
            return true;
        }

        return false;
    }
}