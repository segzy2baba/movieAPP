import useSWR, { SWRResponse } from 'swr';
import fetcher from '@/libs/fetcher';
import { MovieInterface } from '@/types';



interface UseMoviesResponse {
  data: MovieInterface[];
  error: Error;
  isLoading: boolean;
}

const useMovies = (titleQuery: string, genreQuery: string): UseMoviesResponse => {
  let apiUrl = 'http://localhost:8000/movies';
  if (titleQuery || genreQuery) {
    apiUrl += '?';

    if (titleQuery) {
      apiUrl += `title=${titleQuery}&`;
    }

    if (genreQuery) {
      apiUrl += `genre=${genreQuery}&`;
    }

    // Remove trailing ampersand from URL
    apiUrl = apiUrl.slice(0, -1);
  }
  
  const { data, error }: SWRResponse<MovieInterface[], Error> = useSWR(apiUrl, fetcher);
  
  return {
    data: data ?? [],
    error,
    isLoading: !data && !error,
  };
};

export default useMovies;
