import "./Tags.css";

function Tags() {
  return (
    <>
      <div className="tags-container">
        <p className="tags-info">Search by tag:</p>
        <ul className="tags-list">
          <li className="tags-item"> Stars</li>
          <li className="tags-item"> Galaxies</li>
          <li className="tags-item"> Moon</li>
          <li className="tags-item"> Planets</li>
        </ul>
      </div>
    </>
  );
}
export default Tags;
