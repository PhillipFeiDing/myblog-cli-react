import React, { Component } from 'react'
import {
    ParticlesWrapper
} from './style'
import Particles from 'react-particles-js'
import { config } from './config'

class ParticlesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stickyPosition: false
        }
        this.changePositioning = this.changePositioning.bind(this)
        this.setComputeDistanceToTop = this.setComputeDistanceToTop.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changePositioning)
        window.addEventListener('resize', this.setComputeDistanceToTop)
        this.setComputeDistanceToTop()
    }

    setComputeDistanceToTop() {
        this.setState({
            distanceToTop: window.pageYOffset + this.domNode.getBoundingClientRect().top,
            height: this.domNode.offsetHeight
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changePositioning)
        window.removeEventListener('resize', this.setComputeDistanceToTop)
    }

    changePositioning() {
        if (window.scrollY > this.state.distanceToTop + this.state.height) {
            this.setState(() => ({
                stickyPosition: true,
                offsetTop: 0
            }))
        } else {
            if (window.scrollY > this.state.distanceToTop) {
                this.setState(() => ({
                    stickyPosition: false,
                    offsetTop: window.scrollY - this.state.distanceToTop
                }))
            } else {
                this.setState(() => ({
                    stickyPosition: false,
                    offsetTop: 0
                }))
            }
        }
    }
    
    render() {
        const { stickyPosition } = this.state
        return (
            <ParticlesWrapper
                ref={(el) => {this.domNode = el}}
                className={stickyPosition ? 'sticky' : 'normal'}
                offsetTop={this.state.offsetTop}
            >
                <Particles params={config} width={window.innerWidth + 'px'} height={window.innerHeight + 'px'}/>
            </ParticlesWrapper>
        )
    }
}

export default ParticlesContainer