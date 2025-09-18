import Link from "next/link";

export default function StudentPage() {
  return (
    <main>
      <h1>Student Dashboard</h1>
      <p>Select course:</p>
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <Link href="/student/courses/cisc474">
          <button>CISC 474</button>
        </Link>

        <Link href="/student/courses/span300">
          <button>SPAN300</button>
        </Link>
      </div>

      <p style={{ marginTop: "2rem" }}>
      <Link href="/">Back</Link>
      </p>
    </main>

  );
}
