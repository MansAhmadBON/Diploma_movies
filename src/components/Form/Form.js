import React from 'react'
import { Input, BtnSearch, BtnsSearchBy } from './componentsFrom'

const Form = props => {
    const handleOfSubmit = e => e.preventDefault();
    return (
        <form onSubmit={handleOfSubmit}>
            <Input getInpVal={props.getInputValue}/>
            <BtnsSearchBy />
            <BtnSearch getMovis={props.getMovisData}/>
        </form>
    )
}
export default Form

