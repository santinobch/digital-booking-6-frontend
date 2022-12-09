import { getCategories, getFeatures } from "../services";
import { useEffect, useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return categories;
}

function useFeatures() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    getFeatures().then((data) =>
      setFeatures(data.map((feat) => ({ value: feat.id, label: feat.nombre })))
    );
  }, []);

  return features;
}

export { useCategories, useFeatures };
