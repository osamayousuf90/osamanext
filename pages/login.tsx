import React from 'react'

const Login = () => {

    //  handle login
    const handleLogin = () => {
        // @ts-ignore
        localStorage.setItem("isLogged", true);
        // @ts-ignore
        window?.location?.reload(true)
        // router.push("/");
    };


    return (
        <div>
            <div>
                <input type="text" placeholder='Enter you Email' />
                <input type="text" placeholder='Enter you Password' />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login