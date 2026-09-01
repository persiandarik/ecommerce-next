import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();

  console.log(session);

  return (
    <div>
      <h1>Home</h1>

      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
} 