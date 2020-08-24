import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import JobsList from "./components/job-list.component";
import EditJob from "./components/edit-job.component";
import AddJob from "./components/add-job.component";
import addTag from "./components/add-tag.component";
 
function App() {
 return (
//   <div className="container">
//   Hello World
// </div>
  <Router>
  <div className="container">
  <Navbar />
  <br/>
  <Route path="/" exact component={JobsList} />
  {/* <Route path="/edit/:id" component={EditJob} /> */}
  <Route path="/create" component={AddJob} />
  {/* <Route path="/update/:id" component={addTag} /> */}
  </div>
  </Router>
 );
}
 
export default App;
