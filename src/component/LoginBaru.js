import { Component } from "react"



class LoginBaru extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            emailValid : false,
            passwordValid : false,
            emailErrorMsg : '',
            passwordErrorMsg : '',
        }
    }

    handleEmailChange = (event) => {
        if (event.target.value.includes('@')&&event.target.value.includes('.')){
            this.setState({
                email : event.target.value,
                emailValid : true,
                emailErrorMsg : ''
            })
        } else {
            this.setState({
                emailValid : false,
                emailErrorMsg : 'invalid email'
            })
        }
    }

    handlePasswordChange = (event) => {
        if (event.target.value.length >= 6){
            this.setState({
                password : event.target.value,
                passwordValid : true,
                passwordErrorMsg : ''
            })
        } else {
            this.setState({
                passwordValid : false,
                passwordErrorMsg : 'Password min 6 karakter'
            })
        }
    }

    handleSubmit = (event) => {
        this.props.callback(this.state);
        event.preventDefault()
      };
      

    render(){
        const flexContainer={
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'space-between',
            marginTop:'15%',
        }
    
        const loginContainer={
            height: '250px',
            width: '300px',
            backgroundColor: 'grey',
            border: '2px solid grey',
            borderRadius: '10px',
            marginRight: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    
        const appTitle={
            color:'black',
            marginLeft: '128px',
            marginBottom: '64px',
            flexGrow: '1',
        }
    
        const title={
            fontSize: '64px',
        }
    
        const subtitle={
            fontSize: '32px',
        }
    
        const loginForm={
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            flexGrow: '1',
            justifyContent: 'space-around',
            gap: '5px',
        }
    
        const loginFormItem={
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
        }
    
        const button={
            height: '32px',
            Text:'Send'
        }
    
        const input={
            height: '24px'
        }

        const warning={
            fontSize:'12px',
            color:'red',
        }

        return(
            <div style={flexContainer}>
               <div style={loginContainer}>
                <form onSubmit={this.handleSubmit}>
                   <div style={loginForm}>
                       <div style={loginFormItem}>
                           <label>email</label>
                           <input type="text" name="email" placeholder="email" onChange={this.handleEmailChange} required/>
                           <div style={warning}>{this.state.emailErrorMsg}</div> <br/>
                       </div>
                       <div style={loginFormItem}>
                           <label>Password</label>
                           <input type="password" name="password" placeholder="password" onChange={this.handlePasswordChange} required/>
                           <div style={warning}>{this.state.passwordErrorMsg}</div> <br/>
                       </div>
                       <button style={button} type='submit' value='submit'>Login</button>
                   </div>
                </form>
               </div>
           <div style={appTitle}>
               <div style={title}>Welcome to Warung Makan Bahari</div>
               <div style={subtitle}><i>Tiada Hari tanpa WMB!</i></div>
           </div>
           </div>
   )
}


    
}

export default LoginBaru;