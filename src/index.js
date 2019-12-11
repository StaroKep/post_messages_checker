import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

ReactDOM.render(<App />, document.getElementsByTagName("body")[0]);
// var iframe = document.getElementById('iframe');
// var input = document.getElementById('input');
// var button = document.getElementById('button');
// var postMessagesEl = document.getElementById('post-messages');
// var savedUrl = localStorage.getItem('PaymentWidgetFrameUrl');
//
// if (savedUrl) {
//     input.value = savedUrl;
//     iframe.setAttribute('src', savedUrl);
// }
//
// window.addEventListener("message", receiveMessage, false);
//
// input.addEventListener('keyup', function (e) {
//     if (e.code === 'Enter') {
//         e.preventDefault();
//         e.stopPropagation();
//         updateIframeUrl();
//     }
// });
//
// button.addEventListener('click', function (e) {
//
//     e.preventDefault();
//     e.stopPropagation();
//     updateIframeUrl();
//
// });
//
// function updateIframeUrl() {
//     var url = document.getElementById('input').value;
//     localStorage.setItem('PaymentWidgetFrameUrl', url);
//     iframe.setAttribute('src', url);
// }
//
// function receiveMessage(event) {
//     postMessagesHistory = postMessagesEl.innerHTML + '<br/>';
//     postMessagesEl.innerHTML = postMessagesHistory + event.data;
//     console.log(event);
// }