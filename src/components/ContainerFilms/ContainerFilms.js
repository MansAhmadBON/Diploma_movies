import React from 'react'
import {Baner, TitleMovie, Ganre, ReleaseDate} from './components'
import styles from './styles.module.css'

const ContainerFilms = props => {
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
            <div key={item.id} className={styles.item_film}>
                <Baner 
                    src={item.poster_path} 
                    alt={item.title} 
                    targetFilm={props.getTargetFilm}
                    toOpenModal={props.toOpenModal}
                />
                <div className={styles.wrapper_title_release}>
                    <TitleMovie title={item.title}/>
                    <ReleaseDate date={item.release_date}/>
                </div>
                <div>
                    <Ganre ganre={item.genres}/>
                </div>
            </div>
        )
    })
}

export default ContainerFilms

