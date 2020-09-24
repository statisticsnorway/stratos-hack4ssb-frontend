import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { servicename: '' , namespace: ''};
    }
  
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('A form was submitted: ' + this.state);

      fetch('https://q18vnh7iq9.execute-api.eu-central-1.amazonaws.com/hack', {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state)
        }).then(function(response) {
          console.log(response)
          return response.json();
        });
      event.preventDefault();
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
           Servicename:
            <input type="text" value={this.state.value} name="servicename" onChange={this.handleChange} />
          </label>
          <label>
            Namespace:
            <input type="text" value={this.state.value} name="namespace" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
    
  }
  export default NameForm;