import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Image from "../ImageCard/ImageCard.types";
import { IsLoading, Error, SelectedImage, ApiResponse } from "./App.types";

const API_KEY = "4JcKFUSxydLuYXbtPAqLy8dLWcZKc6cL8k4m_L0SeN0";
const BASE_URL = "https://api.unsplash.com/search/photos";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<IsLoading>(false);
  const [error, setError] = useState<Error>(null);
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(null);

  useEffect(() => {
    if (query === "") return;
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get<ApiResponse>(BASE_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: API_KEY,
          },
        });
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (err) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} query={query} setQuery={setQuery} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      <ImageGallery images={images} onClick={setSelectedImage} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
