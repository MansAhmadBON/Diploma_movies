import React from 'react'
import styles from './styles.module.css'
import Ganre from './Ganre/Ganre'

const ModalWindow = props => {
    const {budget, title, genres, overview, poster_path, revenue} = props.data;
    const toCloseModal = () => props.toCloseModal();
    
    return (
        <div className={styles.modal_overlay} onDoubleClick={() => toCloseModal()}>
            <div className={styles.modal_display}>
                <div className={styles.modal_window}>
                    <div style={{backgroundImage: `url(${poster_path})`, backgroundSize: 'cover', height:'400px'}}>
                        <div className={styles.modal_sub_layer}>
                            <h2 className={styles.modal_title}>{title}</h2>
                            <div>
                            {
                                genres && <Ganre genres={genres} />
                            }
                            </div>
                            <p className={styles.modal_descr}>{overview}</p>
                            <div className={styles.container_revenue_budget}>
                                <span className={styles.modal_revenue}>Popularity {revenue}</span>
                                <span className={styles.modal_budget}>Budget {budget}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow