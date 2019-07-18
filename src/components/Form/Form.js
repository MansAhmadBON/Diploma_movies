import React from 'react'
import { Input, BtnSearch, BtnsSearchBy } from './componentsFrom'

const Form = () => {
    const handleOfSubmit = e => e.preventDefault();
    
    return (
        <form onSubmit={handleOfSubmit}>
            <Input />
            <BtnsSearchBy />
            <BtnSearch />
        </form>
    )
}
export default Form

