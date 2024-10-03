"use client";

import React, { useState, useEffect, KeyboardEvent } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { Input } from '@/components/ui/input'

interface Suggestion {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

interface AutocompleteInputProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ onLocationSelect }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "initMap",
    requestOptions: {},
    debounce: 300,
  });

  const [focusedIndex, setFocusedIndex] = useState(-1);

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  useEffect(() => {
    if (status !== "OK") {
      setFocusedIndex(-1);
    }
  }, [status]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setFocusedIndex(-1);
  };

  const handleSelect = (suggestion: Suggestion) => {
    const { description } = suggestion;
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      //console.log("📍 Coordinates: ", { lat, lng });
      onLocationSelect({ lat, lng });
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (status !== "OK") return;
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    }
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }
    else if (e.key === "Enter") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < data.length) {
        handleSelect(data[focusedIndex]);
      }
    }
  };

  const renderSuggestions = () =>
    data.slice(0, 3).map((suggestion: Suggestion, index: number) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;
      const isFocused = index === focusedIndex;
      const borderClass = index === 1 ? "border-t border-b" : "";
      const focusedClass = isFocused ? "bg-gradient-to-r from-pink-600 to-amber-400 text-white" : "";
      return (
        <li
          key={place_id}
          onClick={() => handleSelect(suggestion)}
          className={`px-4 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-pink-600 hover:to-amber-400 hover:text-white ${borderClass} ${focusedClass}`}
        >
          <span className="font-bold text-lg">{main_text}</span>, <span>{secondary_text}</span>
        </li>
      );
    });
  
  return (
    <div ref={ref}>
      <Input
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        disabled={!ready}
        placeholder={"Enter your search location (e.g., Williamsburg or Central Park)"}
        className="w-full text-lg h-12 bg-background/80"
      />
      {status === "OK" && <ul className="absolute z-10 bg-background rounded-md w-full max-h-48 overflow-y-auto border mt-1">
        {renderSuggestions()}
      </ul>}
    </div>
  )
};

export default AutocompleteInput;