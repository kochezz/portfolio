import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/kochezz/001-house-price-prediction-python" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kochezz/001-house-price-prediction-python" target="_blank" rel="noreferrer"><h2>House Price Prediction - Python</h2></a>
                <p>This project build is a Multiple Linear Regression model implementing statistical methods such as OLS and multi-regression analysis. This project used Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://01-beda-house-price-prediction.streamlit.app/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://01-beda-house-price-prediction.streamlit.app/" target="_blank" rel="noreferrer"><h2>House Price Prediction App</h2></a>
                <p>Accompanying Streamlit App developed to help predict house prices from the previous python project.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kochezz/002-house-price-prediction-R" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kochezz/002-house-price-prediction-R" target="_blank" rel="noreferrer"><h2>House Price Prediction - R</h2></a>
                <p>A Multiple Linear Regression model implementing statistical methods built with R using R-Studio IDE and various libraries such as tidyverse, caret and ggplot2.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kochezz/PRJ01_Iris_Classification" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kochezz/PRJ01_Iris_Classification" target="_blank" rel="noreferrer"><h2>New Iris Flower Classifiction</h2></a>
                <p>This project classifies iris flowers into one of three species based on their sepal and petal measurements, model developed using Python. </p>
            </div>
            <div className="project">
                <a href="https://github.com/kochezz/heart-attack-prediction-PY" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kochezz/heart-attack-prediction-PY" target="_blank" rel="noreferrer"><h2>Heart Attack Risk Assessment</h2></a>
                <p>Analyzed patient data from Zheen Hospital in Erbil, Iraq, from January to May 2019 to create a model that was in turn trained and validated to predict the likelyhood of a heart attack by implementing statistical methods namely logistic regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://beda-heart-attack-prediction.streamlit.app" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://beda-heart-attack-prediction.streamlit.app" target="_blank" rel="noreferrer"><h2>Heart Attack Risk Assessment App</h2></a>
                <p>Created a Streamlit app to accompany the analyzed and trained patient data to help predict the likelyhood of a heart attack based on variables used to create the logistic regression model.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kochezz/TS-Energy-Consumption-XGB" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kochezz/TS-Energy-Consumption-XGB" target="_blank" rel="noreferrer"><h2>Time Series Energy Forecast Model with XGBoost</h2></a>
                <p>This project delivers an end-to-end energy demand forecasting solution using Python for model development and R for interactive visualization. It also uses XGBoost coupled with parameter tuning to optimise the forecast results.</p>
            </div>
            <div className="project">
                <a href="https://kochezz.shinyapps.io/ts_energy_consumption_xgb_r/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kochezz.shinyapps.io/ts_energy_consumption_xgb_r/" target="_blank" rel="noreferrer"><h2>Shiny Dashboard for Energy Forecast Models Visualisation.</h2></a>
                <p>Developed a custom R-Shiny dashboard for the energy demand forcasting solution model allowing for graphical interpretation of the forecasts.  The dashboard allows you to download your forecast data as a csv file which can then be used for further data manipulation. </p>
            </div>
            <div className="project">
                <a href="https://github.com/kochezz/heart-disease-prediction-BLR" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kochezz/heart-disease-prediction-BLR" target="_blank" rel="noreferrer"><h2>Coronary Heart Disease Prediction - WIP</h2></a>
                <p>The dataset originally comes from the CDC and is a major part of the Behavioral Risk Factor Surveillance System (BRFSS), which conducts annual telephone surveys to collect data on the health status of U.S. residents. As described by the CDC: "Established in 1984 with 15 states, BRFSS now collects data in all 50 states, the District of Columbia, and three U.S. territories. </p>
            </div>
            <div className="project">
                <a href="https://github.com/kochezz" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kochezz" target="_blank" rel="noreferrer"><h2>Health Care Tracking App | Project Under Development</h2></a>
                <p>Developing for commercial release a mobile healthcare tracking app.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;