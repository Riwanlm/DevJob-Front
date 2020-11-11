import React, {Component} from 'react';
import Loading from "./Loading";
import JobCard from "./JobCard";

class JobList extends Component {


    render() {

        if (this.props.jobs.length === 0) {
            return <Loading/>
        }


        return (
            <div className="JobList">
                <ul>
                    <JobCard jobs={this.props.jobs}/>
                </ul>
            </div>
        );
    }
}

export default JobList;