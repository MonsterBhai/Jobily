import React from 'react'
import { Logo } from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container page">
            <div className="info">
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea iure quaerat ipsum sequi aliquam facere quis velit rem, iusto quibusdam. Vel illo unde nesciunt necessitatibus temporibus consequuntur recusandae sapiente?
                </p>
                <Link to="/register"><button className="btn btn-hero">Login/Register</button></Link>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>
  )
}

export default Landing