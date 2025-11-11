

export default function Movies() {
 const data =
        [
  {
    "Title": "Salaar",
    "Year": "2023",
    "Runtime": "175 min",
    "Poster": "https://i.pinimg.com/200x/78/07/4a/78074a8c019b5c32b93b2d8983a086a6.jpg"
  },
  {
    "Title": "KGF Chapter 3",
    "Year": "2028",
    "Runtime": "COMING SOON!",
    "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKIsxegkcSWfOBlLog_dVwC1vm3E-1e5GDg&s"
  },
  {
    "Title": "Avengers: Doomsday",
    "Year": "2026",
    "Runtime": "COMING SOON!",
    "Poster": "https://preview.redd.it/avengers-doomsday-poster-featuring-the-confirmed-cast-so-v0-b8a68egs9n2f1.jpeg?width=640&crop=smart&auto=webp&s=6ee560e53f9d0b265abdf63d48ace4964d3c4555"
  },
  {
    "Title": "John Wick",
    "Year": "2014",
    "Runtime": "101 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
  },
  {
    "Title": "The Notebook",
    "Year": "2004",
    "Runtime": "123 min"
  }
]
    
  return (
    <div>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Poster</th>
      <th scope="col">Runtime</th>
      <th scope="col">Year</th>
    </tr>
  </thead>
  <tbody>
   
   {data.map(
     (i)=>(
     <tr>
        <td>{i.Title}</td>
        <td><img src={i.Poster}/></td>
        <td>{i.Runtime}</td>
        <td>{i.Year}</td>
     </tr>
     )
    )
}
    
  </tbody>
</table>


    </div>
  )
}
