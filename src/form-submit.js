import React from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { servicename: 'input required' , namespace: 'input required'};
  }
  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  handleSubmit = (event) => {
    // alert('A form was submitted: ' + this.state);
    if (this.state.servicename == "input required")
      return null
    if (this.state.namespace == "input required")
      return null
    fetch('https://q18vnh7iq9.execute-api.eu-central-1.amazonaws.com/hack', {
    method: 'POST',
    // We convert the React state to JSON and send it as the POST body
    body: JSON.stringify(this.state)
  }).then(function(response) {
    console.log(response)
    
    return response.json();
  }) .then(data => {
    document.getElementById("text-output").innerHTML = data
  });
  event.preventDefault();
}
render() {
  return (
    <div class="container">
      <h1>Config Connector</h1>
      <h2>CloudSQL instance</h2>
      <form onSubmit={this.handleSubmit}>
      <div class="form-group">
      <div class="row">
    
      <div class="col-sm-2">
        <div>
          <label>
            Servicename:
            <input type="text" class="form-control" value={this.state.value} name="servicename" onChange={this.handleChange} placeholder="insert servicename"/>
          </label>
        </div>
        <div>
          <label>
            Namespace:
            <input type="text" class="form-control" value={this.state.value} name="namespace" onChange={this.handleChange} placeholder="insert namespace"/>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Preview manifest</button>
      </div>
      <div class="col-sm-6">
        <textarea id="text-output" class="form-control" rows="15" readOnly></textarea>
      </div>
      </div>
    </div>
    
      </form>
    </div>
    );
  }
  
}
export default NameForm;