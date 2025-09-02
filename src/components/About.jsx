import experience_summary from '../constants/summary';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-tertiary">About Me</h2>
        <p className="text-lg mb-6 text-secondary">
          {experience_summary.aboutMe}
        </p>
        {/* Add more details or skills here as needed */}
      </div>
      {/* Talents Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-tertiary">
          Talents
        </h3>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-container">
          {experience_summary.experiences.map((talent, idx) => (
            <div key={idx} className="mb-4">
              <div className="rounded-xl border-2 border-tertiary bg-surface shadow-lg p-6 flex flex-col gap-2 transition-transform hover:scale-[1.015] hover:shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-semibold text-on-surface">
                    {talent.title}
                  </h4>
                </div>
                <div className="text-sm text-on-surface-variant">
                  {talent.summary}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center text-tertiary">
          Values & Principles
        </h3>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-container">
          {experience_summary.mindset.map((value, idx) => (
            <div key={idx} className="mb-4">
              <div className="rounded-xl border-2 border-tertiary bg-surface shadow-lg p-6 flex flex-col gap-2 transition-transform hover:scale-[1.015] hover:shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-semibold text-on-surface">
                    {value.value}
                  </h4>
                </div>
                <div className="text-sm text-on-surface-variant">
                  {value.definition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
