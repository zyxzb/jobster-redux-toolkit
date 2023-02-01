import React from 'react';
import main from 'assets/images/main.svg';
import { Wrapper } from 'assets/wrappers/LandingPage';
import { Logo } from 'components';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job
            <span>Tracking</span>App
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            sunt voluptas dolor consequuntur architecto nam hic sint, blanditiis
            expedita. Inventore provident id voluptate, aliquam ratione nostrum
            officiis non omnis temporibus corrupti veniam dolor, accusamus ipsa
            vero optio vitae explicabo voluptatibus?
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' srcSet='' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
