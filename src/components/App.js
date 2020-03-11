import React from 'react';
import Header from "./Header";
import Article from "./Article";
import ArticleList from "./fixtures";


function App() {
  return (
    <div className="App">
      <h4>Мир статей</h4>
        <Header />
        <Article text = 'Тестовая информация' section = 'Тестовое описание проекта!' />
        <Article article = {ArticleList[0]} />
    </div>
  );
}

export default App;
