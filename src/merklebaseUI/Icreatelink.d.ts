interface ICreateLinkProps {
  onSuccess: (data: any) => void;
  onError: (data: any) => void;
  onCancel: (data: any) => void;
  apiKey: string;
  token: string;
  url: string;
}

export default ICreateLinkProps;
