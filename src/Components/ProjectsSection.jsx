import { ProjectsData } from '@/Components/Data/ProjectsData'
import { useState } from "react";
import { cn } from '@/Lib/utils';
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub, FaDribbble } from 'react-icons/fa';


const categories = ["all", "front-end", "design"];

export const ProjectsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");
    const filteredProjects = ProjectsData.filter(
        (project) => activeCategory === 'all' || project.category.toLowerCase() === activeCategory.toLowerCase());

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category, key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bd-secondary',
                                )}
                            >
                                {category}
                            </button>
                        )
                        )
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                {project.image && project.image.endsWith('.mp4') ? (
                                    <video
                                        src={project.image}
                                        controls
                                        muted
                                        loop
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}

                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {Array.isArray(project.tags) && project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}

                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>

                                        <div className="mt-4 space-x-4">
                                            {project.category.toLowerCase() === 'design' ? (
                                                project.dribbbleURL && (
                                                    <a
                                                        href={project.dribbbleURL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                    >
                                                        <FaDribbble size={20} />
                                                    </a>
                                                )
                                            ) : (
                                                <>
                                                    {project.githubURL && (
                                                        <a
                                                            href={project.githubURL}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                        >
                                                            <FaGithub />
                                                        </a>
                                                    )}
                                                </>
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