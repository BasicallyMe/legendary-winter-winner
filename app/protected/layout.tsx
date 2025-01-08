import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/protected/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/protected/issues">Issues</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
