import Link from "next/link";

import Header from "@/app/components/Header";
import { Card } from "@/app/components/Card";

export default async function Home() {
  const request = await fetch('https://dummyjson.com/users');
  const response = await request.json();
  return (
    <>
      <Header />
      <main className="container max-w-screen-2xl pt-2">
        <div className="grid lg:grid-cols-7 md:grid-cols-4 sm:content-center gap-4 pt-4">
          {
            response.users.map((user) => (
              <Link key={user.id} href={`students/${user.id}`}>
                <Card
                  image={`https://i.pravatar.cc/250?img=${user.id}`}
                  width={250}
                  height={250}
                  title={`${user.firstName} ${user.lastName}`}
                  subtitle={user.email}
                />
              </Link>
            ))
          }
        </div>
      </main>
    </>
  );
}
