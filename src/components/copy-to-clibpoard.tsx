import { useState } from "react";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard = ({ text }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button className="copy-to-clipboard" onClick={onClick}>
      {copied ? "✅" : "📋"} Copy to clipboard
    </button>
  );
};

export default CopyToClipboard;
