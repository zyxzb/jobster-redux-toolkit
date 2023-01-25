import React from 'react';
import { Link } from 'react-router-dom';
import img from 'assets/images/not-found.svg';
import Wrapper from 'assets/wrappers/ErrorPage';

const ErrorPage = () => {
  return (
    <Wrapper className='full-page'>
      <img src={img} alt='not found' />
      <h3>Page not found :(</h3>
      <p>Go back to the home page by clicking the link below</p>
      <Link to='/'>back home</Link>
    </Wrapper>
  );
};

export default ErrorPage;
