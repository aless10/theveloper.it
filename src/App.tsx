import React from 'react';
import theveloper from "./assets/theveloper.png"
import './App.css';
import {Button} from "./Button";

function App() {

    const [clicked, setClicked] = React.useState(false)

    const showImg = () => {
        setClicked(!clicked)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>The veloper</h1>
                {!clicked ?
                    <>
                        <p>We run a survey to check who is the best the veloper.
                            <br/>
                        Click the button to check the result!</p>
                        <Button onClick={showImg} text="Go" />
                    </> :
                    <>
                        <img src={theveloper} className="App-logo" alt="logo"/>
                        <a
                            className="App-link"
                            href="https://cv.dataframer.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Take a look at his CV!
                        </a>
                        <Button onClick={showImg} text={"Back"}/>
                    </>
                }
            </header>
        </div>
    );
}

export default App;
