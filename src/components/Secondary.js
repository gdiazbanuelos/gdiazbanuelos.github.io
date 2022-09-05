import yoru from '../assets/yoruyomi.webp'
import jisho from '../assets/jisho.webp'


const Secondary = () => {
    return (
        <section id="second" className="text-center bg-white border pt-12 px-6 pb-4 sm:py-24">
            <header>
                <p className="text-xl mb-3 sm:mb-12 sm:text-5xl">My Other Personal Websites</p>
            </header>
            <ul className="flex justify-center flex-col xl:flex-row mb-8 xl:mx-20 ">
                <li className="sm:mt-8 sm:w-1/2 mx-auto">
                    <a href="https://jp.gusdiaz.com" className="text-[#0000EE] sm:text-3xl ">jp.gusdiaz.com</a>
                    <br /><br />
                    <span className="flex justify-center">
                        <img src={yoru} alt="Japanese Kanji Yoru" className="pb-3 sm:w-[256px]" />
                    </span>
                    <br /><br />
                    <h3 className="mb-3 sm:text-2xl">Yoru Yomi</h3>
                    <p className="sm:mx-20 sm:text-xl">Textbooks don't teach the fundamentals, so I want to help others jump-start their Japanese learning.
                        Start learning Japanese from scratch!
                    </p>
                </li>
                <li className="mt-8 sm:w-1/2 mx-auto">
                    <a href="https://jisho.gusdiaz.com" className="text-[#0000EE] sm:text-3xl">jisho.gusdiaz.com</a>
                    <br /><br />
                    <span className="flex justify-center">
                        <img src={jisho} alt="Japanese Kanji Jisho" className="pb-3 sm:w-[256px]" />
                    </span>
                    <h3 className="mb-3 sm:text-2xl">Jisho API</h3>
                    <p className="sm:mx-20 sm:text-xl">This is my Japanese dictionary API that is hosted on a EC2 AWS Apache2 server. When it receives a Chinese character, it returns the reading,
                        part of grammar, and translation of the character. This is the main backend for my Yoru Yomi website.
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default Secondary;