import { useContext, useEffect } from "react";
import { SearchContext } from "../../Context/Search";
import { Link } from "react-router-dom";
import Card from "../card/Card";

const SearchProducts = () => {
  const { search, searchResults, setSearchResults } = useContext(SearchContext);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!search.trim()) return;
      try {
        const res = await fetch(
          `http://localhost:5000/products?search=${search}`
        );
        const data = await res.json();
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );

        setSearchResults(filtered);
      } catch (err) {
        console.error(err);
        setSearchResults([]);
      }
    };

    fetchProducts();
  }, [search, setSearchResults]);

  return (
    <div className="p-10 mx-auto pt-24">
      <h1 className="text-2xl font-bold mb-6">Search results for "{search}"</h1>

      {searchResults.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="w-full grid grid-rows-2 grid-cols-4 gap-10 overflow-hidden">
          {searchResults.map((product, index) => (
            <Card key={product._id} product={product} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
