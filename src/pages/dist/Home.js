"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var firebase_1 = require("../services/firebase");
var illustration_svg_1 = require("../assets/images/illustration.svg");
var logo_svg_1 = require("../assets/images/logo.svg");
var google_icon_svg_1 = require("../assets/images/google-icon.svg");
var Button_1 = require("../components/Button");
var App_1 = require("../App");
//CSS
require("../styles/auth.scss");
function Home() {
    var history = react_router_dom_1.useHistory();
    var value = react_1.useContext(App_1.TestContext);
    function handleCreateRoom() {
        var provider = new firebase_1.firebase.auth.GoogleAuthProvider();
        firebase_1.auth.signInWithPopup(provider).then(function (result) {
            console.log(result);
            history.push('/rooms/new');
        });
    }
    return (React.createElement("div", { id: "page-auth" },
        React.createElement("aside", null,
            React.createElement("img", { src: illustration_svg_1["default"], alt: "Ilustra\u00E7\u00E3o simbolizando perguntas e respostas" }),
            React.createElement("strong", null, "Crie salas de Q&A ao-vivo"),
            React.createElement("p", null, "Tire d\u00FAvidas da sua audi\u00EAncia em tempo real")),
        React.createElement("main", null,
            React.createElement("div", { className: "main-content" },
                React.createElement("img", { src: logo_svg_1["default"], alt: "Logo Letmeask" }),
                React.createElement("button", { onClick: handleCreateRoom, className: "create-room" },
                    React.createElement("img", { src: google_icon_svg_1["default"], alt: "" }),
                    "Crie sua sala com o Google"),
                React.createElement("div", { className: "separetor" }, "ou entre em uma sala"),
                React.createElement("form", null,
                    React.createElement("input", { type: "text", name: "", id: "", placeholder: "Digite o c\u00F3digo da sala" }),
                    React.createElement(Button_1["default"], { type: "submit" }, "Entrar na sala"))))));
}
exports["default"] = Home;
