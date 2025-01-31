
export const GifItem = ( title, url, id ) => {
    console.log("id", id);
    console.log("url", url);
    console.log("title", title);
  return (
    <div className="card">
      <img src={url} alt={title}/>
    </div>
  )
}

