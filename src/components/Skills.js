import './Skills.css';

const tools = [
  { name: 'SPSS',     category: 'Statistical Software',  desc: 'Statistical analysis and data management' },
  { name: 'STATA',    category: 'Statistical Software',  desc: 'Econometric and epidemiological modelling' },
  { name: 'R',        category: 'Programming',           desc: 'Statistical computing and data visualisation' },
  { name: 'DHIS2',    category: 'Health Informatics',    desc: 'Health data management and reporting systems' },
  { name: 'Power BI', category: 'Business Intelligence', desc: 'Interactive dashboards and data reporting' },
  { name: 'Tableau',  category: 'Data Visualisation',    desc: 'Visual analytics and insight communication' },
];

const operational = [
  'Facility Management',
  'Operational Coordination',
  'Quality Assurance',
  'Workflow Optimisation',
  'Patient Flow Management',
  'Service Efficiency',
  'Stakeholder Engagement',
  'Data Reporting',
  'Performance Management',
  'Compliance',
  'Governance',
  'Continuous Improvement',
];

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="section__inner">
        <p className="section__label">Skills</p>
        <h2 className="section__title">Technical &amp; Operational Skills</h2>
        <div className="section__divider" />

        <h3 className="skills__sub-heading">Data &amp; Analytics Tools</h3>
        <div className="skills__tools-grid">
          {tools.map(({ name, category, desc }) => (
            <div className="skills__tool-card" key={name}>
              <div className="skills__tool-top">
                <span className="skills__tool-name">{name}</span>
                <span className="skills__tool-cat">{category}</span>
              </div>
              <p className="skills__tool-desc">{desc}</p>
            </div>
          ))}
        </div>

        <h3 className="skills__sub-heading" style={{ marginTop: '3rem' }}>Operational Competencies</h3>
        <div className="skills__ops-grid">
          {operational.map(s => (
            <div className="skills__ops-item" key={s}>
              <span className="skills__ops-dot" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
