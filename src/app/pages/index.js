import Layin from "../components/layin"

export default function Home() {
    return (
        <Layin>
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="mb-4">I'm a web designer specializing in creating beautiful and functional websites.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example project cards */}
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-2xl font-bold mb-2">Project 1</h2>
                    <p>A brief description of the project.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-2xl font-bold mb-2">Project 2</h2>
                    <p>A brief description of the project.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-2xl font-bold mb-2">Project 3</h2>
                    <p>A brief description of the project.</p>
                </div>
            </div>
        </Layin>
    )
}
