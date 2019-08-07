import React from 'react'

class Input extends React.Component {

    inputVal(){
        if(this.film){
            this.props.getInpVal(this.film.value)
        } else {
            return ''
        }
    }

    render(){
        this.inputVal()
        return(
            <input ref={(input) => {this.film = input}}/>
        )
    }
}

export default Input






// const Input = props => {
//    //console.log(props)

//     const onChange = e => props.getInpVal(e.target.value);
//     return(
//         <input onChange={onChange} />
//     )
// }

// export default Input

