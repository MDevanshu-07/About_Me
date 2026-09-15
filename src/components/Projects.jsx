import { useEffect, useState } from "react";
import Card from "./Card";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  // 1. Repos you want to explicitly display
  const featuredRepos = ["Snake_Ladder", "Tic_Tac_Toe", "Num_Battle"];

  // 2. Repos that should get the CLI badge
  const cliRepos = ["Num_Battle", "Snake_Ladder", "Tic_Tac_Toe"];

  useEffect(() => {
    fetch("https://api.github.com/users/MDevanshu-07/repos")
      .then((response) => response.json())
      .then((data) => {
        // Filter the incoming data based on featuredRepos array
        const filtered = data.filter((repo) =>
          featuredRepos.includes(repo.name)
        );
        setRepos(filtered);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-8">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-5">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            heading={repo.name}
            desp={repo.description}
            link={repo.html_url}
            // Passes "CLI" if the repo is in cliRepos, otherwise defaults to "Web"
            type={cliRepos.includes(repo.name) ? "CLI" : "Web"} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;