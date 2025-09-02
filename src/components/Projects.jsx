import projects from '../constants/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-surface-container">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-on-surface">
          Playbook
        </h2>
        <p className="text-lg mb-10 text-center text-on-surface-variant">
          A showcase of projects, references, and resources.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow hover:shadow-lg transition-shadow border flex flex-col h-full bg-tertiary/10 border-outline ${idx === 0 ? 'border-tertiary' : ''}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-5 flex-1 flex flex-col">
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:underline mb-2 text-tertiary"
                >
                  {project.name}
                </a>
                <p className="text-on-surface-variant text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-tertiary/20 text-tertiary font-medium border border-tertiary"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto text-tertiary hover:underline font-medium"
                >
                  View Resource
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
