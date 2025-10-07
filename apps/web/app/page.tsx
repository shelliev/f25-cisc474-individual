import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Dashboard!!</h1>
      <p>Choose your role:</p>
      <ul>
        <li><Link href="/student">Student</Link></li>
        <li><Link href="/instructor">Instructor</Link></li>
        <li><Link href="/admin">Admin</Link></li>
      </ul>
    </main>
  );
}


