import React from 'react';
import MathJax from "react-mathjax";
const equations = () => {
    const InflationRATE = `(CPI_x+1 - CPI_x)/CPI-x`;
    const GDP = `GDP=C+G+I+NX`;
    return <div style={{padding: 50}}>
        <MathJax.Provider>
            <div>
                <p>
                    Inflation rate:<MathJax.Node inline formula={InflationRATE} />
                </p>
                <p>
                    GDP:<MathJax.Node inline formula={GDP}/>
                </p>
            </div>
        </MathJax.Provider>
    </div>
}

export default equations
