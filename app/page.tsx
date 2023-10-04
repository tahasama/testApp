import { Suspense } from "react";
import ServerComponent from "./ServerComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ServerComponent />
    </main>
  );
}
