import React from "react"
import Article from "./Article";

export default function ArticleList( {Articles} ) {
    return (
        <ul>
            <li><Article Articles = {Articles[0]} /></li>
            <li><Article Articles = {Articles[1]} /></li>
            <li><Article Articles = {Articles[2]} /></li>
        </ul>
    )
}