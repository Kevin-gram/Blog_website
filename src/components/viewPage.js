import React from 'react'
import navabar from './navBar'
import Footer from './Footer'
export default function viewPage() {
    return (
        <div>
            <navabar/>
            <div>
                <img src={myImage} alt="My Image" />
            </div>

            <Footer/>
        </div>
    )
}
