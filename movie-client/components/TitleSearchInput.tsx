import React from 'react';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleSearchInput: React.FC<Props> = ({ value, onChange }) => (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type="text"
        // id={id}
        className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-80
        text-md
      text-white
      bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
        placeholder=" " 
      />
      <label 
        // htmlFor={id} 
        className="
        absolute 
        text-md
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      ">TitleSearch</label>
    </div>
//   <input type="text" placeholder="Search by title" value={value} onChange={onChange} />
);

export default TitleSearchInput;
