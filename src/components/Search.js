import React, { useEffect } from "react";
import Topbar from "./Search Form/Topbar";
import SearchSidebar from "./Search Form/searchSidebar";
import SearchFormCards from "./Search Form/SearchFormCards";

import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [Category, setCategory] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    location: "",
    addressTo: "",
    topic: "",
  });
  const [priceRange, setPriceRange] = useState([0, 0]);
  console.log("Category", Category);
  useEffect(() => {
    console.log({ filter });
  }, [filter]);

  return (
    <>
      <div className="container main__container">
        <div className="row sticky-top">
          <Topbar search={search} setSearch={setSearch} />
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 col-12 col-sm-5">
            {" "}
            {/* Inside Search Form */}
            <SearchSidebar
              Catagory={Category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          <div className="col-lg-9 col-12 col-sm-7">
            {/* Inside Search Form */}
            <SearchFormCards
              search={search}
              setSearch={setSearch}
              Catagory={Category}
              setCategory={setCategory}
              priceRange={priceRange}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
