import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Personal Digital Assistants</h1>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                        <ProfileCard name="Alexa" description="Your friendly neighbourhood Alexa." avatar={AlexaImage} />
                        </div>
                        <div className="column is-3">
                        <ProfileCard name="Siri Assistant"description="Digital assistant by Apple." avatar={SiriImage} /> 
                        </div>
                        <div className="column is-3">
                        <ProfileCard name="Cortana"description="Microsoft made me but no one uses me." avatar={CortanaImage} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;