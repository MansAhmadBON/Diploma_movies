import React from 'react'
import styles from './styles.module.css'


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
            <div className={styles.wrapper_inp}>
                <label htmlFor="inpMain" className={styles.label}>FIND YOUR MOVIE</label>
                <input className={styles.inp} ref={(input) => {this.film = input}} id="inpMain"/>
            </div>
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

