import { Helmet } from "react-helmet";
import './App.css';
import logo from './assets/logo.svg'
import pfp from './assets/gus.png'
import yoru from './assets/yoruyomi.png'
import jisho from './assets/jisho.png'
import { BsDownload } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'

function App() {
  return (
    <div id="wrapper" className="block align-baseline max-w-[calc(100%-2em)] mx-auto 
    sm:w-[58em] lg:w-[64em] xl:w-[80em]">

      <Helmet>
        <title>Gus Diaz ・ Welcome!</title>
        <style>{"body {background: linear-gradient(#76C6B9, #C57786);}"}</style>
        <style></style>
      </Helmet>

      <header id="header" className="text-center pt-16 sm:my-20">
        <span>
          <img src={logo} className="mb-6 my-0 mx-auto"></img>
        </span>
        <p className="text-5xl sm:text-6xl text-white mb-4">Gustavo Diaz Banuelos</p>
        <p className="text-white mb-8 sm:text-2xl">Tools &amp; Automation Engineer at Crate &amp; Barrel
          <br />
          <a href="mailto:gdiazbanuelos@gmail.com" className="underline hover:no-underline">gdiazbanuelos@gmail.com</a>
          <br />
          <a href="https://github.com/gdiazbanuelos" className="underline hover:no-underline">github.com/gdiazbanuelos</a>
        </p>
      </header>

      <nav id="nav" className="hidden sm:block text-center bg-[#F7F7F7]
        rounded-t-md py-6 sticky text-xl">
        <ul className="mx-28">
          <li className="inline-block w-1/4">
            <a href="#" className="">Introduction</a>
          </li>
          <li className="inline-block w-1/4">
            <a href="#" className="">Websites</a>
          </li>
          <li className="inline-block w-1/4">
            <a href="#" className="">Projects</a>
          </li>
          <li className="inline-block w-1/4">
            <a href="#" className="">Contact Me</a>
          </li>
        </ul>
      </nav>

      <section className="bg-white rounded-md" id="content">

        <div id="main" className="bg-white pt-12 px-6 pb-6 mb-8 sm:mb-0 rounded-md 
        sm:rounded-none sm:px-20 sm:py-52">
          <section className="flex flex-col-reverse text-center sm:flex-row sm:text-left">
            <div className="sm:w-2/3">
              <header className="mb-8">
                <p className="text-3xl sm:text-5xl">Hi, I am Gus!</p>
              </header>
              <br/>
              <p className="mb-8 sm:text-2xl">I am a Tools &amp; Automation Engineer at Crate &amp; Barrel.</p>
              <p className="mb-8 sm:text-2xl">I graduated from Carleton College with a major in Computer Science. <br /><br />
                In my courses I have built various websites, databases, and games.
                I have built and maintained personal servers and websites to host various projects.
                I also like to find and help contribute to community driven video game project mods on Github.
              </p>
              <ul>
                <li>
                  <button class="hover:bg-[#F7F7F7] font-semibold
                                  py-2 px-4 border border-[#DDDDDD] hover:border-transparent rounded
                                  w-5/6 sm:w-44">
                    <a href="#" className="text-xl">Resume <BsDownload size="25" className="inline-block" /></a>
                  </button>
                </li>
              </ul>
            </div>
            <span className="flex items-center justify-center">
              <img src={pfp} className="mb-8 mx-auto rounded-full border w-48 sm:w-80 sm:ml-20"></img>
            </span>
          </section>
        </div>

        <section id="second" className="text-center bg-white border pt-12 px-6 pb-4 sm:py-24">
          <header>
            <p className="text-xl mb-3 sm:mb-12 sm:text-5xl">My Other Personal Websites</p>
          </header>
          <ul className="flex justify-center flex-col xl:flex-row mb-8 xl:mx-20 ">
            <li className="sm:mt-8 sm:w-1/2 ">
              <a href="https://jp.gusdiaz.com" className="text-[#0000EE] sm:text-3xl ">jp.gusdiaz.com</a>
              <br/><br />
              <span className="flex justify-center">
                <img src={yoru} className="pb-3 sm:w-[256px]"/>
              </span>
              <br/><br/>
              <h3 className="mb-3 sm:text-2xl">Yoru Yomi</h3>
              <p className="sm:mx-20 sm:text-xl">Textbooks don't teach the fundamentals, so I want to help others jump-start their Japanese learning.
                Start learning Japanese from scratch!
              </p>
            </li>
            <li className="mt-8 sm:w-1/2">
              <a href="https://jisho.gusdiaz.com" className="text-[#0000EE] sm:text-3xl">jisho.gusdiaz.com</a>
              <br /><br />
              <span className="flex justify-center">
                <img src={jisho} className="pb-3 sm:w-[256px]"/>
              </span>
              <h3 className="mb-3 sm:text-2xl">Jisho API</h3>
              <p className="sm:mx-20 sm:text-xl">This is my Japanese dictionary API that is hosted on a EC2 AWS Apache2 server. When it receives a Chinese character, it returns the reading,
                part of grammar, and translation of the character. This is the main backend for my Yoru Yomi website.
              </p>
            </li>
          </ul>
        </section>

        <section id="third" className="text-center bg-white rounded-b-md pt-12 px-6 pb-4 sm:py-28">
          <header>
            <p className="text-xl mb-3 sm:text-4xl">Technical Projects</p>
            <p className="mb-8">These are some of my personal and college programming projects.</p>
          </header>
          <ul className="flex justify-center flex-col text-white mx-auto mt-0 mb-8 sm:flex-row">
            <li className="bg-[#EFA8B0] rounded-t-lg p-6 sm:rounded-none sm:rounded-l-lg">
              <a href="#" className="text-2xl">
                <BsGithub size="60" className="inline-block" />
                <br/>
                <p className="sm:mt-6">Reddit Parser Bot</p>
              </a>
            </li>
            <li className="bg-[#C79CC8] p-6">
              <a href="#" className="text-2xl">
                <BsGithub size="60" className="inline-block" />
                <br />
                <p className="sm:mt-6">C interpreter for Scheme</p>
              </a>
            </li>
            <li className="bg-[#A89CC8] p-6">
              <a href="#" className="text-2xl">
                <BsGithub size="60" className="inline-block" />
                <br />
                <p className="sm:mt-6">OpenGL Graphics Renderer</p>
              </a>
            </li>
            <li className="bg-[#9BB2E1] p-6">
              <a href="#" className="text-2xl">
                <BsGithub size="60" className="inline-block" />
                <br />
                <p className="sm:mt-6">Flask Python API Server</p>
              </a>
            </li>
            <li className="bg-[#8CC9F0] p-6 rounded-b-lg sm:rounded-none sm:rounded-r-lg">
              <a href="#" className="text-2xl">
                <BsGithub size="60" className="inline-block" />
                <br />
                <p className="sm:mt-6">In-Stock Email Alert Bot</p>
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
      </section>



      <section id="footer" className="flex flex-col pt-10 px-4 pb-48 text-white sm:flex-row sm:justify-center">
        <section className="mb-12 sm:w-1/3 xl:w-2/3">
          <p className="text-xl pb-4 sm:text-3xl">Thank you for visiting my website!</p>
          <p className="mb-8 sm:w-2/3 sm:text-xl">I appreciate your time and consideration. Feel free to contact me for any questions via any of the platforms to the right.</p>
          <ul className="text-center sm:text-left">
            <li>
              <button class="bg-transparent hover:bg-[#F7F7F7] font-semibold border border-[#DDDDDD]
                             hover:border-transparent rounded w-full sm:w-2/3 xl:w-1/3 p-4">
                <a href="#" className="text-lg sm:text-xl xl:text-2xl">Back to top of page</a>
              </button>
            </li>
          </ul>
        </section>
        <section className="sm:text-3xl w-1/2 xl:w-1/3">
          <p className="text-xl px-4 font-bold xl:text-3xl">Contact Information</p>
          <div className="text-white">
            <dl className="">
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-bold xl:text-xl">Full name</dt>
                <dd class="mt-1 text-sm  sm:mt-0 sm:col-span-2 xl:text-xl">Gustavo Diaz Banuelos</dd>
              </div>
              <div class=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-bold xl:text-xl">Address</dt>
                <dd class="mt-1 text-sm  sm:mt-0 sm:col-span-2 xl:text-xl">Chicago, IL • USA</dd>
              </div>
              <div class=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-bold xl:text-xl">Phone</dt>
                <dd class="mt-1 text-sm  sm:mt-0 sm:col-span-2 xl:text-xl">(214) 734-2809</dd>
              </div>
              <div class=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-bold xl:text-xl">Email</dt>
                <dd class="mt-1 text-sm  sm:mt-0 sm:col-span-2 xl:text-xl">
                  <a href="mailto:gdiazbanuelos@gmail.com" className="underline xl:text-xl">gdiazbanuelos@gmail.com</a>
                </dd>
              </div>
              <div class=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-bold xl:text-xl">Linkedin</dt>
                <dd class="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                  <a href="https://www.linkedin.com/in/gdiazbanuelos/" className="underline xl:text-xl">linkedin.com/in/gdiazbanuelos</a>
                </dd>
              </div>
              <div class=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-bold xl:text-xl">GitHub</dt>
                <dd class="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                  <a href="https://github.com/gdiazbanuelos" className="sm:text-xl underline">github.com/gdiazbanuelos</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </section>


    </div>
  );
}

export default App;
