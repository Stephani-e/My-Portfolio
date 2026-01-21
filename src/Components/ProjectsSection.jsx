import { useEffect, useState } from "react";
import { cn } from "../Lib/utils.jsx";
import {
    databases,
    APPWRITE_DATABASE_ID,
    APPWRITE_PROJECTS_ID,
} from "../Lib/appwrite.js";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub, FaDribbble } from "react-icons/fa";
import {Query} from "appwrite";

const categories = ["all", "front-end", "design", "mobile", "cybersecurity"];

export const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await databases.listDocuments(
                    APPWRITE_DATABASE_ID,
                    APPWRITE_PROJECTS_ID,
                    [Query.limit(100)]
                );
                console.log("projects res", res);
                const docs = res.documents.sort(
                    (a, b) => (a.order || 0) - (b.order || 0)
                );
                setProjects(docs);
            } catch (err) {
                console.error("Error fetching projects", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    console.log("projects state", projects);
    const filteredProjects = projects.filter(
        (project) =>
            activeCategory === "all" ||
            project.category?.toLowerCase() === activeCategory.toLowerCase()
    );
    console.log("filteredProjects", filteredProjects);

    if (loading) {
        return (
            <section
                id="projects"
                className="py-24 px-4 relative bg-secondary/30 animate-pulse"
            >
                <div className="container mx-auto max-w-5xl text-center">
                    <p className="text-muted-foreground">Loading Projects...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.$id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                {project.isVideo ? (
                                    <video
                                        src={project.imageUrl}
                                        controls
                                        muted
                                        loop
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags &&
                                        project.tags.split(',').map((tag) => (
                                            <span
                                                key={tag.trim()}
                                                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tag.trim()}
                                            </span>
                                        ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}

                                        <div className="mt-0 space-x-4">
                                            {project.category?.toLowerCase() === "design" ? (
                                                project.dribbbleUrl && (
                                                    <a
                                                        href={project.dribbbleUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                    >
                                                        <FaDribbble size={20} />
                                                    </a>
                                                )
                                            ) : (
                                                project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                    >
                                                        <FaGithub />
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/Stephani-e"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
