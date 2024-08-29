'use client';

import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Type, Users } from "./services/user";
import Loader from "./components/Loader";

export default function Home() {

  const apiUrl = 'https://api.github.com';

  const [input, setInput] = useState('octocat');
  const [user, setUser] = useState<Users>({
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: Type.User,
    site_admin: false,
    name: "",
    company: '',
    blog: '',
    location: '',
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0
});
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async(e: Event) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.get(`${apiUrl}/users/${input}`);
      setUser(res.data);
    } 
    catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setInput(event.target.value);
  }



  return (
      <main className="flex min-h-screen max-w-3xl p-8  flex-col bg-light-grey dark:bg-almost-black">
        <Header/>
        <Search input={input} 
                handleSubmit= {(e: Event) => handleSubmit(e)}
                handleChange={handleChange}
        />
        {loading && <Loader/>}
        {!loading && user && <Profile user = {user} loading={ loading }/>}
      </main>
  );
}
