import React, { useEffect } from "react";
import dice from "../assets/Dice .png";
import todo from "../assets/todo.png";
import blog from "../assets/blog.png";
import quiz from "../assets/quiz.png";
import Card from "../Components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

let projects = [
  {
    title: "Dice Game",
    description: "React-based dice game using number matching strategy.",
    image: dice,
    live: "https://dice-game-tan-ten.vercel.app/",
    code: "https://github.com/haadjs/Dice-Game",
  },
  {
    title: "Quiz App",
    description: "React quiz app with timer, API calling, and result logic.",
    image: quiz,
    live: "https://quiz-in-react-ten.vercel.app/",
    code: "https://github.com/haadjs/Quiz-in-React",
  },
  {
    title: "Blog App",
    description: "Full blog system with dashboard using HTML, CSS, JS & Firebase.",
    image: blog,
    live: "https://blog-app-nine-indol.vercel.app/",
    code: "https://github.com/haadjs/blog-app",
  },
  {
    title: "Todo App",
    description: "Firebase-based React todo app with user ID-based queries.",
    image: todo,
    live: "https://todo-firebase-taupe.vercel.app/",
    code: "https://github.com/haadjs/Todo-firebase",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-900 to-black text-white px-6 md:px-16 py-16">
      <div className="text-center mt-20 mb-12" data-aos="fade-down">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-300">My Activities</h1>
        <p className="text-gray-300 mt-2">A showcase of my latest projects</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center" data-aos="fade-up">
        {projects.map((pro) => (
          <Card
            key={pro.title}
            image={pro.image}
            title={pro.title}
            description={pro.description}
            live={pro.live}
            code={pro.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
