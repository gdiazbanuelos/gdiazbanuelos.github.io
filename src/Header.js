import logo from './assets/logo.svg'

const Header = () => {
    return (
        <TopLogo />
    )
}

const TopLogo = () => (
    <div>
        <img src={logo}
            class="max-w-sm h-auto"
            alt=""
        />
    </div>
);

export default Header;