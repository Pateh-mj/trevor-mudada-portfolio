import './About.css';

const competencies = [
  'Facility Management',
  'Patient Flow Optimisation',
  'Operational Coordination',
  'Quality Assurance',
  'Workflow Optimisation',
  'Data Management',
  'Stakeholder Engagement',
  'Service Efficiency',
  'Continuous Improvement',
  'Study Design',
  'Statistical Analysis',
  'Evidence Synthesis',
  'Scientific Writing',
  'Epidemiological Analysis',
  'Performance Management',
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <p className="section__label">About</p>
        <h2 className="section__title">Professional Summary</h2>
        <div className="section__divider" />

        <div className="about__grid">
          <div className="about__text">
            <p>
              Health and Operations professional with over 3 years' experience in facility management,
              operational coordination, and quality assurance in health and corporate environments.
              Skilled in optimising patient flow, improving service efficiency, and implementing
              standardised processes.
            </p>
            <p>
              Demonstrated success in data management, workflow optimisation, and stakeholder engagement
              to enhance operational performance. Adept at ensuring facility readiness, improving customer
              experience, and supporting continuous improvement initiatives. Proficient in digital tools
              for data analysis, reporting, and workflow monitoring.
            </p>
            <p>
              A strong foundation in research and epidemiological analysis, with hands-on experience in
              study design, data collection, statistical analysis, and evidence synthesis. Supported
              large-scale health research at the Cancer Diseases Hospital and contributed to analytical
              work aligned with national and global health priorities.
            </p>
            <p>
              Currently pursuing an MBA and a Master's in Epidemiology and Biostatistics, with a strong
              interest in research, grants, and scalable development impact.
            </p>
          </div>

          <div className="about__competencies">
            <h3 className="about__comp-title">Core Competencies</h3>
            <ul className="about__comp-list">
              {competencies.map(c => (
                <li key={c} className="about__comp-item">
                  <span className="about__comp-dot" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
