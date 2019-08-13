import React from 'react'
import {Baner, TitleMovie, Ganre, ReleaseDate} from './components'

const ContainerFilms = props => {
    if(props.dataFilms){
        return props.dataFilms.map((item, i) => {
            return (
                <div key={i}>
                    <Baner src={item.poster_path} alt={item.title} targetFilm={props.getTargetFilm}/>
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



