import { NextRequest, NextResponse } from "next/server";
import { fileExists, getFile } from "../ipfs-utils";
import { lookup } from "mime-types";

const NOT_FOUND = NextResponse.json(
  { message: "File not found" },
  { status: 404 }
);

export async function GET(req: NextRequest) {
  const hash = req.nextUrl.searchParams.get("hash");
  if (!hash) return NOT_FOUND;
  const _fileExists = await fileExists(hash);
  if (!_fileExists) return NOT_FOUND;

  const getResult = await getFile(hash);

  // more likely than not an infra issue, but this should do
  if (!getResult) return NOT_FOUND;

  const files = await getResult.files();
  const file: File = files[0];

  const stream = file.stream();
  let mimeType: string | false = file.type;
  if (!mimeType || mimeType.trim().length === 0) {
    mimeType = lookup(file.name.split(".").pop() ?? "");
    if (!mimeType) {
      mimeType = "application/octet-stream";
    }
  }

  return new NextResponse(stream, {
    status: 200,
    headers: {
      "content-type": mimeType,
      "content-disposition": `inline; filename="${file.name}"`,
    },
  });
}
