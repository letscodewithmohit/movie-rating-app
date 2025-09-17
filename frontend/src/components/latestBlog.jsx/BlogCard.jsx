const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden ">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-3">
          {blog.excerpt}
        </p>
        <button className="text-blue-500 font-medium hover:underline">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
