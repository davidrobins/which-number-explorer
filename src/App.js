import React, { useState } from 'react';

import Grid from "./Grid";

const App = () => {

    const ceiling = 144

    const [selected, setSelected] = useState(null)

    return (
        <div className="App">
            <Grid ceiling={ceiling} selected={selected} setSelected={setSelected}/>
        </div>
    );
}

export default App;
