"use client";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[70vh] bg-transparent text-[#EAEAEA] relative">
            <div className="w-full max-w-3xl bg-[#1A1A1A] rounded-2xl shadow-md p-10 border border-[#2A2A2A]">
                <h1 className="text-2xl font-bold text-[#B22222] mb-2">
                    Ricardo Gonzalez
                </h1>
                <p className="text-sm text-[#C0C0C0] mb-4">Senior Systems Engineer</p>

                <p className="text-[#A0A0A0] mb-6 leading-relaxed">
                    Trust in the LORD with all your heart and lean not on your own understanding in all your ways
                    acknowledge him, and he will make your paths straight.
                </p>

                <div className="flex gap-4 text-[#EAEAEA]">
                    <a
                        href="https://github.com/Ricardo96MC"
                        target="_blank"
                        className="bg-[#2A2A2A] px-4 py-2 rounded-full text-sm hover:bg-[#B22222] hover:text-white transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/ricardogonzalez"
                        target="_blank"
                        className="bg-[#2A2A2A] px-4 py-2 rounded-full text-sm hover:bg-[#B22222] hover:text-white transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:ricardo@example.com"
                        className="bg-[#2A2A2A] px-4 py-2 rounded-full text-sm hover:bg-[#B22222] hover:text-white transition"
                    >
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
}
