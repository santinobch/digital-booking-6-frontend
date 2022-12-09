import { useEffect, useState } from "react";

import { getCategories } from "../services";

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return categories;
}

export { useCategories };
