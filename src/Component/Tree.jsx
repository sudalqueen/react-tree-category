import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import "../style/Tree.css";

const Tree = props => {
    let dragItem;

    function dragStart(event) {
        dragItem = event.target;
        event.dataTransfer.effectAllowed = 'move';
    }

    function dragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move'
    }

    function dragEnd(event) {

    }

    function dragEnter(event) {
        event.target.classList.add('drag-over');
    }

    function dragLeave(event) {
        event.stopPropagation();
        event.target.classList.remove('drag-over');
    }

    function dragDrop(event) {
        event.target.classList.remove('drag-over');

        if (dragItem != event.target) {
            const dropItemUl = event.target.getElementsByTagName('UL')[0];
            if (!dragItem.contains(dropItemUl)) {
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
        if (props.draggable) {
            const nodes = document.getElementsByClassName('node');
            [].forEach.call(nodes, function (node) {
                addEventsDragAndDrop(node);
            });
        }
    }, []);


    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    )
};

export default Tree;

Tree.propTypes = {
    className: PropTypes.string,
    draggable: PropTypes.bool
}

Tree.defaultProps = {
    className: null,
    draggable: true
}