function Tags({ tags }) {
    return (
      <div className="lodg-tags">
        {tags.map((tag, index) => (
          <p  key={index} className="tags">{tag}</p>
        ))}
      </div>
    );
  }
  
  export default Tags;