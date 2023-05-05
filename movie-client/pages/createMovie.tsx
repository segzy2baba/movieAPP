import Input from '@/components/Input'
import React from 'react'
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GenreSelect from '@/components/GenreSelect';

export default function createMovie() {

  


    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [genre, setGenre] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenreSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGenre(event.target.value);
      };

    const handleCreate = useCallback(async () => {
       
            try {
                setLoading(true);
                await axios.post('http://localhost:8000/movies', {
                  title,
                  description,
                  thumbnailUrl,
                  genre
                });
               
                router.push('/');
              } catch (error) {
                setLoading(true);
                const errorMessage = error.response?.data?.message ?? 'Something went wrong!';
                setError(errorMessage)
                  
                // alert(`Error: ${errorMessage}`);
            } finally {
                setLoading(false); // set loading back to false after API call is complete
              }
      }, [title, description, thumbnailUrl, genre]);


  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black w-full h-full lg:bg-opacity-50">
      <nav className="px-12 py-5">
        <Link  href="/">
        <img src="/images/1.png" className="h-12" alt="Logo" />
        </Link>
      </nav>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <span className='text-red-300'>
                {error}
            </span>
          <h2 className="text-white text-4xl mb-8 font-semibold">
            Create Movie
          </h2>
          <div className="flex flex-col gap-4">

          <Input
                id="title"
                type="text"
                label="Movie Title"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)} 
                />

               <Input
                  id="name"
                  type="text"
                  label="Movie thumbnailUrl"
                  value={thumbnailUrl}
                  onChange={(e: any) => setThumbnailUrl(e.target.value)} 
                />
           
               
                 <Input
                type="text" 
                id="description" 
                label="Description" 
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}  
                /> 

             <GenreSelect value={genre} onChange={handleGenreSelect} />

          </div>
          <button onClick={handleCreate }  className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
          {loading ? 'Loading ...' : 'Create'}
          </button>
        
         
        </div>
      </div>
    </div>
  </div>
  )
}
