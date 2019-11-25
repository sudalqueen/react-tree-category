import React from 'react';
import Tree from './Component/Tree';
import TreeNode from './Component/TreeNode';

function App() {
  return (
    <div className="App">
      <Tree>
        <TreeNode/>
        <TreeNode/>
        <TreeNode/>
        <TreeNode>
          <TreeNode/>
          <TreeNode>
            <TreeNode/>
            <TreeNode/>
          </TreeNode>
          <TreeNode/>
        </TreeNode>
      </Tree>
    </div>
  );
}

export default App;
