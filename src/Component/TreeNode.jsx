import React from 'react';

const TreeNode = props => {

    return (
        <li className="node" draggable="true">
            TreeNode!            
            <ul>{props.children}</ul>
        </li>
    )
}

export default TreeNode;