const Shimmer = () => {
  return (
    <div className="shimmere-container">
      {Array(20).fill(" ").map((e) => (
        <div className="shimmer">
          <h1></h1>
          <p></p>
          <p></p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
