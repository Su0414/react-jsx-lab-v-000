import React from 'react';

export default class RegistrationForm extends React.Component {
  render() {
    return (
            <div className="RegistrationForm">
              <form>
                <input type="text" name="username"></input>
                <input type="password" name="password"></input>
                <button type="submit"></button>
              </form>
            </div>
    )
  }
}
