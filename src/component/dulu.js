import { Component } from "react"



class Dulu extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            usernameValid : false,
            passwordValid : false,
            usernameErrorMsg : '',
            passwordErrorMsg : '',
        }
    }

    handleUsernameChange = (event) => {
        if (event.target.value.includes('@')){
            this.setState({
                username : event.target.value,
                usernameValid : true,
                usernameErrorMsg : ''
            })
        } else {
            this.setState({
                usernameValid : false,
                usernameErrorMsg : 'Username tidak memiliki \'@\''
            })
        }
    }

    handlePasswordChange = (event) => {
        if (event.target.value.length > 5){
            this.setState({
                password : event.target.value,
                passwordValid : true,
                passwordErrorMsg : ''
            })
        } else {
            this.setState({
                passwordValid : false,
                passwordErrorMsg : 'Password harus sepanjang 6 karakter'
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.usernameValid && this.state.passwordValid){
            if (this.state.username === 'joshua@gmail.com' && this.state.password === '123456'){
                alert('Login Berhasil');    
            } else {
                alert('Gagal Login. Username atau Password salah');    
            }
        } else {
            alert('Gagal Login. Username dan Password tidak sesuai ketentuan');
        }
    }

    // handleChangeEmail=(event)=>{
    //     if (event.target.value.includes('@')) {
    //         this.setState({
    //             email:event.target.value,
    //             labelEmail:'',
    //             nilaiEmail:true
    //         });
    //     } else {
    //         this.setState({
    //             nilaiEmail:false,
    //             labelEmail:'invalid email'
    //         })
    //     }
    //     //this.validasi()
    // }

    // handleChangePassword=(event)=>{
    //     if (event.target.value.length>=6) {
    //         this.setState({
    //             password:event.target.value,
    //             labelPassword:'',
    //             nilaiPassword:true
    //         });
    //     } else {
    //         this.setState({
    //             labelPassword:'Password min 6 karakter'
    //         })
    //     }
    //     this.validasi()
    // }

    // validasi = () => {
    //     if(this.state.email.length > 0 || this.state.password.length > 0 ||
    //       !this.state.nilaiEmail || !this.state.nilaiPassword){
    //       this.setState({
    //         isValid : true
    //       })
    //     }else{
    //       this.setState({
    //         isValid: false
    //       })
    //     }
    //   }


    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     // var validRegex=/^[A-Za-z0-9_])+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*$/;
    //     const hasilEmail = this.state.email;
    //     const hasilPswd = this.state.password;
    //     if (hasilEmail ===""&&hasilPswd==='') {
    //         alert(`email dan password harus di isi`)
    //     } else if (hasilEmail ===""){
    //         alert(`email harus di isi`)
    //     } else if (hasilPswd==='') {
    //         alert(`password harus di isi`)
    //     } else if (hasilPswd.length<6){ 
    //         alert(`password kurang dari 6 karakter`)
    //     } else if (hasilPswd.length>6){
    //         alert(`password max 6 karakter`)
    //     }else if (hasilEmail.match('/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/')){
    //         if (hasilPswd.length>=6) {
    //             alert(`email ${hasilEmail} telah berhasil login`);
    //             this.setState({
    //                 labelEmail:''
    //             })
    //         } else {
    //             alert(`password min 6 karakter`) 
    //             this.setState({
    //                 labelPassword:'password min 6 karakter'
    //             })
    //         }
             
    //     } else {
    //         alert(`sukses login`)
    //     }
    // }
    


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
                           <input style={input} type="email" placeholder="email" onChange={this.handleUsernameChange} value={this.state.email} required/>
                           <p style={warning}>{this.state.usernameErrorMsg}</p>
                       </div>
                       <div style={loginFormItem}>
                           <label>Password</label>
                           <input style={input} type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password} required/>
                           <p style={warning}>{this.state.passwordErrorMsg}</p>
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

export default Dulu;