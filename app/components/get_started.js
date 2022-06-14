import {VelteComponent,VelteElement} from "velte"

export class GettingStarted extends VelteComponent{
    constructor(traits){
        super(traits)
        this.state={}
    }

    render(){
        return(
            <article>
                <h2 className="title"><i className="fas fa-book"></i> Getting Started</h2>
                <p>You should read the documentation, it covers every bit of the library. Don't hesitate to use velte with 3rd party libraries it was built to be extensive.</p>
                <a href="https://veltedocs.netlify.app" attr:role="button" className="button">Read the Docs</a>
            </article>
        )
    }
}