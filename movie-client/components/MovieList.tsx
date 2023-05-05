import React, { useState } from 'react';

import { MovieInterface } from '@/types';
import MovieCard from './MovieCard';

interface MovieListProps {
  data: MovieInterface[];
  title: string;
  itemsPerPage: number;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
 let itemsPerPage = 2
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  if (data.length === 0) {
    return null;
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-4 gap-2">
          {getPageData().map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
        
          <ul className="pagination flex justify-center mt-4 bg-white rounded-lg">
            {Array.from(Array(totalPages), (e, i) => {
              const pageNumber = i + 1;
              return (
               <li
                  key={pageNumber}
                  className={`page-item${currentPage === pageNumber ? ' active' : ''}`}
                >
              <button
                type="button"
                className={`page-link text-gray-500 hover:text-gray-700 p-3 ${currentPage === pageNumber ? ' bg-green-500 text-white' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
             </li>
    );
  })}
</ul>

         
        </div>
      </div>
    </div>
  );
};

export default MovieList;
