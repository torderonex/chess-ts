import CellComponent from "./CellComponent";
import React, {useEffect, useState} from "react";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";

interface BoardProps{
    board:Board;
    setBoard: (board:Board) => void;
}

function BoardComponent({board,setBoard}:BoardProps) {
    const [selectedCell, setSelectedCell] = useState<Cell| null >(null);

    function click(cell : Cell){
        if (selectedCell?.figure && selectedCell !== cell && selectedCell.figure?.canMoveOn(cell)){
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        }else if (cell.figure){
            setSelectedCell(cell);
        }
    }

    function highlightCells(){
        board.highlightCells(selectedCell);
        updateBoard();
    }

    useEffect(()=>{
        highlightCells()
    },
[selectedCell]);


    function updateBoard(){
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return(<div className={'board'}>
        {board.cells.map((row,index) =>
            <React.Fragment key={index}>
                {row.map(cell =>
                    <CellComponent  cell={cell} key={cell.id} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} click={click}/>
                )}
            </React.Fragment>
        )}
    </div>);
}
export default BoardComponent;