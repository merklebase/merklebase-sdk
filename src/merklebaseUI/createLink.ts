interface CreateLinkProps {
  callback: (data: any) => void;
  apiKey: string;
  url: string;
}

export const initCreateLinkComponent = ({
  callback,
  apiKey,
  url
}: CreateLinkProps) => {
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
    createLink.contentWindow?.postMessage(
      {
        token: apiKey,
      },
      "*"
    );
  };

  iframeContainer.appendChild(createLink);

  document.body.appendChild(iframeContainer);
};

export default { initCreateLinkComponent };
