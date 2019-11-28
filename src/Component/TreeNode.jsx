import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TreeNode = props => {
    const [open, setOpen] = useState(true);

    const onExpand = () =>{
        setOpen(!open);
        if(typeof props.onExpand === "function"){
            props.onExpand();
        }
    }

    return (
        <>
            <li className="node" draggable={props.draggable}>
                <span onClick={onExpand}>
                    {props.button}
                </span>
                {props.value}
                <ul style={{ 'display': open ? '' : 'none' }}>{props.children}</ul>
            </li>
            <div className="node-border">
                <hr className="node-border-line" />
            </div>
        </>
    )
}

export default TreeNode;

TreeNode.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    button: PropTypes.element,
    draggable: PropTypes.bool,
    onExpand: PropTypes.func
}

TreeNode.defaultProps = {
    value: '',
    button: <span className="node-btn"/>,
    draggable: true,
    onExpand: ()=>{}
}