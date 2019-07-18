import React from "react";
import Form from '../../components'
import ContainerFilms from '../../components/ContainerFilms'
import Footer from '../../components/Footer'
import ModalWindow from '../../components/modalWindow'

class Main extends React.Component {
    render(){
        return (
            <main>
                <Form />
                <ContainerFilms />
                <Footer />
                <ModalWindow />
            </main>
        )
    }
}

export default Main