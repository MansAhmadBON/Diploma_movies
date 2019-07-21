import React from 'react'

const Ganre = props => {
    return props.ganre.map((item, i) => {
        return (
            <div key={i}>
                <span>{item}</span>
            </div>
        )
    })
}

export default Ganre