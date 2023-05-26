import Cards from "../Cards";
import Tags from "../Tags";
import "./PhotoGallery.css";
import photos from "./photos.json";

function PhotoGallery() {
  return (
    <section className="photo-gallery">
      <h2 className="photo-gallery-title">Photo Gallery</h2>

      <Tags />
      <Cards itens={photos} />
    </section>
  );
}

export default PhotoGallery;
