import React from 'react'
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div>
      Page1
      <div>
        <Link to="/page/1">page1</Link>
        <Link to="/page/2">page2</Link>
        <Link to="/page/3">page3</Link>
      </div>
    </div>
  )
}

export default Page1;
