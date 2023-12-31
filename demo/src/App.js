import React from 'react';
import './App.css';
import Header from './components/Header';
import Poster from './components/Poster';

let loading = false;



const movies = [
  {
    id: 1,
    imgSource: 'https://images.nintendolife.com/b6c9a277682f9/1280x720.jpg',
    title: 'The Super Mario Bros. Movie',
    quote:
      "Not sure if you know who I am, but I'm about to marry a princess and rule the world.",
  },
  {
    id: 2,
    imgSource: 'https://i.ytimg.com/vi/MQZaadHXtvM/maxresdefault.jpg',
    title: 'Spider-Man: Across the Universe',
    quote: 'Can this day get any damn weirder?',
  },
  {
    id: 3,
    imgSource:
      'https://e1.pxfuel.com/desktop-wallpaper/101/147/desktop-wallpaper-john-wick-chapter-4-john-wick-chapter-4-poster.jpg',
    title: 'John Wick: Chapter 4',
    quote: 'How You Do Anything Is How You Do Everything',
  },
  {
    id: 4,
    imgSource:
      'https://m.media-amazon.com/images/M/MV5BMWE4OTM1ZjItYzc5Ni00MDFhLWFiZWEtOWM1ODlkZjQyNzM0XkEyXkFqcGdeQWthc2hpa2F4._V1_QL75_UY281_CR0,0,500,281_.jpg',
    title: 'Oppenheimer',
    quote: 'Is anyone ever going to tell the truth?',
  },
];

const moviesList = movies.map((movieObj) => (
  <Poster
    key={movieObj.id}
    imgSource={movieObj.imgSource}
    title={movieObj.title}
    quote={movieObj.quote}
  />
));

function App(props) {
  return (
    <div className="App">
      <Header />

      {loading && <h2>Loading...</h2>}

      <main>{!loading && moviesList}</main>
    </div>
  );
}

export default App;
