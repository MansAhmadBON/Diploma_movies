import React from 'react'

const BtnsSearchBy = props => {
    return (
        <div className="container_btns_search">
            <button onClick={props.searchByTitle} className="btn_title">TITLE</button>
            <button onClick={props.searchByGanre} className="btn_gender">GENDER</button>
        </div>
    )
}

export default BtnsSearchBy