"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import UploadResultComponent from "./result";
import LoadingIndicator from "@/components/loading-indicator";
import UploadFileForm from "./form";

const UploadFilePage = () => {
  const [file, setFile] = useState<File>();
  const [hash, setHash] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const chosenFile = event.target.files[0];
      setFile(chosenFile);
    }
  };

  const uploadToIpfs = async (event: MouseEvent<HTMLButtonElement>) => {
    setError(undefined);
    setLoading(true);
    event.preventDefault();
    if (!file) {
      setLoading(false);
      setError("No file selected");
      return;
    }
    const body = new FormData();
    body.append("file", file);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body,
      });
      const { hash } = await response.json();
      setHash(hash);
    } catch (error: any) {
      setHash(undefined);
      console.error(error);
      setError(error?.message ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const uploadAnother = () => {
    setFile(undefined);
    setHash(undefined);
  };

  return (
    <div>
      <h1>Upload File</h1>
      {hash ? (
        <UploadResultComponent hash={hash} uploadAnother={uploadAnother} />
      ) : loading ? (
        <div className="mt-6">
          <LoadingIndicator align="center" />
        </div>
      ) : (
        <UploadFileForm
          onFileChange={handleSelectFile}
          onSubmit={uploadToIpfs}
          error={error}
        />
      )}
    </div>
  );
};

export default UploadFilePage;
