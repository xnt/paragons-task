import Link from "next/link";

const BUTTONS = [
  {
    label: "Check my balance",
    href: "/check-balance",
  },
  {
    label: "Upload a file",
    href: "/upload-file",
  },
  {
    label: "Retreive a file",
    href: "/retreive-file",
  },
] as const;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-sm gap-4">
      <h1 className="text-4xl font-bold text-center">Welcome!</h1>
      <p className="text-center">What would you like to do today?</p>
      <ul className="text-center flex flex-row gap-10 mt-4">
        {BUTTONS.map(({ label, href }, index) => (
          <li className="button-primary" key={index}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
