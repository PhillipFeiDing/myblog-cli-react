import React, { Component } from 'react'
import {
    ParticlesWrapper
} from './style'
import Particles from 'react-particles-js'
import { config } from './config'

class ParticlesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.changePositioning = this.changePositioning.bind(this)
        this.setComputeDistanceToTop = this.setComputeDistanceToTop.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changePositioning)
        this.setComputeDistanceToTop()
    }

    setComputeDistanceToTop() {
        this.setState({
            distanceToTop: window.pageYOffset + this.domNode.getBoundingClientRect().top + (this.props.offset || 0),
            height: this.domNode.offsetHeight
        })
        this.changePositioning()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changePositioning)
    }

    changePositioning() {
        if (window.scrollY > this.state.distanceToTop) {
            this.setState(() => ({
                offsetTop: window.scrollY - this.state.distanceToTop
            }))
        } else {
            this.setState(() => ({
                offsetTop: 0
            }))
        }
    }
    
    render() {
        return (
            <ParticlesWrapper
                ref={(el) => {this.domNode = el}}
                offsetTop={this.state.offsetTop}
            >
                <Particles
                    params={config}
                    width={window.innerWidth + 'px'}
                    height={window.innerHeight + 'px'}
                    style={this.props.show? {} : {display: 'none'}}
                />
            </ParticlesWrapper>
        )
    }
}

export default ParticlesContainer