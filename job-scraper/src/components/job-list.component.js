import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

// const JobScraped = props => (
//   <tr>
//     <td>{props.jobScraped.title}</td>
//     <td>{props.jobScraped.company}</td>
//     <td>{props.jobScraped.location}</td>
//     <td>{props.jobScraped.remoteOrOffice}</td>
//     <td>{props.jobScraped.compensation}</td>
//     <td>{props.jobScraped.requiremen}</td>
//     <td>{props.jobScraped.postTime}</td>
//     <td>
//       <Link to={"/edit/"+props.jobScraped._id}>edit</Link> | <a href="#" onClick={() => { props.deleteJob(props.jobScraped._id) }}>delete</a>
//     </td>
//   </tr>
// )

// export default class JobList extends Component {
//   constructor(props) {
//     super(props);

//     this.deleteJob = this.deleteJob.bind(this)

//     this.state = {jobScrapeds: []};
//   }

//   componentDidMount() {
//     axios.get('http://localhost:3000/jobs/')
//       .then(response => {
//         this.setState({ jobScrapeds: response.data })
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   deleteJob(id) {
//     axios.delete('http://localhost:3000/jobs/'+id)
//       .then(response => { console.log(response.data)});

//     this.setState({
//       jobScrapeds: this.state.jobScrapeds.filter(el => el._id !== id)
//     })
//   }

//   jobList() {
//     return this.state.jobScrapeds.map(currentjob => {
//       return <JobScraped job={currentjob} deleteJob = {this.deleteJob} key={currentjob._id}/>;
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3>Job Information</h3>
//         <table className="table">
//           <thead className="thead-light">
//             <tr>
//               <th>Title</th>
//               <th>Company</th>
//               <th>Location</th>
//               <th>RemoteOrOffice</th>
//               <th>compensation</th>
//               <th>Requirement</th>
//               <th>post Time</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             { this.jobList() }
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

export default class addTag extends Component {
  render() {
    return (
      <div>
        <p>You are on the add tage component!</p>
      </div>
    )
  }
}