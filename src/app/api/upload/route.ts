import { NextRequest, NextResponse } from "next/server";
import { uploadFile } from "../ipfs-utils";

const NO_FILE_RESPONSE = NextResponse.json(
  { error: "No file" },
  { status: 400 }
);

export async function POST(request: NextRequest) {
  if (request === null || request.body === null) return NO_FILE_RESPONSE;

  const formData = await request.formData();
  const fileContents = formData.get("file");
  if (!fileContents) {
    return NO_FILE_RESPONSE;
  }

  const result = await uploadFile(fileContents as File);

  return NextResponse.json({
    hash: result,
  });
}
