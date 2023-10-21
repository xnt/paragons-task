import { Web3Storage, File as Web3FileWrapper } from "web3.storage";

const getClient = () => {
  const apiToken = process.env.WEB3_STORAGE_API_TOKEN;
  return new Web3Storage({ token: apiToken });
};

export const uploadFile = async (file: File) => {
  const client = getClient();
  const buffer = Buffer.from(await file.arrayBuffer());
  const filesToUpload = [new Web3FileWrapper([buffer], file.name)];

  const result = await client.put(filesToUpload, { wrapWithDirectory: false });
  return result;
};

export const getFile = async (hash: string) => {
  const client = getClient();
  const res = await client.get(hash);
  console.log({ res });
  return res;
};

export const fileExists = async (hash: string) => {
  const client = getClient();
  const fileData = await client.status(hash);
  if (!fileData) {
    return false;
  }
  return true;
};
