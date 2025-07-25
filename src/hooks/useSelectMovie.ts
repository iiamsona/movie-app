const useSelectMovie = () => {
    const selectMovie = (id: string) => {
      sessionStorage.setItem("selectedMovie", id);
      window.dispatchEvent(new Event("movieSelected"));
    };
  
    return selectMovie;
  };
  
  export default useSelectMovie;
  