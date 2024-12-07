import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        className="flex sticky shadow-md top-0 z-20  p-5 text-info justify-between"
        style={{ background: "#14131a" }}
      >
        <div></div>
        <div className="flex items-center gap-5">
          <Link to={"/Contact"}> 
          <button
            disabled=""
            className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-blue-800 text-highlight text-xs py-2 px-4"
          >
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
