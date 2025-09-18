import Link from "next/link";

export default function AdminPage() {
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Manage users, roles, and settings.</p>
      <Link href="/">← Back home</Link>
    </main>
  );
}
