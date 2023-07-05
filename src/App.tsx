import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFetchCats, getFetchCatsPage } from "./store/feature/catSlice";

function App() {
  const cats = useSelector((state: any) => state.cats.data);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const prevPage = () => {
    setPage(page - 1);
    dispatch(
      getFetchCatsPage({
        page: page,
        limit: 10,
      })
    );
  };

  const nextPage = () => {
    setPage(page + 1);
    dispatch(
      getFetchCatsPage({
        page: page,
        limit: 10,
      })
    );
  };

  useEffect(() => {
    dispatch(getFetchCats());
  }, [dispatch, page]);

  return (
    <div className="App">
      <h1>CATS SPECIES GALLERY</h1>
      <p>
        Images of different cat species from{" "}
        <a href="https://thecatapi.com/">The Cat API</a>
      </p>
      <hr />
      <div className="Gallery">
        {cats.map((cat: any) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                alt={cat.id}
                width={200}
                height={200}
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name.length > 0 ? cat.name : "Unknown"}</h2>
              <h5>Temperament : {cat.temperament}</h5>
              <p>{cat.description.length > 0 ? cat.description : "Unknown"}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Next And Prev Pagination*/}
      <div className="row flex-center">
        <div className="column column-left">
          <div className="pagination">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => prevPage()}
            >
              Prev
            </button>
          </div>
        </div>
        <div className="column column-right">
          <div className="pagination">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => nextPage()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
