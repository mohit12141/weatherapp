import React from "react";
import ChooseStateComponent from "./ChooseState";

const Home = () => {
    return <>
        <div className="homeWrap">
            <div className="weatherSection">
            left component
                <div className="rightSide">
                    <ChooseStateComponent />
                    2. Weakinfo <br />
                    3. Humidity 
                </div>
            </div>
        </div>
    </>
};

export default Home;