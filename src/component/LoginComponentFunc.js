function LoginComponentFunc() {
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
    return(
             <div style={flexContainer}>
                <div style={loginContainer}>
                    <div style={loginForm}>
                        <div style={loginFormItem}>
                            <label>User Name</label>
                            <input style={input} type="text"/>
                        </div>
                        <div style={loginFormItem}>
                            <label>Password</label>
                            <input style={input} type="password"/>
                        </div>
                        <button style={button}>Login</button>
                    </div>
                </div>
            <div style={appTitle}>
                <div style={title}>SMM Batch 2</div>
                <div style={subtitle}><i>Front End Hands On</i></div>
            </div>
            </div>
    )
}

export default LoginComponentFunc;