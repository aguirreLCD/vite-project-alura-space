import Tags from "../Tags";
import "./PhotoGallery.css";
import photos from "./photos.json";

import openIcon from "../../assets/open.png";
import favoriteIcon from "../../assets/favorite.png";

function PhotoGallery() {
  return (
    <>
      <section className="photo-gallery">
        <h2 className="photo-gallery-title">Photo Gallery</h2>

        <Tags />

        <ul className="cards">
          {photos.map((photo) => {
            return (
              <>
                <li key={photo.id} className="card">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="card-img"
                  />
                  <p className="card-description">{photo.title}</p>

                  <div className="card-container">
                    <p className="card-info">{photo.credits}</p>
                    <span>
                      <img
                        src={favoriteIcon}
                        alt="favourite icon"
                        className="card-icon"
                      />
                      <img
                        src={openIcon}
                        alt="open modal icon"
                        className="card-icon"
                      />
                    </span>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default PhotoGallery;
