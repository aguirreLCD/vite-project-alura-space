import { useState } from "react";
import Cards from "../Cards";
import Tags from "../Tags";
import "./PhotoGallery.css";
import photos from "./photos.json";

function PhotoGallery() {
  const [itens, setItens] = useState(photos);

  const tags = [...new Set(photos.map((tagValue) => tagValue.tag))];

  const photoFilter = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(newPhotos);
  };

  return (
    <section className="photo-gallery">
      <Tags tags={tags} photoFilter={photoFilter} setItens={setItens} />
      <h2 className="photo-gallery-title">Photo Gallery</h2>
      <Cards itens={itens} />
    </section>
  );
}

export default PhotoGallery;
