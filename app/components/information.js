import {VelteComponent,VelteElement,VELTE_VERSION} from "velte"

export class Information extends VelteComponent{
    constructor(traits){
        super(traits)
        this.state = {}
    }

    render(){
        return(
            <article>
                <h2 className="title"><i className="fas fa-info-circle"></i> Information</h2>
                <p>Welcome to your new velte project. You should follow the project's structure for organization and scalability.</p>
                <p className= "version">v{VELTE_VERSION}</p>
            </article>
        )
    }
}