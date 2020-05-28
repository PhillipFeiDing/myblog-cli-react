import React, { Component } from 'react'

class Loading extends Component {

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <img
                    src='/common/loading.gif' alt=''
                    style={{
                        width: '50px',
                        background: 'none'
                    }}
                />
            </div>
        )
    }
}

export default Loading