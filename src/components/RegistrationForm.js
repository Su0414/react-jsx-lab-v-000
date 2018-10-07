import React from 'react';
import ReactDOM from 'react-dom';

export default class RegistrationForm extends React.Component {
  render() {
    return (
            <div className="user_form">
              <form>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <button type="submit"></button>
              </form>
            </div>
    )
  }
}
