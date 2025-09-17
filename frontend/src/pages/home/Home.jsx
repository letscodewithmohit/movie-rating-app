import LatestMovies from "../../components/latestMovies/LatestMovies";
import TopRatedMovies from "../../components/top-rated-movies/TopRatedMovies";
import HeroSlider from "../../components/HeroSlider/HeroSilder";
import LatesdBlog from "../../components/latestBlog.jsx/LatestBlog";
import RecentReviews from "../../components/recent-viwed/RecentReviews ";
import TrendingMoviesWidget from "../../components/trending-movies-widget/TrendingMoviesWidget";
import MovieOfTheDay from "../../components/movie-of-day/MovieOfTheDay";


function Home() {
  const featuredMovies = [
    {
      id: 1,
      title: "Inception",
      overview:
        "A thief who steals corporate secrets through dream-sharing technology...",
      poster:
        "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Interstellar",
      overview: "A team of explorers travel through a wormhole in space...",
      poster:
        "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 4.9,
    },
    {
      id: 3,
      title: "The Dark Knight",
      overview:
        "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon...",
      poster:
        "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 5.0,
    },
     {
      id: 1,
      title: "Inception",
      overview:
        "A thief who steals corporate secrets through dream-sharing technology...",
      poster:
        "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Interstellar",
      overview: "A team of explorers travel through a wormhole in space...",
      poster:
        "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 4.9,
    },
  
  ];
  const LatestMoviesArray = [
    {
      id: 1,
      title: "Oppenheimer",
      poster: "https://image.tmdb.org/t/p/w500/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
      rating: 4.7,
    },
    {
      id: 2,
      title: "Barbie",
      poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      rating: 4.2,
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Avatar: The Way of Water",
      poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      rating: 4.5,
    },
    {
      id: 5,
      title: "Guardians of the Galaxy Vol. 3",
      poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      rating: 4.8,
    },
  ];
  const TopRatedMoviesArray = [
    {
      id: 1,
      title: "Schindler’s List",
      poster: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      title: "The Godfather",
      poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      rating: 4.9,
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 4.9,
    },
    {
      id: 4,
      title: "12 Angry Men",
      poster: "https://image.tmdb.org/t/p/w500/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
      rating: 4.8,
    },
    {
      id: 5,
      title: "Schindler’s List",
      poster: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
      rating: 4.8,
    },
  ];

  const blogArray = [
    {
      id: 1,
      title: "The Future of Sci-Fi Movies",
      excerpt:
        "Science fiction has always pushed boundaries. Here’s what’s coming next...",
      image: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
    },
    {
      id: 2,
      title: "10 Must-Watch Thrillers",
      excerpt:
        "If you love suspense, these 10 thrillers will keep you on edge...",
      image: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
    },
    {
      id: 3,
      title: "Behind the Scenes of Inception",
      excerpt:
        "Christopher Nolan’s masterpiece redefined dreams and cinema itself...",
      image: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
    },
  ];

  const dummyReviews = [
    {
      id: 1,
      movieTitle: "Inception",
      rating: 4,
      comment: "Amazing concept and visuals!",
      user: "John Doe",
    },
    {
      id: 2,
      movieTitle: "Interstellar",
      rating: 5,
      comment: "Mind-blowing science and emotions.",
      user: "Jane Smith",
    },
    {
      id: 3,
      movieTitle: "The Dark Knight",
      rating: 5,
      comment: "Best superhero movie ever made.",
      user: "Bruce Wayne",
    },

    {
     id : 4,
     movieTitle : "stranger things",
     rating :4,
     comment : "BEST Webseries",
     user : "Eleven"
    },

  ];

  const songs =[
    "Song 1 - Theme",
    "Song 2 - Background",
    "Song 3 - Title Track",
     "Song 1 - Theme",
    "Song 2 - Background",
    "Song 3 - Title Track",
     "Song 1 - Theme",
    "Song 2 - Background",
    "Song 3 - Title Track",
  ]
  const DayMovie = featuredMovies[0];
  return (
    <div className="home-page text-white bg-gray-900 p-4">
      {/* Hero Slider */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
        <div className="md:col-span-2">
          <HeroSlider movies={featuredMovies} />
        </div>
        <div className="flex flex-col justify-beyween " >
          <TrendingMoviesWidget movies={featuredMovies}  />
         
        </div>
      </section>
      {/* Movie of the Day with Songs */}
<section className="mb-8">
  <MovieOfTheDay movie={DayMovie} songs={songs} />
</section>


      {/* Latest Movies */}
      <section className="mb-8 ">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          Latest Movies
        </h2>
        <LatestMovies movies={LatestMoviesArray} />
      </section>

      {/* Top Rated */}
      <section className="mb-8 ">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Top Rated</h2>
        <TopRatedMovies movies={TopRatedMoviesArray} />
      </section>

      {/* Blogs */}
      <section className="mb-8 ">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          Latest Blogs
        </h2>

        <LatesdBlog blogs={blogArray} />
      </section>

      {/* Reviews */}
      <section className="mb-8 ">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          Recent Reviews
        </h2>
        <RecentReviews reviews={dummyReviews}/>
      </section>
    </div>
  );
}

export default Home;
