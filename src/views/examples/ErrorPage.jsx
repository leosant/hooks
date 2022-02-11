import React from 'react';

import PageTitle from '../../components/PageTitle'

const ErrorPage = props => {
    return (
        <div id="Error">
            <PageTitle error
                title="404"
                subtitle="Parece que está página ainda não foi construída" />
        </div>
    )
}

export default ErrorPage;