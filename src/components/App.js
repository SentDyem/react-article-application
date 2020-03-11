import React from 'react';
import Header from "./Header";
import Article from "./Article";
import Articles from "./fixtures";
import ArticleList from "./ArticleList";


function App() {
  return (
    <div className="App">
      <h4>Мир статей</h4>
        <ArticleList />
    </div>
  );
}

export default App;
