import PropTypes from 'prop-types';
import { useState } from 'react';

const Register = ({ onRouteChange, loadUser }) => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('')
  const ID = useState('')


  const onEmail = (event) => {
    setEmail(event.target.value);
  }

  const onPassword = (event) => {
    setPassword(event.target.value);
  }

  const onName = (event) => {
    setName(event.target.value);
  }



  const onSubmitReg = () => {
    fetch('https://brainserver-zejd.onrender.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: Email,
        password: Password,
        id: ID,
        entries: 0,
        name: Name,
        joined: new Date()
      })
  })
    .then(response => response.json())
    .then(user => {
      if (user.id){
      loadUser(user)  
      onRouteChange('home');
    }
    })
  }
  
  return (
    <article className="br3 ba dark-gray mv4 w-100 w-50-m w-25-l mw5 shadow-1 center">
    <main className="pa4 black-80">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f3 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="text" 
            name="name" 
            id="name" 
            onChange={ onName }
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="email" 
            name="email-address" 
            id="email-address" 
            onChange={ onEmail }
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="password" 
            name="password" 
            id="password" 
            onChange={ onPassword }/>
          </div>
        </fieldset>
        <div className="">
          <input 
          onClick={ onSubmitReg }
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
          type="submit" 
          value="Register" 
          />
        </div>

      </div>
    </main>
    </article>
  );
}


Register.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
}

export default Register;




