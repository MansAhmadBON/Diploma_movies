import React from 'react'
import {Baner, TitleMovie, Ganre, ReleaseDate} from './components'

const ContainerFilms = props => {
    if(props.dataFilms){

        const sortBy = () => {
            if(props.sortBy === 'release'){
                return props.dataFilms.sort((a,b) => {
                    const x = +a.release_date.replace(/-/g, '')
                    const y = +b.release_date.replace(/-/g, '')
                    return (x < y) ? 1 : -1
                })
            } else if(props.sortBy === 'rating'){
                return props.dataFilms.sort((a,b) => {
                    const x = +a.vote_count
                    const y = +b.vote_count
                    return (x < y) ? 1 : -1
                })
            } else {
                return null
            }
            
        }
        sortBy()

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

