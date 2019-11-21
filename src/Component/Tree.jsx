import React, { useEffect, useState } from 'react';

const Tree = props => {
    const [flatArr, setFlatArr] = useState(new Map());
    const [treeNodes, setTreeNodes] = useState(null);
    let nodeMap = new Map();

    const makeFlatArr = (data, parent = {}, depth = 0) => {
        data.forEach((node, index) => {
            const isParent = isNodeHasChildren(node);
            flatArr.set(node.title, {
                title: node.title,
                children: node.children,
                isParent,
                parent,
                index,
                depth,
                visible: true
            })
            if (isParent) {
                makeFlatArr(node.children, node, depth + 1);
            }
        })
    };

    const isNodeHasChildren = (node) => {
        if (node.children && node.children.length > 0) {
            return true;
        }
        return false;
    };

    const makeTree = nodes => {
        return nodes.map(node => {
            const children = flatArr.get(node.title).isParent ? makeTree(node.children) : null;
            return (
                <li>
                    {children ? <button onClick={() => { onExpand(node) }}>Click!</button> : ''}
                    {node.title}
                    <ul style={{ visible: node.visible ? '' : 'none' }}>
                        {children}
                    </ul>
                </li>
            )
        });
    };

    const onExpand = (node) => {
        let tempMap = Object.assign(new Map(), flatArr);
        tempMap.set(node.title, { visible: false, ...node });
        console.log(tempMap.get(node.title))
        setFlatArr(Object.assign(new Map(), tempMap));
    }

    useEffect(() => {
        makeFlatArr(props.data);
        const tempTreeNodes = makeTree(props.data);
        setTreeNodes(tempTreeNodes);
    }, []);

    return (
        <ul>
            {treeNodes}
        </ul>
    )
};

export default Tree;