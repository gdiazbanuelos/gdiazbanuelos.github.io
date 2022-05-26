import { BsGithub } from 'react-icons/bs'


const Teriary = () => {
    return (
        <section id="third" className="text-center bg-white rounded-b-md pt-12 px-6 pb-4 sm:py-28 sm:mb-20">
            <header>
                <p className="text-xl mb-3 sm:text-4xl">Technical Projects</p>
                <p className="mb-8">These are some of my personal and college programming projects.</p>
            </header>
            <ul className="flex justify-center flex-col text-white mx-auto mt-0 mb-8 sm:flex-row">
                <li className="bg-[#EFA8B0] rounded-t-lg p-6 sm:rounded-none sm:rounded-l-lg">
                    <a href="https://github.com/gdiazbanuelos/redditParser-Public" className="text-2xl">
                        <BsGithub size="60" className="inline-block hover:bg-black hover:rounded-lg" />
                        <br />
                        <p className="sm:mt-6 hover:underline">Reddit Parser Bot</p>
                    </a>
                </li>
                <li className="bg-[#C79CC8] p-6">
                    <a href="#" className="text-2xl">
                        <BsGithub size="60" className="inline-block hover:bg-black hover:rounded-lg" />
                        <br />
                        <p className="sm:mt-6 hover:underline">C interpreter for Scheme</p>
                    </a>
                </li>
                <li className="bg-[#A89CC8] p-6">
                    <a href="#" className="text-2xl">
                        <BsGithub size="60" className="inline-block hover:bg-black hover:rounded-lg" />
                        <br />
                        <p className="sm:mt-6 hover:underline">OpenGL Graphics Renderer</p>
                    </a>
                </li>
                <li className="bg-[#9BB2E1] p-6">
                    <a href="#" className="text-2xl">
                        <BsGithub size="60" className="inline-block hover:bg-black hover:rounded-lg" />
                        <br />
                        <p className="sm:mt-6 hover:underline">Flask Python API Server</p>
                    </a>
                </li>
                <li className="bg-[#8CC9F0] p-6 rounded-b-lg sm:rounded-none sm:rounded-r-lg">
                    <a href="#" className="text-2xl">
                        <BsGithub size="60" className="inline-block hover:bg-black hover:rounded-lg" />
                        <br />
                        <p className="sm:mt-6 hover:underline">In-Stock Email Alert Bot</p>
                    </a>
                </li>
            </ul>

            <footer>
                <ul className="mb-8 sm:mt-20">
                    <li>
                        <button class="bg-transparent hover:bg-[#F7F7F7] font-semibold py-2 px-4
                            border border-[#DDDDDD] hover:border-transparent rounded-lg w-full
                            sm:w-1/3">
                            <a href="https://github.com/gdiazbanuelos" className="text-xl sm:text-2xl underline">My Github Page</a>
                        </button>
                    </li>
                </ul>
            </footer>
        </section>
    )
}

export default Teriary;