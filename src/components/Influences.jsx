import influences from '../constants/influences';

const Influences = () => {
  return (
    <section id="influences" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-tertiary">
          Influences
        </h2>
        <p className="text-lg mb-10 text-center text-secondary">
          People and ideas that have shaped my thinking and approach.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {influences.map((influence, idx) => (
            <div
              key={idx}
              className="rounded-xl border-2 border-tertiary bg-surface shadow-lg p-6 flex flex-col gap-3 transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              <a
                href={influence.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-tertiary hover:underline"
              >
                {influence.name}
              </a>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {influence.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Influences;
