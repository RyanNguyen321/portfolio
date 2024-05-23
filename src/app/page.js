import Layout from "@/app/components/layin";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="mb-4">I'm a web designer specializing in creating beautiful and functional websites dabbling
                in the world of Artificial Intelligence.</p>
            <h1 className="text-5xl font-bold mb-10 mt-10 text-white" >Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example project cards */}
                <div className="bg-white rounded-lg shadow p-4 text-black">
                    <a href="https://assistments-peak.vercel.app/">
                        <h2 className="text-2xl font-bold mb-2 text-black">ASSISTments PEAK</h2>
                        <p className="text-black">A tool for teachers to create and design scaffolding problems with the
                            help of OpenAI's ChatGPT</p>
                    </a>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-black">
                    <h2 className="text-2xl font-bold mb-2">Brigham & Women's Hospital</h2>
                    <p className="text-black">A full stack application meant for Administrators of the Brigham & Women's
                        Hospital. Helps with placing orders, tracking orders, and path finding.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-black">
                    <h2 className="text-2xl font-bold mb-2 text-black">React Chat</h2>
                    <p className="text-black">A full stack messaging platform designed around GitHub profiles. Allowing
                        users to effortlessly connect with friends for instant messaging.</p>
                </div>
            </div>
            <h1 className="text-5xl font-bold mb-10 mt-10 text-white" >Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example project cards */}
                <div className="bg-white rounded-lg shadow p-4 text-black">
                    <a href="https://assistments-peak.vercel.app/">
                        <h2 className="text-2xl font-bold mb-2 text-black">ASSISTments</h2>
                        <h3 className="ml-1">Star/Goat</h3>
                        <p className="ml-2 text-sm">Designed, created and deployed web-application to help teachers.</p>
                    </a>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-black">
                    <h2 className="text-2xl font-bold mb-2">Cyvl.ai</h2>
                    <h3 className="ml-1">Machine Learning Engineer</h3>
                    <p className="ml-2 text-sm">Tested and verified model used to analyze civil assets.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-black">
                    <h2 className="text-2xl font-bold mb-2 text-black">TrampleZone LLC</h2>
                    <h3 className="ml-1">Webdesigner</h3>
                    <p className="ml-2 text-sm">Designed, created and deployed web-application to connect on campus groups.</p>
                </div>
            </div>
        </Layout>
    )
}