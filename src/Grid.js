import React from 'react';

const Grid = props => {

    const { ceiling, selected, highlight } = props;

    const numberBoxes = [];

    for(let i = 1; i <= ceiling; i++){
        numberBoxes.push(<div className={'numberbox'} key={`numberbox-${i}`}>{i}</div>)
    }

    return (
        <div className={'grid'} >
            {numberBoxes}
        </div>
    )
}

export default Grid;