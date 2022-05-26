const Footer = () => {
    return (
        <section id="footer" className="flex flex-col pt-10 px-4 pb-48 text-white sm:flex-row sm:justify-center xl:mx-24">
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
            <section className="sm:text-3xl w-1/2 xl:w-1/3 xl:mr-[10em]">
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
    )
}

export default Footer;