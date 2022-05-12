import React from 'react';

export function sum(a, b) {
    return a + b
}
const Jast = () => {

    return (
        <h1>
            {sum(2, 3)}
        </h1>
    );
};

export default Jast;