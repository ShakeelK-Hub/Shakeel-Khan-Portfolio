import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import '../Project/ProjectList.css';

function ProjectList({ projects = [] }) {
    const scrollRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({ 
                left: direction === 'left' ? -scrollAmount : scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            setShowLeftButton(scrollRef.current.scrollLeft > 0);
        }
    };

    useEffect(() => {
        const currentScrollRef = scrollRef.current;

        if (currentScrollRef) {
            currentScrollRef.addEventListener('scroll', checkScrollPosition);
        }

        return () => {
            if (currentScrollRef) {
                currentScrollRef.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    return (
        <div className="project-list-container">
            {showLeftButton && (
                <button className="scroll-button left" onClick={() => scroll('left')}>
                    <div className="arrow arrow-top"></div>
                    <div className="arrow arrow-bottom"></div>
                </button>
            )}
            <div className="scroll-container" ref={scrollRef}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <button className="scroll-button right" onClick={() => scroll('right')}>
                <div className="arrow arrow-top"></div>
                <div className="arrow arrow-bottom"></div>
            </button>
        </div>
    );
}

export default ProjectList;






