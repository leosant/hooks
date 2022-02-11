import React from 'react';

import './PageTitle.css';

const PageTitle = props => {

    const isError = props.error ? "error" : ""

    return (
        <div className={`pageTitle ${isError}`}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>


    )

}

export default PageTitle;
