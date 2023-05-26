import "./Tags.css";

function Tags() {
  return (
    <div className="tags-container">
      <div className="tags-info">
        <p className="tags-info_title">Search by tag:</p>
      </div>

      <ul className="tags-list">
        <li className="tags-item">Stars</li>
        <li className="tags-item">Galaxies</li>
        <li className="tags-item">Moon</li>
        <li className="tags-item">Planets</li>
      </ul>
    </div>
  );
}
export default Tags;
