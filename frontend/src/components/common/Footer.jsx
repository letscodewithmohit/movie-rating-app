
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">MovieHub</h2>
          <p className="text-sm">
            Discover, rate, and explore the world of movies.  
            Your one-stop platform for film lovers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/movies" className="hover:text-yellow-400">Movies</a></li>
            <li><a href="/blogs" className="hover:text-yellow-400">Blogs</a></li>
            <li><a href="/reviews" className="hover:text-yellow-400">Reviews</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/latest" className="hover:text-yellow-400">Latest Releases</a></li>
            <li><a href="/top-rated" className="hover:text-yellow-400">Top Rated</a></li>
            <li><a href="/trending" className="hover:text-yellow-400">Trending</a></li>
            <li><a href="/movie-of-day" className="hover:text-yellow-400">Movie of the Day</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Twitter</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MovieHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
