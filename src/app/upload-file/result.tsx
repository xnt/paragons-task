import CopyToClipboard from "@/components/copy-to-clibpoard";

interface ResultProps {
  hash: string;
  uploadAnother: VoidFunction;
}

const UploadResultComponent = ({ hash, uploadAnother }: ResultProps) => {
  return (
    <div>
      <p className="mt-4 ml-2">Hash:</p>
      <div className="w-100% text-ellipsis overflow-hidden ml-2 mt-1 font-mono">
        {hash}
      </div>
      <CopyToClipboard text={hash} />
      <button
        className="button-primary m-4"
        type="submit"
        onClick={uploadAnother}
      >
        Upload another
      </button>
    </div>
  );
};

export default UploadResultComponent;
