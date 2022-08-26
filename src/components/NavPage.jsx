const NavPage = ({ page, setPage }) => {
  return (
    <div className="lg:pb-5 lg:mt-5 lg:flex lg:justify-between lg:content-center">
      <span className="lg:p-3 lg:border-b lg:border-blue-800">
        Página {page}
      </span>
      <button
        className="mt-5 bg-blue-800 lg:hover:bg-blue-900 p-3"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Siguiente página
      </button>
    </div>
  );
};

export default NavPage;
