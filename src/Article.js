import React from 'react'
import moment from 'moment'

const Article =({title,link,snippet,date,length})=>{
    return(
        <article className="post">
            <a href={link}><h2>{title}</h2></a>
            <div className="post-info">
                <br/>
                <span>{moment(date).format('dddd Do, YYYY')}</span>
                <span>{length} min read</span>
            </div>
            <p>{snippet}</p>
        </article>
    )
}

export default Article