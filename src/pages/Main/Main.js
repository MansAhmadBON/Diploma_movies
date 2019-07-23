import React from "react";
import Form from '../../components'
import ContainerFilms from '../../components/ContainerFilms'
import Footer from '../../components/Footer'
import ModalWindow from '../../components/modalWindow'
import { connect } from 'react-redux'
import actionInputValue from '../../actions/actionInputValue'
import actionGetData from '../../actions/actionGetData'
import actionSearchByTitle from '../../actions/actionSearchByTitle'
import actionSearchByGanre from '../../actions/actionSearchByGanre'



class Main extends React.Component {
    
    render(){
        console.log(this.props.searchBy)
        return (
            <main>
                <Form 
                    getInputValue={this.props.getInputValue}
                    getMovisData={this.props.getMovisDataFromAPI}
                    searchByGanre={this.props.searchByGanre}
                    searchByTitle={this.props.searchByTitle}
                />
                <ContainerFilms 
                    dataFilms={this.props.dataFilms} 
                    inputValue={this.props.inputValue}
                    searchBy={this.props.searchBy}
                />
                <Footer />
                <ModalWindow />
            </main>
        )
    }
}

const mapStateToProps = props => {
    return {
        inputValue: props.inputValue.value,
        dataFilms: props.dataFilms.data,
        searchBy: props.searchFilmsBy.searchBy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInputValue: (newValue) => dispatch(actionInputValue(newValue)),
        getMovisDataFromAPI: () => dispatch(actionGetData()),
        searchByGanre: () => dispatch(actionSearchByGanre()),
        searchByTitle: () => dispatch(actionSearchByTitle()),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)