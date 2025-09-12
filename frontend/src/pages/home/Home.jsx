import HeroSlider from "../../components/HeroSlider/HeroSilder";

function Home() {
  const featuredMovies = [
  {
    id: 1,
    title: "Inception",
    overview: "A thief who steals corporate secrets through dream-sharing technology...",
 poster: "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space...",
    poster: "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon...",
    poster: "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 5.0,
  },
];

  return (
   <div className="home-page text-white bg-gray-900 p-4">
  {/* Hero Slider */}
  <section className="mb-8">
   <HeroSlider movies={featuredMovies} />
  </section>

  {/* Latest Movies */}
  <section className="mb-8 px-6">
    <h2 className="text-2xl font-bold mb-4">Latest Movies</h2>
    <p>hello</p>
  </section>

  {/* Top Rated */}
  <section className="mb-8 px-6">
    <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
  <p>hello</p>
  </section>

  {/* Blogs */}
  <section className="mb-8 px-6">
    <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
     <p>hello</p>
  </section>

  {/* Reviews */}
  <section className="mb-8 px-6">
    <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
   <p>hello</p>
  </section>
</div>

  )
}

export default Home
