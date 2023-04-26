import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure?: null | Figure;
    board: Board;
    available: boolean;
    id: number;

    constructor(x:number, y:number, color: Colors, board:Board) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.board = board;
        this.figure = null;
        this.available = false;
        this.id = Math.random();
    }

    isEmpty() : boolean{
        return this.figure === null;
    }



    isEmptyVertical(target: Cell) : boolean{
        if (this.x !== target.x){
            return false;
        }

        const min: number = Math.min(this.y,target.y);
        const max: number = Math.max(this.y,target.y);
        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.x, y).isEmpty()){
                return false;
            }
        }
        return true;
    }

    isEmptyHorizontal(target:Cell) : boolean{
        if (this.y !== target.y){
            return false;
        }

        const min: number = Math.min(this.x, target.x);
        const max: number = Math.max(this.x,target.x);
        for (let x = min + 1; x < max; x++) {
            if (!this.board.getCell(x,this.y).isEmpty()){
                return false;
            }
        }
        return  true;
    }

    isEmptyDiagonal(target : Cell) : boolean {
        const absX : number = Math.abs(target.x - this.x);
        const absY : number = Math.abs(target.y - this.y);
        if (absX !== absY){
            return false;
        }

        const dx : number = target.x > this.x ? 1 : -1;
        const dy : number = target.y > this.y ? 1 : -1;
        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()){
                return false;
            }
        }
        return true;
    }

    moveFigure(target: Cell){
        if (this.figure && this.figure.canMoveOn(target)){
            target.figure = this.figure;
            target.figure.cell = target;
            this.figure = null;
        }
    }

}