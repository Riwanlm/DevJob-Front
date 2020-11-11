import React, {Component} from 'react';
import JobList from "./JobList";

class PageJobs extends Component {
    render() {

        return (
            <div className="List">
                <h1>Liste des offres</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <JobList jobs={this.props.jobs}
                         skills={this.props.skills}
                />
            </div>
        );
    }
}

export default PageJobs;