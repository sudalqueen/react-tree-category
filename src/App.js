import React from 'react';
import Tree from './Component/Tree';
import TreeNode from './Component/TreeNode';

function App() {
  let data=[
    {title: 'Item1', children: [{title: 'Item1-1'}, {title: 'Item1-2'}]},
    {title: 'Item2', children: [{title: 'Item2-1'}, {title: 'Item2-2', children: [{title: 'Item2-2-1'}, {title: 'Item2-2-2'}]}]}
  ]

  return (
    <div className="App">
      <Tree data={data}/>
    </div>
  );
}

export default App;
