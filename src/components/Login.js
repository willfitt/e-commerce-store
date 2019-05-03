import React from 'react'
// import store from '../store';

class Login extends React.Component {
    // componentDidMount() {
    //     store.subscribe(() => this.forceUpdate())
    // }
    
    // login() {
    //     store.dispatch({
    //         type: 'LOGIN',
    //         userName: name
    //     })
    // }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="ui middle aligned center aligned grid container">
                    <div className="column">
                        <h2 className="ui black header">
                            <div className="content">
                                Log-in to your account
                        </div>
                        </h2>
                        <form className="ui large form">
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" name="email" placeholder="E-mail address"></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input type="password" name="password" placeholder="Password"></input>
                                    </div>
                                </div>
                                <div className="ui fluid lage black submit button">Login</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login

