export default function Experience() {
    return (
        <section id="experiences" className="flex flex-col items-center justify-center text-left py-20 text-[#EAEAEA]">
            <div className="max-w-5xl w-[90%] md:w-[700px] lg:w-[60%] bg-[#1A1A1A] rounded-2xl shadow-md p-8 border border-[#2A2A2A]">
                <h1 className="text-5xl mb-12 text-center">
                    <a href="/experience" className="hover:text-[#B22222]">
                        <span>Experience</span>
                    </a>
                </h1>
                <h3 className="text-lg font-semibold mb-1">
                    Full Stack Engineer (Contract)
                </h3>
                <p className="text-sm text-[#C0C0C0] mb-4">@ Confidential · April 2024 - Present</p>
                <p className="text-[#A0A0A0] mb-6 leading-relaxed">
                    Trust in the LORD with all your heart and lean not on your own understanding in all your ways
                    acknowledge him, and he will make your paths straight. Do not conform any longer to the pattern
                    of this world, but be transformed by the renewing of your mind. Then you will be able to test
                    and approve what God’s will is—his good, pleasing and perfect will. Do not be anxious about
                    anything, but in everything, by prayer and petition, with thanksgiving, present your requests
                    to God. Therefore go and make disciples of all nations, baptizing them in the name of the Father
                    and of the Son and of the Holy Spirit. For it is by grace you have been saved, through faith—and
                    this not from yourselves, it is the gift of God.
                </p>

                <h4 className="text-[#EAEAEA] font-semibold mb-2">Relevant Skills:</h4>
                <ul className="grid grid-cols-2 gap-y-2 text-sm text-[#C0C0C0]">
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>TailwindCSS</li>
                    <li>GCP</li>
                    <li>React</li>
                    <li>Spring Boot</li>
                </ul>
            </div>
        </section>
    );
}
