import React, { useMemo, useState } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
// import Pagination from "../../components/pagination/Pagination";

/**
 * NOTE:
 * - For now we use a static array (dummy). Make sure IDs are unique.
 * - Later swap `moviesData` with API data and adjust pagination logic to use API pages.
 */

const moviesData = [
  { id: 101, title: "Inception", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 4.8, year: 2010 },
  { id: 102, title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", rating: 4.9, year: 2014 },
  { id: 103, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 5.0, year: 2008 },
  { id: 104, title: "The Batman", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating: 4.2, year: 2022 },
  { id: 105, title: "Oppenheimer", poster: "https://image.tmdb.org/t/p/w500/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg", rating: 4.7, year: 2023 },
  { id: 106, title: "Barbie", poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", rating: 4.2, year: 2023 },
  { id: 107, title: "Spider-Man: Across the Spider-Verse", poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", rating: 4.9, year: 2023 },
  { id: 108, title: "Avatar: The Way of Water", poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", rating: 4.5, year: 2022 },
  { id: 109, title: "Guardians of the Galaxy Vol. 3", poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", rating: 4.8, year: 2023 },
   { id: 110, title: "The Batman", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating: 4.2, year: 2022 },
  { id: 111, title: "Oppenheimer", poster: "https://image.tmdb.org/t/p/w500/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg", rating: 4.7, year: 2023 },
  { id: 112, title: "Barbie", poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", rating: 4.2, year: 2023 },
  { id: 113, title: "Spider-Man: Across the Spider-Verse", poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", rating: 4.9, year: 2023 },
  { id: 114, title: "Avatar: The Way of Water", poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", rating: 4.5, year: 2022 },
  { id: 115, title: "Guardians of the Galaxy Vol. 3", poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", rating: 4.8, year: 2023 },
   { id: 116, title: "Inception", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 4.8, year: 2010 },
  { id: 117, title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", rating: 4.9, year: 2014 },
  { id: 118, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 5.0, year: 2008 },
  { id: 119, title: "The Batman", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating: 4.2, year: 2022 },
  { id: 120, title: "Oppenheimer", poster: "https://image.tmdb.org/t/p/w500/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg", rating: 4.7, year: 2023 },
  { id: 121, title: "Barbie", poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", rating: 4.2, year: 2023 },
  { id: 122, title: "Spider-Man: Across the Spider-Verse", poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", rating: 4.9, year: 2023 },
  { id: 123, title: "Avatar: The Way of Water", poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", rating: 4.5, year: 2022 },
  { id: 124, title: "Guardians of the Galaxy Vol. 3", poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", rating: 4.8, year: 2023 },
   { id:125, title: "The Batman", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating: 4.2, year: 2022 },
  { id: 126, title: "Oppenheimer", poster: "https://image.tmdb.org/t/p/w500/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg", rating: 4.7, year: 2023 },
  { id: 127, title: "Barbie", poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", rating: 4.2, year: 2023 },
  { id: 128, title: "Spider-Man: Across the Spider-Verse", poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", rating: 4.9, year: 2023 },
  { id: 129, title: "Avatar: The Way of Water", poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", rating: 4.5, year: 2022 },
  { id: 130, title: "Guardians of the Galaxy Vol. 3", poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", rating: 4.8, year: 2023 },
  // add more unique items if you need to test pagination
];

const MoviesPage = () => {
  // UI state
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [sortBy, setSortBy] = useState("popular"); // or "rating", "year"
  // const [currentPage, setCurrentPage] = useState(1);

  // const moviesPerPage = 8;

  // filter + sort (memoized)
  const filtered = useMemo(() => {
    let list = moviesData;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((m) => m.title.toLowerCase().includes(q));
    }

    if (yearFilter) {
      list = list.filter((m) => String(m.year) === String(yearFilter));
    }

    if (sortBy === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "year") {
      list = [...list].sort((a, b) => b.year - a.year);
    } // else keep original order (popular)

    return list;
  }, [search, yearFilter, sortBy]);

  // pagination calculations
  // const totalPages = Math.ceil(filtered.length / moviesPerPage) || 1;
  // const start = (currentPage - 1) * moviesPerPage;
  // const pageMovies = filtered.slice(start, start + moviesPerPage);

  // reset page when filters/search change
  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [search, yearFilter, sortBy]);

  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-10">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">All Movies</h2>

      {/* Search & Controls */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
        <div className="flex gap-3 w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700"
            aria-label="Search movies by title"
          />

          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="px-3 py-2 rounded bg-gray-800 border border-gray-700"
            aria-label="Filter by year"
          >
            <option value="">All years</option>
            {/* generate unique years from data */}
            {[...new Set(moviesData.map(m => m.year))].sort((a,b)=>b-a).map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-300">Sort:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 rounded bg-gray-800 border border-gray-700"
          >
            <option value="popular">Popular</option>
            <option value="rating">Top rating</option>
            <option value="year">Latest</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-10">
            No movies found. Try clearing filters.
          </div>
        ) : (
          filtered.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>

      {/* Pagination */}
      {/* <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(p) => setCurrentPage(p)} /> */}
    </div>
  );
};

export default MoviesPage;
