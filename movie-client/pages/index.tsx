import { useState } from 'react';
import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useInfoModalStore from "@/hooks/useInfoModalStore";

import useMovieList from '@/hooks/useMovieList';
import TitleSearchInput from '@/components/TitleSearchInput';
import GenreSelect from '@/components/GenreSelect';



export default function Home() {

  const [titleQuery, setTitleQuery] = useState<string>('');
  const [genreQuery, setGenreQuery] = useState<string>('');

  const { data: movies = [] } = useMovieList(titleQuery, genreQuery);
  const {isOpen, closeModal} = useInfoModalStore();

 

  const handleTitleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleQuery(event.target.value);
  };

  const handleGenreSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenreQuery(event.target.value);
  };
   
  return (
    <>
    <InfoModal visible={isOpen} onClose={closeModal} />
    <Navbar/>
    <Billboard />
    <div className="pb-40 text-green-500">
      <div className='py-3  mt-2 flex flex-row justify-center '>
      <GenreSelect value={genreQuery} onChange={handleGenreSelect} />
      <TitleSearchInput value={titleQuery} onChange={handleTitleSearch} />
      
      
      </div>
    <MovieList title="Trending Now" data={movies} />
    </div>
   </>
  )
}
