import React from 'react'
import { Input, BtnSearch, BtnsSearchBy } from './componentsFrom'
import styles from './styles.module.css'

const Form = props => {
    const handleOfSubmit = e => e.preventDefault();
    //console.log('props:', props)
    return (
        <div>
            <header className={styles.baner}>
                <h1 className={styles.title}>netflixroulette</h1>
                <form onSubmit={handleOfSubmit} className={styles.form}>
                    <Input getInpVal={props.getInputValue}/>
                    <BtnsSearchBy 
                        searchByGanre={props.searchByGanre}
                        searchByTitle={props.searchByTitle}
                    />
                    <BtnSearch getMovis={props.getMovisData}/>
                </form>
            </header>
        </div>
    )
}
export default Form

