'use client';

import { Users } from "../services/user";

interface Props {
    input: string;
    handleSubmit: any;
    handleChange: any;
    error: any
}
export default function Search(props: Props) {

    const {input, handleSubmit, handleChange, error} = props;

    // const handleKeyPress = (event: { key: any; }) => {
    //     if (event.key === "Enter") handleSearch();
    // }
    

    return (
        <form className="w-full mx-auto" onSubmit={handleSubmit}>   
            <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative cursor-pointer">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/>
                    </svg>
                </div>
                <input  type="search" 
                        id="default-search" 
                        className="block w-full  ps-10 input-search" 
                        placeholder="Search GitHub username…" 
                        required 
                        onChange={handleChange}
                        value={input ? input : ""}
                        onKeyDown={ (e) => e.key === 'Enter' ? handleSubmit : ''}
                        />
                {error && <span className='absolute end-32 bottom-4 text-[15px] text-[#F74646] '>No results</span>}    

                <button type="submit" 
                        className="absolute end-2.5 bottom-2.5 button"
                        onClick={handleSubmit}>
                            Search
                </button>
            </div>
        </form>

    );
}