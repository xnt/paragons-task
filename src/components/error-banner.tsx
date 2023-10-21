interface ErrorBannerProps {
  message?: string;
}

const ErrorBanner = ({ message }: ErrorBannerProps) => {
  if (!message) return null;
  return (
    <div className="error-banner">
      <p>{message}</p>
    </div>
  );
};

export default ErrorBanner;
