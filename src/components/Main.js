import pfp from '../assets/gus.png'
import pdf from '../assets/gdiazResume.pdf'
import { BsDownload } from 'react-icons/bs'


const Main = () => {
    return (
        <div id="main" className="bg-white pt-12 px-6 pb-6 mb-8 sm:mb-0 rounded-md 
        sm:rounded-none sm:px-20 sm:py-52">
            <section className="flex flex-col-reverse text-center sm:flex-row sm:text-left">
                <div className="sm:w-2/3">
                    <header className="mb-8">
                        <p className="text-3xl sm:text-5xl">Hi, I am Gus!</p>
                    </header>
                    <br />
                    <p className="mb-8 sm:text-2xl">I am a Tools &amp; Automation Engineer at Crate &amp; Barrel.</p>
                    <p className="mb-8 sm:text-2xl">I graduated from Carleton College with a major in Computer Science. <br /><br />
                        In my courses I have built various websites, databases, and games.
                        I have built and maintained personal servers and websites to host various projects.
                        I also like to find and help contribute to community driven video game project mods on Github.
                    </p>
                    <ul>
                        <li>
                            <button class="hover:bg-[#F7F7F7] font-semibold bg-gray-300
                                  py-2 px-4 border border-[#DDDDDD] hover:border-transparent rounded
                                  w-5/6 sm:w-44">
                                <a href={pdf} target="_blank" className="text-xl" rel='noopener noreferrer'>
                                    Resume &nbsp; <BsDownload size="25" className="inline-block animate-bounce" />
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
                <span className="flex items-center justify-center">
                    <img src={pfp} alt="Picture of me!" className="mb-8 mx-auto rounded-full border w-48 sm:w-80 sm:ml-20"></img>
                </span>
            </section>
        </div>
    )
}

export default Main;