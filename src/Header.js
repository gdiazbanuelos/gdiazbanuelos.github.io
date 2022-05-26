import logo from './assets/logo.svg'

const Header = () => {
    return (
        <header id="header" className="text-center pt-16 sm:my-20">
        <span>
          <img src={logo} className="mb-6 my-0 mx-auto animate-bounce"></img>
        </span>
        <p className="text-5xl sm:text-6xl xl:text-7xl text-white mb-4">Gustavo Diaz Banuelos</p>
        <p className="text-white mb-8 sm:text-2xl xl:text-3xl">Tools &amp; Automation Engineer at Crate &amp; Barrel
          <br /><br/>
          <a href="mailto:gdiazbanuelos@gmail.com" className="underline hover:no-underline">gdiazbanuelos@gmail.com</a>
          <br />
          <a href="https://github.com/gdiazbanuelos" className="underline hover:no-underline">github.com/gdiazbanuelos</a>
        </p>
      </header>
    )
}


export default Header;