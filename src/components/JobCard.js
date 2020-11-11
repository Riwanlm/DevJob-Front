import React, {Component} from 'react';
import moment from "moment";
import Loading from "./Loading";
import Job from "./Job";


class JobCard extends Component {

    state = {jobSelectionne:{}, };

    AddView(job) {

        fetch('http://127.0.0.1:8000/api/jobs/'+job.id)
            .then(response => response.json())
            .then(data => this.setState({
                jobSelectionne: data, loading: false,
                jobskill: data.skills.map(skill => <div className="badge badge-warning" key={skill.id}><h6>{skill.name}</h6></div>),
                date: <p>Offre Ajoutée le : {moment().format("MMM Do YYYY")} </p>
            }))
    }

    render() {

        if (this.state.loading) {
            return <Loading/>
        }


        const JobList = this.props.jobs.map(job =>
            <li key={job.id}><Job job={job}/>
                <button className="btn btn-outline-primary btn-lg" onClick={event => this.AddView(job)}> Voir l'offre </button>
            </li>
        );

        const jobSelect = this.state.jobSelectionne;


        return (
            <div>
                <div className="row">
                    <div className="col m-4 bg-light">
                        <ul>
                            {JobList}
                        </ul>
                    </div>

                    <div className="col">
                        <h2>{jobSelect.title}</h2>
                        <div className="row">
                            <div className="badge badge-success"><h6><i>{jobSelect.company}</i></h6></div>
                            <div className="col-8 row justify-content-center"><h6>{this.state.jobskill}</h6></div>
                        </div>
                        <h5>Offre ajoutée le {moment(jobSelect.createdAt).fromNow()}</h5>
                        <a href="{jobSelect.url}">{jobSelect.url}</a>
                        <p>{jobSelect.description}</p>
                    </div>
                </div>

            </div>
        );
    }
}


//import PropTypes from 'prop-types';
/*JobCard.propTypes = {
    job: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string,
        description: PropTypes.string,
    })
};*/

export default JobCard;