import React from 'react';

const TreeNode = props => {

    return(
        <li>TreeNode!
            <ul>{props.children}</ul>
        </li>
    )
}

export default TreeNode;