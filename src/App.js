import { Helmet } from "react-helmet";
import './App.css';
import logo from './assets/logo.svg'
import pfp from './assets/gus.png'
import yoru from './assets/yoruyomi.png'
import jisho from './assets/jisho.png'
import { BsDownload } from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'

function App() {
  return (
    <div className="block align-baseline w-[64em] max-w-[calc(100%)] mx-auto my-0 p-0 b-0">
      
      <Helmet>
        <title>Gus Diaz ・ Welcome!</title>
        <style>{"body { background: linear-gradient(#76C6B9, #C57786); }"}</style>
      </Helmet>

      <header className="text-center">
        <span>
          <img src={logo} className="my-0 mx-auto"></img>
        </span>
        <p className="text-6xl text-white">Gustavo Diaz Banuelos</p>
        <p className="text-white">Tools &amp; Automation Engineer at Crate &amp; Barrel
          <br/>
          <a href="mailto:gdiazbanuelos@gmail.com">gdiazbanuelos@gmail.com</a>
          <br/>
          <a href="https://github.com/gdiazbanuelos">github.com/gdiazbanuelos</a>
        </p>
      </header>
      <nav className="text-center bg-[#F7F7F7] rounded-t-md">
        <ul className="">
          <li className="inline-block">
            <a href="#" className="px-10">Introduction</a>
          </li>
          <li className="inline-block">
            <a href="#" className="px-10">Websites</a>
          </li>
          <li className="inline-block">
            <a href="#" className="px-10">Projects</a>
          </li>
          <li className="inline-block">
            <a href="#" className="px-10">Contact Me</a>
          </li>
        </ul>
      </nav>

      <div className="bg-white" id="main">
        <section className="flex">
          <div>
            <header>
              <p>Hi, I am Gus!</p>
            </header>
            <p>I am a Tools &amp; Automation Engineer at Crate &amp; Barrel.</p>
            <p>I graduated from Carleton College and majored in Computer Science. <br/><br/>
								In my courses I have built various websites, databases, and games. 
                I have built and maintained personal servers and websites to host various projects. 
                I also like to find and help contribute to community driven video game project mods on Github.
            </p>
            <ul>
              <li>  
                <button class="bg-transparent hover:bg-[#F7F7F7] font-semibold py-2 px-4 border border-[#DDDDDD] hover:border-transparent rounded">
                  <a href="#" className="text-2xl">Resume<BsDownload size="25" className="inline-block ml-3" /></a>
                </button>
              </li>
            </ul>
          </div>
          <span className="">
            <img src={pfp} className="my-0 mx-auto rounded-full border border-[#DDDDDD] p-2"></img>
          </span>
        </section>
      </div>


      <section className="text-center bg-white border border-[#DDDDDD]" id="second">
        <header>
          <p>My Other Personal Websites</p>
        </header>
        <ul className="flex justify-center">
          <li className="w-1/3">
            <a href="https://jp.gusdiaz.com">jp.gusdiaz.com</a>
            <br/><br/>
						<span><img src={yoru} className="w-[300px] h-[125px] mx-auto" /></span>
						<h3>Yoru Yomi</h3>
						<p>Textbooks don't teach the fundamentals, so I want to help others jump-start their Japanese learning. 
              Start learning Japanese from scratch!
            </p>
					</li>
          <li className="w-1/3">
					  <a href="https://jisho.gusdiaz.com">jisho.gusdiaz.com</a>
            <br/><br/>
						<span>
              <img src={jisho} className="w-[300px] h-[125px] mx-auto"/>
            </span>
						<h3>Jisho API</h3>
						<p>This is my Japanese dictionary API that is hosted on a EC2 AWS Apache2 server. When it receives a Chinese character, it returns the reading, 
                part of grammar, and translation of the character. This is the main backend for my Yoru Yomi website.
            </p>
				  </li>
        </ul>
      </section>

      <section className="text-center bg-white rounded-b-md" id="third">
        <header>
          <p>Technical Projects</p>
          <p>These are some of my personal and college programming projects.</p>
        </header>
        <ul className="flex justify-center">
          <li className="w-1/3">
            <a href="#" className="text-2xl">
              <BsGithub size="25" className="inline-block ml-3" />
              <br/>
              <p>Reddit Parser Bot</p>
            </a>
          </li>
          <li className="w-1/3">
            <a href="#" className="text-2xl">
              <BsGithub size="25" className="inline-block ml-3" />
              <br/>
              <p>C interpreter for Scheme</p>
            </a>
          </li>
          <li className="w-1/3">
            <a href="#" className="text-2xl">
              <BsGithub size="25" className="inline-block ml-3" />
              <br/>
              <p>OpenGL Graphics Renderer</p>
            </a>
          </li>
          <li className="w-1/3">
            <a href="#" className="text-2xl">
              <BsGithub size="25" className="inline-block ml-3" />
              <br/>
              <p>Flask Python API Server</p>
            </a>
          </li>
          <li className="w-1/3">
            <a href="#" className="text-2xl">
              <BsGithub size="25" className="inline-block ml-3" />
              <br/>
              <p>In-Stock Email Alert Bot</p>
            </a>
          </li>
        </ul>

        <footer>
          <ul>
            <li>
              <button class="bg-transparent hover:bg-[#F7F7F7] font-semibold py-2 px-4 border border-[#DDDDDD] hover:border-transparent rounded">
                  <a href="https://github.com/gdiazbanuelos" className="text-2xl">My Github Page<BsGithub size="25" className="inline-block ml-3" /></a>
              </button>
            </li>
          </ul>
        </footer>
      </section>

      <section className="flex text-center" id="footer">
        <section className="w-1/2">
          <p>Thank you for visiting my website!</p>
          <p>I appreciate your time and consideration. Feel free to contact me for any questions via any of the platforms to the right.</p>
          <ul>
            <li>
              <button class="bg-transparent hover:bg-[#F7F7F7] font-semibold py-2 px-4 border border-[#DDDDDD] hover:border-transparent rounded">
                  <a href="#" className="text-2xl">Back to top of page</a>
              </button>
            </li>
          </ul>
        </section>
        <section className="w-1/2">
          <p>Contact Information</p>
          <dl className="">
								<dt>Address</dt>
								<dd>Chicago, IL • USA</dd>
								<dt>Phone</dt>
								<dd>(214) 734-2809</dd>
								<dt>Email</dt>
								<dd><a href="mailto:gdiazbanuelos@gmail.com">gdiazbanuelos@gmail.com</a></dd>
								<dt>Linkedin</dt>
								<dd><a href="https://www.linkedin.com/in/gdiazbanuelos/">linkedin.com/in/gdiazbanuelos</a></dd>
								<dt>GitHub</dt>
								<dd><a href="https://github.com/gdiazbanuelos">github.com/gdiazbanuelos</a></dd>
							</dl>
        </section>
      </section>


    </div>
  );
}

export default App;
