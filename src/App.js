import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 'hom', age: 23,  },
    { name: 'ほ', age: 23 },
  ]

  return(
    <div>
      {
        profiles.map((profile) => {
          return <User name={profile.name} age={profile.age} key={profile.name} />
        })
      }
    </div>
  )
}

const User = props => {
  return <div>Hi, I am {props.name} and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

export default App;
