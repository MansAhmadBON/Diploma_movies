import React from 'react'
import {Baner, TitleMovie, Ganre, ReleaseDate} from './components'

const ContainerFilms = props => {
    if(props.dataFilms){

        const filteredFilms = props.dataFilms.filter( item => {
            return item.title.includes(props.inputValue) 
        })

        return filteredFilms.map((item, i) => {
            return (
                <div key={i}>
                    <Baner src={item.poster_path} alt={item.title}/>
                    <TitleMovie title={item.title}/>
                    <Ganre ganre={item.genres}/>
                    <ReleaseDate date={item.release_date}/>
                </div>
            )
        })
    } else {
        return null
    }
}

export default ContainerFilms