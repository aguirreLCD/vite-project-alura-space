/* eslint-disable react/prop-types */
import "./Tags.css";
import photos from "../PhotoGallery/photos.json";

function Tags({ tags, photoFilter, setItens }) {
  return (
    <div className="tags-container">
      <div className="tags-info">
        <p className="tags-info_title">Filter by tag:</p>
      </div>

      <ul className="tags-list">
        {tags.map((tag) => {
          return (
            <li
              key={tag}
              className="tags-item"
              onClick={() => photoFilter(tag)}
            >
              {tag}
            </li>
          );
        })}
        <li className="tags-item" onClick={() => setItens(photos)}>
          All photos
        </li>
      </ul>
    </div>
  );
}
export default Tags;
