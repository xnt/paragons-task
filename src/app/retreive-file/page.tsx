"use client";

import LoadingIndicator from "@/components/loading-indicator";
import { ChangeEvent, useState, MouseEvent } from "react";
import RetreiveFileForm from "./form";

const RetreiveFilePage = () => {
  const [hash, setHash] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const hashChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHash(event.target.value);
  };
  const fetchFile = async (evt: MouseEvent<HTMLButtonElement>) => {
    setError(undefined);
    evt.preventDefault();
    if (!hash) {
      setError("No hash provided");
      return;
    }
    setLoading(true);

    try {
      const fileExists = await fetch(`/api/query-file?hash=${hash}`);
      if (fileExists.status === 404) {
        setError("File does not exist. Check your hash.");
        return;
      }

      window.open(`/api/fetch-file?hash=${hash}`, "_blank");
    } catch (error: any) {
      console.error(error);
      setError(error?.message ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Retreive File</h1>
      {loading ? (
        <div className="mt-8">
          <LoadingIndicator />
        </div>
      ) : (
        <RetreiveFileForm
          onHashChange={hashChange}
          onSubmit={fetchFile}
          error={error}
        />
      )}
    </div>
  );
};

export default RetreiveFilePage;
