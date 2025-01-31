

export const GifGrid = ({category}) => {
    
    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=2d94E1ZPaCGzfhRrQmVsP6qmN1fNlHBT&q=${category}&limit=20`;
        const resp = await fetch(url);
        console.log(resp);
    }

    getGifs();
    
  return (
    <>
      <h3>{category}</h3>
    </>
  )
}

