import React from 'react';
import {Cell} from "../models/Cell";
import {FigureNames} from "../models/figures/Figure";

interface CellProps{
    cell:Cell;
    selected: boolean;
    click: (cell:Cell) =>void;
}

function CellComponent({cell, selected,click}:CellProps) {
    return (
        <div className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
        onClick={() => click(cell)} style={{backgroundColor:cell.available && cell.figure?.name !== FigureNames.KING && cell.figure ? "green" : ''}}>
            {cell.available && !cell.figure && <div className={"available"}></div>}
            {cell.figure?.logo && <img alt={cell.figure.name} src={cell.figure.logo}/> }
        </div>
    );
}

export default CellComponent;   