import { useState } from "react";

function search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = () => {
    props.onChange(search);
  };

  const searchKeydown = (event) => {
    if (event.key === "Enter") {
      changeSearch();
    }
  };

  //   const changeSearch = (event) => {
  //     setSearch(event.target.value);
  //     props.onChange(event.target.value);
  //     };
  // component function ini digantikan dengan onChange={changeSearch} pada button

  return (
    <>
      <div>
        Cari artikel :{" "}
        <input
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={searchKeydown}
        />{" "}
        <button onClick={changeSearch}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian : {search}
      </small>
    </>
  );
}

export default search;
