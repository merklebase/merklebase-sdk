"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCreateLinkComponent = void 0;
const initCreateLinkComponent = ({ callback, apiKey, url, }) => {
    window.addEventListener("message", function (event) {
        console.log("HERE in message", event.data);
        if (event.data.type === "SHEKET") {
            console.log("HERE in message callbsack");
            callback(event.data);
        }
    });
    const iframeContainer = document.createElement("div");
    // iframeContainer.style =
    //   "position: absolute; top: 0; left: 0; width: 100%; height: 100%;";
    const createLink = document.createElement("iframe");
    createLink.src = url;
    // createLink.style = "width: 100%; height: 100%; border: none;";
    createLink.onload = () => {
        var _a;
        (_a = createLink.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage({
            token: apiKey,
        }, "*");
    };
    iframeContainer.appendChild(createLink);
    document.body.appendChild(iframeContainer);
};
exports.initCreateLinkComponent = initCreateLinkComponent;
exports.default = { initCreateLinkComponent: exports.initCreateLinkComponent };
