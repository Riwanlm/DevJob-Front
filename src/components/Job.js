import React, {Component} from 'react';
import moment from "moment";
import "moment/locale/fr";


class Job extends Component {


    render() {

        const job = this.props.job;
        const skills = this.props.job.skills.map(skill => <div className="badge badge-warning" key={skill.id}><h6>{ skill.name}</h6></div>);

        return (
            <div>
                <article>
                    <h2>{job.title}</h2>
                    <div className="row">
                        <div className="badge badge-success"><h6><i>{job.company}</i></h6></div>
                        <div className="col-8 row justify-content-center">
                            {skills}
                        </div>
                    </div>
                    <h5>Offre ajoutée le {moment(job.createdAt).fromNow()}</h5>
                </article>
            </div>
        );
    }
}

export default Job;