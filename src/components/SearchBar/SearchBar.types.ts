import React from "react";

export type SearchBarProps = {
  onSubmit: (query: string) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
