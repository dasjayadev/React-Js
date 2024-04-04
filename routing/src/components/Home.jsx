import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <h1>Welcome to our website!</h1>
        <Link to="/about">GO TO ABOUT</Link>
    </>
  );
}

export default Home;
