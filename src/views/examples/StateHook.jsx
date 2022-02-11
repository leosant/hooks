import React, {useState} from 'react';

import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'


const StateHook = props => {
    
    const [count, setCount] = useState(0)


    return (
        <div className=''>
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() => setCount(count + 1)}>
                        +1
                    </button>
                    <button className="btn"
                        onClick={() => setCount(count - 1)}>
                        -1
                    </button>
                    <button className="btn"
                        onClick={() => setCount(currect => currect + 1000)}>
                        +1000
                    </button>
                </div>
            </div>
            <SectionTitle title="Exercícios #02" />
        </div>
    )
}

export default StateHook;