import React, { Component } from 'react'
import {
    LoginWrapper
} from './style'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { connect } from 'react-redux'

class Login extends Component {

    constructor(props) {
        super(props)
        this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this)
    }

    handleLoginButtonClick() {
        const email = this.emailInputDOMRef.value
        const password = this.passwordInputDOMRef.value
        this.props.adminLogin({email, password})
    }

    render() {
        return (
            <LoginWrapper>
                <form>
                    <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Admin Login</h2>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type='email' className='form-control' 
                            ref={(el) => {this.emailInputDOMRef = el}}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' autoComplete='on' className='form-control'
                            ref={(el) => {this.passwordInputDOMRef = el}}
                        />
                    </div>
                    <Link to='/'><div className='btn btn-primary' style={{width: '100px', marginTop: '10px'}}>Back</div></Link>
                    <div className='btn btn-primary' style={{width: '100px', float: 'right', marginTop: '10px'}}
                        onClick={this.handleLoginButtonClick}
                    >
                        Submit
                    </div>
                </form>
            </LoginWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    adminLogin(credentials) {
        dispatch(actionCreators.adminLogin(credentials))
    }
})

export default connect(null, mapDispatchToProps)(Login)