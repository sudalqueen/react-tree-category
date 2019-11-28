import React from 'react';
import Tree from './Component/Tree';
import TreeNode from './Component/TreeNode';

function App() {
  return (
    <div className="App">
      <h3>Tree Example</h3>
      <Tree>
        <TreeNode value="node1" />
        <TreeNode value="node2" draggable={false}/>
        <TreeNode value="node3" />
        <TreeNode value="node4">
          <TreeNode value="node4-1" />
          <TreeNode value="node4-2">
            <TreeNode value="node4-2-1" />
            <TreeNode value="node4-2-2" />
          </TreeNode>
          <TreeNode value="node4-3" />
        </TreeNode>
      </Tree>
    </div>
  );
}

export default App;
