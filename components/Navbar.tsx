import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()

    const handleNavigate = (res: any) => {
        router.push(res)
    }

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className='navbar'>
            <div>
                <p onClick={() => handleNavigate("/")}>Home</p>
                <p onClick={() => handleNavigate("/about")}>About</p>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar