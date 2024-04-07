const PaginationTop = ({ page, setPage, totalItems, itemPerPage }) => {
  const handlePagechange = (str) => {
    if (str === "+") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };
  return (
    <div className="paginate-top">
      <div
        className="navigation-arrow left"
        onClick={() => {
          handlePagechange("-");
        }}
      >
        {"<"}
      </div>
      <div className="page">
        Page {page} sur {Math.ceil(totalItems / itemPerPage)}
      </div>
      <div
        className="navigation-arrow right"
        onClick={() => {
          handlePagechange("+");
        }}
      >
        {">"}
      </div>
    </div>
  );
};

export default PaginationTop;
