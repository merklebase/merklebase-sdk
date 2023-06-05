interface CreateLinkProps {
  onSuccess: (data: any) => void;
  onError: (data: any) => void;
  onCancel: (data: any) => void;
  apiKey: string;
  token: string;
  url: string;
}

export const initCreateLinkComponent = ({
  onSuccess,
  onError,
  onCancel,
  apiKey,
  token,
  url,
}: CreateLinkProps) => {
  const iframeContainer = document.createElement("div");
  // iframeContainer.style =
  //   "position: absolute; top: 0; left: 0; width: 100%; height: 100%;";

  const createLink = document.createElement("iframe");
  createLink.src = url;
  // createLink.style = "width: 100%; height: 100%; border: none;";

  createLink.onload = () => {
    createLink.contentWindow.postMessage(
      {
        credentials: {
          apiKey,
          userToken: token,
        },
      },
      "*"
    );
  };

  iframeContainer.appendChild(createLink);

  document.body.appendChild(iframeContainer);

  window.addEventListener("message", function (event) {
    console.log("HERE in message", event.data);
    if (event.data.type === "CONNECT_LINK_SUCCESS") {
      onSuccess(event.data);
    } else if (event.data.type === "CONNECT_LINK_ERROR") {
      onError(event.data);
    } else if (event.data.type === "CONNECT_LINK_CANCEL") {
      onCancel(event.data);
    }

    document.body.removeChild(iframeContainer);
  });
};

export default { initCreateLinkComponent };
