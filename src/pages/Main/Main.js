import React from "react";
import Form from '../../components'
import ContainerFilms from '../../components/ContainerFilms'
import Footer from '../../components/Footer'
import ModalWindow from '../../components/modalWindow'
import { connect } from 'react-redux'
import actionInputValue from '../../actions/actionInputValue'

class Main extends React.Component {
    
    render(){
        //console.log(this.props.inputValue.value)
        return (
            <main>
                <Form getInputValue={this.props.getInputValue}/>
                <ContainerFilms inputValue={this.props.inputValue.value}/>
                <Footer />
                <ModalWindow />
            </main>
        )
    }
}

const mapStateToProps = props => {
    return {
        inputValue: props.inputValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInputValue: newValue => dispatch(actionInputValue(newValue))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)