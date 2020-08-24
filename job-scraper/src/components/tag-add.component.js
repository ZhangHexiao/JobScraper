import React, { Component } from 'react';
import axios from 'axios';

export default class TagAdd extends Component {
  constructor(props) {

    super(props);

    this.onChangeTag = this.onChangeTag.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      tag: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/jobs/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          tag: response.data.tag    
        })   
      })
      .catch(function (error) {
        console.log(error);
      })}

  onChangeTag(e) {
    this.setState({
      tag: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const addTag = {
      tag: this.state.tag
    };

    axios.post('http://localhost:5000/jobs/addTag/' + this.props.match.params.id, addTag)
    .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Add tag for job</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Tag: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.tag}
                onChange={this.onChangeTag}
                />
          </div> 
          <div className="form-group">
            <input type="submit" value="Add new tag" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}