import React, { useEffect, useState } from 'react';

const Tree = props => {

    return (
        <ul>
            {props.children}
        </ul>
    )
};

export default Tree;