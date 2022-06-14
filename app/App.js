import {VelteElement, VelteComponent, VelteRender} from "velte"

//style
import "@picocss/pico/css/pico.min.css";
import "./style/style.css"

//assets
import logo from "./assets/images/velte-main.png"

//components
import { GettingStarted } from "./components/get_started"
import { Information } from "./components/information"

class Main extends VelteComponent{
    constructor(traits){
        super(traits)
        this.state = {}
    }

    render(){
        return (
            <div className = "container">
                <img src={logo} className = "logo"/>
                <div className = "grid">
                    <Information/>
                    <GettingStarted/>
                </div>
            </div>
        )
    }
}

VelteRender(<Main/>, document.getElementById("app"))