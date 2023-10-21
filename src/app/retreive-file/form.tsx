import ErrorBanner from "@/components/error-banner";
import { ChangeEvent, MouseEvent } from "react";

interface RetreiveFileFormProps {
  error?: string;
  onHashChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (evt: MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const RetreiveFileForm = ({
  error,
  onHashChange,
  onSubmit,
}: RetreiveFileFormProps) => {
  return (
    <form className="form">
      <ErrorBanner message={error} />
      <div className="form-field">
        <label htmlFor="theHash" className="form-label">
          Hash:
        </label>
        <input
          type="text"
          name="theHash"
          id="theHash"
          className="form-input"
          onChange={onHashChange}
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

export default RetreiveFileForm;
