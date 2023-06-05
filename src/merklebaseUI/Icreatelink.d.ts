interface ICreateLinkProps {
  apiKey: string
  token: string
  url: string
  onSuccess: (data: any) => void
  onError: (data: any) => void
  onCancel: (data: any) => void
}

export default ICreateLinkProps
