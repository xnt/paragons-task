import { NextRequest, NextResponse } from "next/server";
import { fileExists } from "../ipfs-utils";

const NOT_FOUND = NextResponse.json(
  { message: "File not found" },
  { status: 404 }
);

const FOUND = NextResponse.json({ message: "File found" }, { status: 200 });

export async function GET(req: NextRequest) {
  const hash = req.nextUrl.searchParams.get("hash");
  if (!hash) return NOT_FOUND;
  const _fileExists = await fileExists(hash);
  if (!_fileExists) return NOT_FOUND;

  return FOUND;
}
