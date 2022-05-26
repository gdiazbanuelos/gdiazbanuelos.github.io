
const Nav = () => {
  return (
    <nav id="nav" className="hidden sm:block text-center bg-[#F7F7F7]
          rounded-t-md py-6 sticky text-xl">
      <ul className="mx-28">
        <li className="inline-block w-1/4">
          <a href="#main" className="">Introduction</a>
        </li>
        <li className="inline-block w-1/4">
          <a href="#second" className="">Websites</a>
        </li>
        <li className="inline-block w-1/4">
          <a href="#third" className="">Projects</a>
        </li>
        <li className="inline-block w-1/4">
          <a href="#footer" className="">Contact Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;