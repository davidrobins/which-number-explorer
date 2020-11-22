import React, { useState } from 'react';
import NumberUtils from './numberUtils'

import Grid from "./Grid";

const App = () => {

    const ceiling = 144

    const [selected, setSelected] = useState(null);
    const [multiples, setMultiples] = useState([])

    const selectNumber = number => {
        setSelected(number);
        setMultiples(NumberUtils.calculateMultiples(number, ceiling))
    }

    return (
        <div className="App">
            <Grid ceiling={ceiling} selected={selected} selectNumber={selectNumber} highlighted={multiples}/>
        </div>
    );
}

export default App;
