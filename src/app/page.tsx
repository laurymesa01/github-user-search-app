import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header/>
      <Search/>
      <Profile/>
    </main>
  );
}
