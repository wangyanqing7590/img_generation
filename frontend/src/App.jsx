// src/App.jsx

import React from 'react';
import './App.css';
import ImageGenerator from './components/ImageGenerator';  // 引入 ImageGenerator 组件

function App() {
  return (
    <div className="App">
      <h1>图像生成与编辑系统</h1>
      {/* 渲染 ImageGenerator 组件 */}
      <ImageGenerator />
    </div>
  );
}

export default App;