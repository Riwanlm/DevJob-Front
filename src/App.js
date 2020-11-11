import React, {Component} from 'react';
import './App.scss';
import {NavLink, Route} from "react-router-dom";
import PageJobs from "./components/PageJobs";
import PageAddJob from "./components/PageAddJob";
import Accueil from "./components/Accueil";
import Loading from "./components/Loading";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            skills: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/jobs')
            .then(response => response.json())
            .then(data => this.setState({jobs: data["hydra:member"], loading: false}))

        fetch('http://127.0.0.1:8000/api/skills')
            .then(response => response.json())
            .then(data => this.setState({skills: data["hydra:member"], loading: false}))
    }


    render() {

        if (this.state.loading) {
            return <Loading />
        }

        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary row">
                    <div className="navbar-brand">
                        <ul className="navbar-nav">
                            <li><NavLink className="nav-link" to="/accueil">Accueil</NavLink></li>
                            <li><NavLink className="nav-link" to="/JobList">Offres d'emploi</NavLink></li>
                            <li><NavLink className="nav-link" to="/PageAddJob">Ajouter une offre</NavLink></li>
                        </ul>
                    </div>
                </nav>

                <Route path="/accueil" component={Accueil}/>
                <Route path="/JobList">
                    <PageJobs jobs={ this.state.jobs }/>
                </Route>
                <Route path="/PageAddJob">
                    <PageAddJob skills ={this.state.skills}/>
                </Route>
            </div>
        );
    }
}

export default App;





