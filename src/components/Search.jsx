import { useState } from "react";

function search(props) {
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    setSearch(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <>
      <div>
        Cari artikel : <input onChange={changeSearch} />
      </div>
      <small>Ditemukan data dengan pencarian {search}</small>
    </>
  );
}

export default search;
