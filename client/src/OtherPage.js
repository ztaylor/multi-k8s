import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="container">
      <h1>This is another page</h1>
      <div>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
};
