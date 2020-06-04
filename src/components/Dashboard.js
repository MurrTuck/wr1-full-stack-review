import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        // console.log('Look ma no hands', this.props)
        return (
            <div>This is the Dashboard Component</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Dashboard)