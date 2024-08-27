import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";
import { UserProvider } from "./context/Context";
import { AppProps } from "next/app";

export default function Home({Component, pageProps}: AppProps) {
  return (
    <UserProvider>
      <main className="flex min-h-screen p-8  md:p-16 flex-col lg:px-48 xl:px-64">
        <Header/>
        <Search/>
        <Profile/>
      </main>
    </UserProvider>
  );
}
