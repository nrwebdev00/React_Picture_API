import { useRef } from 'react';
export default function SearchBar({ onSubmit }){

  const searchTerm = useRef();

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    const term = searchTerm.current?.value
    onSubmit(term);
    };

  return(
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input ref={searchTerm} type="text" />
        <button type="submit" >Search</button>
      </form>
    </div>
  );
}