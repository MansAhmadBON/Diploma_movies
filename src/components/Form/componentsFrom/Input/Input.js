import React from 'react'

const Input = props => {
   //console.log(props)
    const onChange = e => props.getInpVal(e.target.value);
    return(
        <input onChange={onChange}/>
    )
}

export default Input