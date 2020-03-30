import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './Login.css'

class Login extends Component {

    constructor(props){
        super(props);

        this.state ={
            email: null,
            userName: null,
            password: null,
            userListFlag: false,
            uniqueName: ''
        }
    }

    handleChange=  async (e) => {
        console.log("handlechange")

        await this.setState({
            [e.target.name]: e.target.value
        })

        let uniqueName = this.state.email.split("@")[0]+Math.floor(Math.random() * 100);

        this.setState({
            uniqueName
        })
    }

    userName = (e) => {
      console.log("username");

        this.setState({
            userListFlag: true,
            [e.target.name]: e.target.value
        })
    }

    setUniqueName = (userName) => {
        console.log("setUniqueName", userName);

        this.setState({
            userName,
            userListFlag: false
        })
    }

    login = () => {
        this.props.history.push("/search")
    }

    render() {
        const {email, password, userName} = this.state;

        return (
            <div>
                <form onSubmit={this.login}>
                    <div>
                        <input type="email" placeholder="enter email" name="email" value={email} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="enter username" name="userName" value={userName} onChange={this.userName}></input>
                    </div>
                    {
                        this.state.userListFlag ?
                        <div className="userlist" onClick={() => this.setUniqueName(this.state.uniqueName)}>
                            {this.state.uniqueName}
                        </div> : null
                    }
                    <div>
                        <input type="password" placeholder="enter password" name="password" value={password} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <input type="submit" value="login" onClick={this.login}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)