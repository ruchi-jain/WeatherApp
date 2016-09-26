var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 classNmae="text-center">Examples</h1>
      <p>Here are few examples locations to try out!</p>
          <ol>
          <li>
            <Link to='/?loaction=Sunnyvale'>Sunnyvale, CA</Link>
          </li>
              <li>
            <Link to='/?loaction=Sanfransisco'>San Fransisco, CA</Link>
          </li>
          </ol>
    </div>
  )
};

module.exports = Examples;
