import React, {Component} from 'react'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

import { connect } from 'react-redux'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {

        console.log(this.props.summary);
        const {credit, debt} = this.props.summary

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Valor consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return ({summary: state.dashboard.summary})}
const mapDispathToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(Dashboard)