import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    // redirect("/api/auth/signin");
    return (
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        user not logged in
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      user logged in
    </main>
  );
}
