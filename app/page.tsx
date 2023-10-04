import Image from "next/image";
import { Suspense } from "react";
import ClientComponent from "./ClientComponent";
import Loading from "./loading";
import ServerComponent from "./ServerComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </main>
  );
}
