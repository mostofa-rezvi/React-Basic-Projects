const Feed = ({ title, link, date }) => {
  let formatted = { day: "numeric", month: "long", year: "numeric" };
  let articleDate = new Date(date).toLocaleDateString("en-GB", formatted);

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        <h3 className="text-2xl mb-1 mb-1">
          {title}
        </h3>
        <p>{articleDate}</p>
      </a>
    </>
  );
};

export default Feed;
