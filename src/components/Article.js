import React, {Component} from "react";

function handleClick()
{
    console.log("clicked");
}

function Article (props) {
    const{article} = props;
    const body = <section> {article.text} </section>;
    return (
        <div className="Article">
            <h3>{article.title}</h3>
            {body}
            <button onClick={handleClick}>Открыть</button>
            <h4>
                Дата создания: {(new Date(article.date)).toDateString()}
            </h4>
        </div>
    )
}


export default Article;