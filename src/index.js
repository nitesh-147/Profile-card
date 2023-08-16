import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";

const skillList = [
  {
    skill: "C, C++",
    level: "Advanced",
    color: "#ff00ff",
  },
  {
    skill: "Java",
    level: "Beginner",
    color: "#FF3B00",
  },
  {
    skill: "Python",
    level: "Intermediate",
    color: "#912",
  },
  {
    skill: "SQL",
    level: "Advanced",
    color: "#191",
  },
  {
    skill: "React",
    level: "Advanced",
    color: "#f26522",
  },
  {
    skill: "HTML, CSS",
    level: "Intermediate",
    color: "#c71585",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#c71511",
  },
  {
    skill: "Bootstrap",
    level: "Intermediate",
    color: "#8000ff",
  },
  {
    skill: "Git, Github",
    level: "Intermediate",
    color: "#0000ff",
  },
];

function App() {
  return (
    <div className="card col-sm-12">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar=()=>{
    return(
        <div>
            <img className="avatar" src="./picture/nkr1.jpg" alt="Nitesh Kumar Mehta" />
        </div>
    )
}

const Intro=()=>{
    return (
      <div>
        <h1>Nitesh Kumar Mehta</h1>
        <p>
          Hello, my name is Nitesh, and I am a software programmer. With a
          passion for coding and problem-solving, I have dedicated my career to
          developing efficient and innovative software solutions. I possess a
          deep understanding of programming languages, frameworks, and software
          development methodologies, allowing me to create robust applications.
        </p>
      </div>
    );
}

const SkillList=()=>{
     return (
       <div className="skill-list">
         {
          skillList.map((skill)=>(
            <Skill obj={skill}></Skill>
          ))
         }
       </div>
     );
}

const Skill=({obj})=>{
    return (
      <div className="skill" style={{ background: obj.color }}>
        {obj.skill}
        <span>{obj.level === "Advanced" ? "💪":obj.level === "Intermediate" ? "👍":"😲"}</span>
      </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="bg-secondary col-sm-10">
      <App />
    </div>
  </StrictMode>
);
