import React, { useEffect, useState } from 'react';

const Tree = props => {
    let dragItem;

    function dragStart(event) {
        dragItem = event.target;
        console.log("drag",event.target);
        event.dataTransfer.effectAllowed  = 'move';
    }

    function dragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move'
    }

    function dragEnd(event) {

    }

    function dragEnter(event) {

    }

    function dragLeave(event) {

    }

    function dragDrop(event) {
        console.log("drop",event.target);
        if (dragItem != event.target) {
            let dropItemUl = event.target.getElementsByTagName('UL')[0];
            if(!dragItem.contains(dropItemUl)){
                dropItemUl.appendChild(dragItem);
            }
        }
    }

    function addEventsDragAndDrop(el) {
        el.addEventListener('dragstart', dragStart, false);
        el.addEventListener('dragenter', dragEnter, false);
        el.addEventListener('dragover', dragOver, false);
        el.addEventListener('dragleave', dragLeave, false);
        el.addEventListener('drop', dragDrop, false);
        el.addEventListener('dragend', dragEnd, false);
    }

    useEffect(() => {
        const nodes = document.getElementsByClassName('node');
        [].forEach.call(nodes, function (node) {
            addEventsDragAndDrop(node);
        });
    }, []);


    return (
        <ul>
            {props.children}
        </ul>
    )
};

export default Tree;