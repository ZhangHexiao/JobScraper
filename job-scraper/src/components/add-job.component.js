import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

export default class AddJob extends Component {
  constructor(props) {

    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeRemoteOrOffice = this.onChangeRemoteOrOffice.bind(this);
    this.onChangeCompensation = this.onChangeCompensation.bind(this);
    this.onChangeRequirement = this.onChangeRequirement.bind(this);
    this.onChangePostTime = this.onChangePostTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      company: '',
      location: '',
      remoteOrOffice: '',
      compensation: '',
      requirement: '',
      postTime: ''
    }
  }

  componentDidMount() {
    // this.setState({ 
    //   users: ['test user'],
    //   username: 'test user'
    // });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeCompany(e) {
    this.setState({
      company: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeRemoteOrOffice(e) {
    this.setState({
      remoteOrOffice: e.target.value
    });
  }

  onChangeCompensation(e) {
    this.setState({
      compensation: e.target.value
    });
  }

  onChangeRequirement(e) {
    this.setState({
      requirement: e.target.value
    });
  }

  onChangePostTime(e) {
    this.setState({
      postTime: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const job = {
      title: this.state.title,
      company: this.state.company,
      location: this.state.location,
      remoteOrOffice: this.state.remoteOrOffice,
      compensation: this.state.compensation,
      requirement: this.state.requirement,
      postTime: this.state.postTime
    };
    console.log(job);
    axios.post('http://localhost:3000//jobs/add', job)
    .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Job Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
                />
          </div>
          <div className="form-group"> 
            <label>Company: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.company}
                onChange={this.onChangeCompany}
                />
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
                />
          </div>
          <div className="form-group">
            <label>Remote or Office: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.remoteOrOffice}
                onChange={this.onChangeRemoteOrOffice}
                />
          </div>
          <div className="form-group">
            <label>Compensation: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.compensation}
                onChange={this.onChangeCompensation}
                />
          </div>
          <div className="form-group">
            <label>Requiremen: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.requiremen}
                onChange={this.onChangeRequirement}
                />
          </div>
          <div className="form-group">
            <label>Post Time: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.postTime}
                onChange={this.onChangePostTime}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Job Postion" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}