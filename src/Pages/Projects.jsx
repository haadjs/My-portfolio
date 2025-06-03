import React, { useEffect } from "react";
import dice from "../assets/Dice .png";
import todo from "../assets/todo.png";
import blog from "../assets/blog.png";
import Blog2 from "../assets/Screenshot 2025-04-27 215929.png";
import quiz from "../assets/quiz.png";
import Card from "../Components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

let projects = [
  {
    title: "Blog App React",
    description: "React-based Blog App using Firebase Auth/Database.",
    image: Blog2,
    live: "https://blogg-app-tech.vercel.app/",
    code: "https://github.com/haadjs/Blogg-App-tech",
    category: "react",
    tags: ["React", "Firebase", "Authentication"]
  },
  {
    title: "Dice Game",
    description: "React-based dice game using number matching strategy.",
    image: dice,
    live: "https://dice-game-tan-ten.vercel.app/",
    code: "https://github.com/haadjs/Dice-Game",
    category: "react",
    tags: ["React", "Game", "State Management"]
  },
  {
    title: "Quiz App",
    description: "React quiz app with timer, API calling, and result logic.",
    image: quiz,
    live: "https://quiz-in-react-ten.vercel.app/",
    code: "https://github.com/haadjs/Quiz-in-React",
    category: "react",
    tags: ["React", "API", "Timer"]
  },
  {
    title: "Blog App",
    description:
      "Full blog system with dashboard using HTML, CSS, JS & Firebase.",
    image: blog,
    live: "https://blog-app-nine-indol.vercel.app/",
    code: "https://github.com/haadjs/blog-app",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"]
  },
  {
    title: "Todo App",
    description: "Firebase-based React todo app with user ID-based queries.",
    image: todo,
    live: "https://todo-firebase-taupe.vercel.app/",
    code: "https://github.com/haadjs/Todo-firebase",
    category: "react",
    tags: ["React", "Firebase", "CRUD"]
  },
];

const Projects = () => {
  const [filter, setFilter] = React.useState('all');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTag, setActiveTag] = React.useState(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);
  
  // Filter projects based on category and search term
  useEffect(() => {
    let result = projects;
    
    // Apply category filter
    if (filter !== 'all') {
      result = result.filter(project => project.category === filter);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Apply tag filter
    if (activeTag) {
      result = result.filter(project => 
        project.tags.includes(activeTag)
      );
    }
    
    setFilteredProjects(result);
  }, [filter, searchTerm, activeTag]);
  
  // Get all unique tags
  const allTags = React.useMemo(() => {
    const tags = new Set();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);
  
  const handleTagClick = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null); // Toggle off if clicking the same tag
    } else {
      setActiveTag(tag);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white px-6 md:px-16 py-16">
      <div className="text-center mt-20 mb-8" data-aos="fade-down">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
          My Activities
        </h1>
        
        {/* Search bar */}
        <div className="max-w-md mx-auto mt-6 mb-8 relative" data-aos="fade-up" data-aos-delay="100">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search-input"
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 hover:bg-white/15"
            />
            {searchTerm && (
              <button 
                onClick={() => {
                  // Add a small animation when clearing search
                  const input = document.getElementById('search-input');
                  if (input) {
                    input.classList.add('scale-95');
                    setTimeout(() => {
                      input.classList.remove('scale-95');
                    }, 150);
                  }
                  setSearchTerm('');
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="text-xs text-gray-400 mt-2 pl-2">
              Searching for: <span className="text-purple-400 font-medium">"{searchTerm}"</span>
            </div>
          )}
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6" data-aos="fade-up" data-aos-delay="150">
          <button
            onClick={() => {
              // Add a small animation when clicking a filter
              const button = document.getElementById('filter-all');
              if (button) {
                button.classList.add('scale-95');
                setTimeout(() => {
                  button.classList.remove('scale-95');
                }, 150);
              }
              setFilter('all');
              // Clear other filters when selecting 'all'
              setActiveTag(null);
            }}
            id="filter-all"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'all' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              All Projects
            </span>
          </button>
          <button
            onClick={() => {
              const button = document.getElementById('filter-react');
              if (button) {
                button.classList.add('scale-95');
                setTimeout(() => {
                  button.classList.remove('scale-95');
                }, 150);
              }
              setFilter('react');
              setActiveTag(null);
            }}
            id="filter-react"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'react' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3C7.03 3 3 7.03 3 12h1.5c0-4.14 3.36-7.5 7.5-7.5V3z" />
                <path d="M12 3c4.97 0 9 4.03 9 9h-1.5c0-4.14-3.36-7.5-7.5-7.5V3z" />
                <path d="M12 21c-4.97 0-9-4.03-9-9h1.5c0 4.14 3.36 7.5 7.5 7.5V21z" />
                <path d="M12 21c4.97 0 9-4.03 9-9h-1.5c0 4.14-3.36 7.5-7.5 7.5V21z" />
              </svg>
              React
            </span>
          </button>
          <button
            onClick={() => {
              const button = document.getElementById('filter-web');
              if (button) {
                button.classList.add('scale-95');
                setTimeout(() => {
                  button.classList.remove('scale-95');
                }, 150);
              }
              setFilter('web');
              setActiveTag(null);
            }}
            id="filter-web"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'web' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Web
            </span>
          </button>
        </div>
        
        {/* Tags */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up" data-aos-delay="200">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  // Add a small animation when clicking a tag
                  const button = document.getElementById(`tag-${tag}`);
                  if (button) {
                    button.classList.add('animate-ping');
                    setTimeout(() => {
                      button.classList.remove('animate-ping');
                    }, 300);
                  }
                  handleTagClick(tag);
                }}
                id={`tag-${tag}`}
                className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${activeTag === tag 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/20' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'}`}
              >
                <span className="flex items-center gap-1">
                  {activeTag === tag && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  #{tag}
                </span>
              </button>
            ))}
          </div>
        )}
        <p className="text-gray-300 mt-2">A showcase of my latest projects</p>
      </div>

      {/* Grid setup */}
      {filteredProjects.length > 0 ? (
        <div
          className="grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
          data-aos="fade-up"
        >
          {filteredProjects.map((pro) => (
            <div
              key={pro.title}
              className="w-full max-w-sm hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              data-aos="zoom-in"
            >
              <Card
                image={pro.image}
                title={pro.title}
                description={pro.description}
                live={pro.live}
                code={pro.code}
              />
              <div className="flex flex-wrap gap-1 mt-2 justify-center">
                {pro.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 cursor-pointer hover:bg-purple-500/30 transition-colors"
                    onClick={() => handleTagClick(tag)}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20" data-aos="fade-up">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-300 mb-2">No projects found</h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
          <button 
            onClick={() => {
              setFilter('all');
              setSearchTerm('');
              setActiveTag(null);
            }}
            className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:opacity-90 transition-opacity"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
