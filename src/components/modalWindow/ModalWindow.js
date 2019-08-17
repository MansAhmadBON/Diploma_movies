import React from 'react'
import styles from './styles.module.css'
import Ganre from './Ganre/Ganre'

const ModalWindow = props => {
    if(props.data){
        const {budget, title, genres, overview, poster_path, revenue} = props.data;

        const toCloseModal = () => {
            props.toCloseModal()
        }

        return (
            <div className={styles.modal_overlay}>
                <div className={styles.modal_display}>
                    <div className={styles.modal_window}>
                        <div style={{backgroundImage: `url(${poster_path})`, backgroundSize: 'cover', height: '400px'}}>
                            <div className={styles.modal_sub_layer}>
                                <h2 className={styles.modal_title}>{title}</h2>
                                <div>
                                    <Ganre genres={genres} />
                                </div>
                                <p className={styles.modal_descr}>{overview}</p>
                                <div className={styles.container_revenue_budget}>
                                    <span className={styles.modal_revenue}>Popularity {revenue}</span>
                                    <span className={styles.modal_budget}>Budget {budget}</span>
                                </div>
                                <div className={styles.modal_container_btn}>
                                    <button 
                                        className={styles.modal_btn}
                                        onClick={toCloseModal}
                                    >X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default ModalWindow