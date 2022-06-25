import React from "react";
import Topbar from "./Search Form/Topbar";
import SearchSidebar from "./Search Form/searchSidebar";
import SearchFormCards from "./Search Form/SearchFormCards";
// import "../css/Search.css";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState('');
  const [Category, setCategory] = useState([]);

  return (
    <div className="container main__container">
      <div className="row sticky-top">
        <Topbar search={search} setSearch={setSearch} />
      </div>
      <br />
      <div className="row">
        <div className="col-lg-3">
          {" "}
          {/* Inside Search Form */}
          <SearchSidebar Catagory={Category} setCategory={setCategory} />
        </div>
        <div className="col-lg-9">
          {/* Inside Search Form */}
          <SearchFormCards search={search} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
}

export default Search;
