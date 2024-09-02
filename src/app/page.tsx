'use client';

import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Type, Users } from "./services/user";
import Loader from "./components/Loader";
import { notFound } from "next/navigation";


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
    following: 0,
    created_at: new Date().toISOString()
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e?: Event) => {
    if (e) {
      e.preventDefault();
    }
    try {
      setLoading(true);
      const res = await axios.get(`${apiUrl}/users/${input}`);
      setUser(res.data);
      setError(false);
    } 
    catch (error: any) {
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    handleSubmit()
  }, [])
  


  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setInput(event.target.value);
  }

  

  return (
      <main className="px-8 md:px-[10%] lg:px-[15%] xl:px-[25%] flex flex-col min-h-screen bg-light-grey dark:bg-almost-black">
        <div className="">
          <Header/>
          <Search input={input} 
                  handleSubmit= {(e: Event) => handleSubmit(e)}
                  handleChange={handleChange}
                  error = {error}
          />
          {loading && <Loader/>}
          {!loading && user && <Profile user = {user} />}
        </div>

      </main>
  );
}

