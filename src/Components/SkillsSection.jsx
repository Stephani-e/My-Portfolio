import {useEffect, useState} from "react";
import { cn } from '../Lib/utils.jsx';
import { databases, APPWRITE_DATABASE_ID, APPWRITE_SKILLS_ID } from "../Lib/appwrite.js";

const categories = ["all", "frontend", "design", "mobile", "cybersecurity", "tools"];

export const SkillsSection = () => {
    const [skills, setSkills] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await databases.listDocuments(
                    APPWRITE_DATABASE_ID,
                    APPWRITE_SKILLS_ID,
                    // [Query.equal('visible', true)]
                );
                console.log('skills res', res);   // <— add this
                console.log('skills res', res);   // <— add this
                // optionally sort by order if you set it
                const docs = res.documents.sort((a, b) => (a.order || 0) - (b.order || 0));
                setSkills(docs);
            } catch (err) {
                console.error('Error fetching skills', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    const filteredSkills = skills.filter(
        (skill) =>
            activeCategory === 'all' ||
            skill.category === activeCategory
    );

    if (loading) {
        return (
            <section
                id='skills'
                className='py-24 px-4 relative bg-secondary/30 animate-pulse'
            >
                <div className='container mx-auto max-w-5xl text-center'>
                    <p className= 'text-muted-foreground'> Loading Skills... </p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category, key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory === category
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-secondary/70 text-foreground hover:bd-secondary',
                                )}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.$id}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div
                                className="full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>


                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

        </section>
    )

}