import ErrorBanner from "@/components/error-banner";
import { ChangeEvent, MouseEvent } from "react";

interface UploadFileFormProps {
  error?: string;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (evt: MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const UploadFileForm = ({
  error,
  onFileChange,
  onSubmit,
}: UploadFileFormProps) => {
  return (
    <form className="form">
      <ErrorBanner message={error} />
      <div className="form-field">
        <label htmlFor="theFile" className="form-label">
          File:
        </label>
        <input
          type="file"
          name="theFile"
          id="theFile"
          className="form-input"
          onChange={onFileChange}
        />
      </div>
      <div className="form-field">
        <button className="button-primary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default UploadFileForm;
