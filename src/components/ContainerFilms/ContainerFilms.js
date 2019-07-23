import React from 'react'
import {Baner, TitleMovie, Ganre, ReleaseDate} from './components'

const ContainerFilms = props => {
    if(props.dataFilms && props.inputValue !== ''){

        const filteredFilms = props.dataFilms.filter( item => {
            if(props.searchBy === 'title'){
                return item.title.includes(props.inputValue) 
            } else if(props.searchBy === 'ganre'){
                return item.genres.includes(props.inputValue) 
            } else {
                return item.title.includes(props.inputValue) 
            }
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