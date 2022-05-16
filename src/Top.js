import logo from './assets/logo.svg'

const Top = () => {
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

export default Top;