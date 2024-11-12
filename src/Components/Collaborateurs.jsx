import React from 'react'
import "../styles/collaborateurs.css";
import Total from "../assets/images/Logo_TotalEnergies.svg.png";
import logo from "../assets/images/Edoceo.png";

function Collaborateurs() {
    return (
        <section className='collaborateurs'>
            <div className='max-width'>
                <div className='title'>Nos collaborateurs nous font confiance
                </div>
                <div className="container-colab">
                    <div> <img src={Total} alt="" /></div>
                    <div> <img src={logo} alt="" /></div>
                    <div> <img src={Total} alt="" /></div>
                    <div> <img src={logo} alt="" /></div>
                    <div> <img src={Total} alt="" /></div>
                    <div> <img src={logo} alt="" /></div>
                    <div> <img src={Total} alt="" /></div>
                    <div> <img src={logo} alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default Collaborateurs
