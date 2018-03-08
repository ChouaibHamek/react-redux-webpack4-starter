import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './global-style.css'

import configureStore from "./utils/configure_store";
const store = configureStore();

const rootEl = document.getElementById("root");

let render = () => {
    const App = require("./containers/app/app.js").default;
    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        rootEl
    );
};

if(module.hot) {
    const renderApp = render;
    const renderError = (error) => {
        const RedBox = require("redbox-react").default;
        ReactDOM.render(
            <RedBox error={error} />,
            rootEl,
        );
    };
    render = () => {
        try {
            renderApp();
        }
        catch(error) {
            console.error(error);
            renderError(error);
        }
    };
    module.hot.accept("./containers/app/app.js", () => {
        setTimeout(render);
    });
}

render();
