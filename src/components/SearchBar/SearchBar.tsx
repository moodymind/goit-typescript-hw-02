import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";
import "./SearchBar.modules.css";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
