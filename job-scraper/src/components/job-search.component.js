import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JobScraped = props => (
  <tr>
    <td>{props.jobScraped.title}</td>
    <td>{props.jobScraped.company}</td>
    <td>{props.jobScraped.location}</td>
    <td>{props.jobScraped.remoteOrOffice}</td>
    <td>{props.jobScraped.compensation}</td>
    <td>{props.jobScraped.requiremen}</td>
    <td>{props.jobScraped.postTime}</td>
    <td>
    <Link to={"/edit/"+props.jobScraped._id}>edit</Link> ||
    <a href="#" onClick={() => { props.deleteJob(props.jobScraped._id) }}>delete</a>
    </td>
    <td>
    {props.jobScraped.tag}||
    <Link to={"/tagAdd/"+props.jobScraped._id}>Add Tag</Link>
    </td>
  </tr>
)

export default class SearchJob extends Component { 
  constructor(props) {
    super(props);
    this.searchJob = this.searchJob.bind(this);
    this.onChangeKeyword = this.onChangeKeyword.bind(this);
    this.deleteJob = this.deleteJob.bind(this)

    this.state = {jobScrapeds: [], keyword: ''};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/jobs/search/'+localStorage.getItem("keywordStored"))
      .then(response => {
        this.setState({ jobScrapeds: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeKeyword(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  deleteJob(id) {
    axios.delete('http://localhost:5000/jobs/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      jobScrapeds: this.state.jobScrapeds.filter(el => (el.hided === false))
    })
     window.location = '/search';
  }

  searchJob(e) {
    e.preventDefault();
    localStorage.setItem("keywordStored", this.state.keyword);
    axios.get('http://localhost:5000/jobs/search/'+this.state.keyword)
      .then(response => {
        this.setState({ jobScrapeds: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    //====test code for list==========
    // axios.get('http://localhost:5000/jobs/')
    // .then(response => {
    //   this.setState({ jobScrapeds: response.data })
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    //==================================/

    //   window.location = '/search';  
  }

  jobList() {
    return this.state.jobScrapeds.map(currentjob => {
      return <JobScraped jobScraped={currentjob} deleteJob = {this.deleteJob} key={currentjob._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Job Search</h3>
        <form onSubmit={this.searchJob}>
          <input
            placeholder = {localStorage.getItem("keywordStored")}
            value={this.state.keyword}
            onChange={this.onChangeKeyword}
          /> 
        <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>RemoteOrOffice</th>
              <th>compensation</th>
              <th>Requirement</th>
              <th>post Time</th>
              <th>Actions</th>
              <th>Tag</th>
            </tr>
          </thead>
          <tbody>
            { this.jobList() }
          </tbody>
        </table>
      </div>
    )
  }
}