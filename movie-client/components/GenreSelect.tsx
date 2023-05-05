import React from 'react';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const GENRES = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Thriller',
];

const GenreSelect: React.FC<Props> = ({ value, onChange }) => (
    <>
    <select value={value} onChange={onChange} className="  py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="">Select a genre</option>
    {GENRES.map((genre) => (
        <option key={genre} value={genre}>
        {genre}
        </option>
    ))}
</select>
  </>
  
    
//   <select value={value} onChange={onChange}>
//     <option value="">Select a genre</option>
//     {GENRES.map((genre) => (
//       <option key={genre} value={genre}>
//         {genre}
//       </option>
//     ))}
//   </select>
);

export default GenreSelect;
