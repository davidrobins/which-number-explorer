import React from 'react';
import './style/grid.css'

const Grid = props => {

    const { ceiling, selected, selectNumber, highlight } = props;

    const numberBoxes = [];

    for(let i = 1; i <= ceiling; i++){
        numberBoxes.push(
            <div
                className={'numberbox'}
                key={`numberbox-${i}`}
                onClick={() => selectNumber(i)}
            >
                {i}
            </div>)
    }

    return (
        <div className={'grid'} >
            {numberBoxes}
        </div>
    )
}

export default Grid;