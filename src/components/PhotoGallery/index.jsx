import Cards from "../Cards";
import Tags from "../Tags";
import "./PhotoGallery.css";
import photos from "./photos.json";

function PhotoGallery() {
  return (
    <section className="photo-gallery">
      <Tags />
      <h2 className="photo-gallery-title">Photo Gallery</h2>
      <Cards itens={photos} />
    </section>
  );
}

export default PhotoGallery;
