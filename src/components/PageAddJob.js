import React, {Component} from 'react';


class FormJob extends Component {


    state = {
        titre: "",
        entreprise: "",
        competences: [],
        url: "",
        description: ""
    };

    change = event => {
        if(event.target.id === "competences")
        {
            this.state.competences = [].filter.call(event.target.options, option => option.selected).map(option => option.value);
        } else {
            this.setState({
                [event.target.id]: event.target.value
            });
        }
        console.log(this.state)
    };
    submit = event => {
        event.preventDefault();
        console.log(this.state.competences);

        fetch('http://127.0.0.1:8000/api/jobs',{ method:"POST", headers: {'Content-Type':'application/json'}, body:JSON.stringify({
                "title": this.state.titre,
                "company": this.state.entreprise,
                "skills": this.state.competences,
                "url": this.state.url,
                "description": this.state.description,
            })
        })
            .then(response => response.json())
            .then(data => this.setState({titre: ""}))
    };


    render() {

        const skills = this.props.skills.map(skill => <option value={"/api/skills/"+skill.id} key={skill.id}>{ skill.name }</option> );

        return (
            <div className="container col-8">
                <h1 className="col-8 mb-3 mt-3">Ajouter une offre d'emploi</h1>

                <form onSubmit={this.submit}>
                    <div className="form-group ">
                        <div>
                            <label htmlFor="titre" className="col-sm-2 col-form-label">Titre</label>
                            <input type="text" className="form-control" id="titre" placeholder="Ajouter votre titre" value={this.state.titre} onChange={this.change}/>
                        </div>
                        <div>
                            <label htmlFor="entreprise" className="col-sm-2 col-form-label">Entreprise</label>
                            <input type="text" className="form-control" id="entreprise" placeholder="Nom de l'entreprise" onChange={this.change}/>
                        </div>
                        <div>
                            <label htmlFor="competences" className="col-sm-2 col-form-label">Compétences</label>
                            <select multiple={true} className="form-control" id="competences" onChange={this.change}>
                                { skills }
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="url" className="col-sm-2 col-form-label">URL</label>
                            <input type="url" className="form-control" id="url" placeholder="Insérer votre lien" onChange={this.change}/>
                        </div>
                        <div className="">
                            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                            <textarea className="form-control" id="description" placeholder="Décrivez votre offre" onChange={this.change}/>
                        </div>
                        <button className="btn btn-success col-4 mt-4 offset-8" type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        );

    }
}

export default FormJob;