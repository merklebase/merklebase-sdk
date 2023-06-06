export const initCreateLinkComponent = ({
  apiKey,
  token,
  url,
  onSuccess,
  onError,
  onCancel,
}: any) => {
  const iframeContainer = document.createElement('div')
  iframeContainer.setAttribute(
    'style',
    'position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
  )

  const createLink = document.createElement('iframe')
  createLink.src = 'https://connect.merklebase.io'
  createLink.setAttribute('style', 'width: 100%; height: 100%; border: none;')

  createLink.onload = () => {
    createLink.contentWindow?.postMessage(
      {
        type: 'CREDENTIALS',
        url,
        credentials: {
          apiKey,
          userToken: token,
        },
      },
      '*'
    )
  }

  iframeContainer.appendChild(createLink)

  document.body.appendChild(iframeContainer)

  window.addEventListener('message', function(event) {
    console.log('HERE in message', event.data)
    if (event.data.type === 'CONNECT_LINK_SUCCESS') {
      iframeContainer.remove()
      onSuccess(event.data)
    } else if (event.data.type === 'CONNECT_LINK_ERROR') {
      iframeContainer.remove()
      onError(event.data)
    } else if (event.data.type === 'CONNECT_LINK_CANCEL') {
      iframeContainer.remove()
      onCancel(event.data)
    }
  })
}

export default { initCreateLinkComponent }
