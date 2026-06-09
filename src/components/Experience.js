import './Experience.css';

const roles = [
  {
    title: 'Acting Branch Manager',
    org: 'Zambia Industrial Commercial Bank — Luangwa Branch',
    period: 'Previous Role',
    type: 'Banking & Operations',
    points: [
      'Opened and led the Luangwa Branch as Acting Branch Manager.',
      'Strengthened branch operations, compliance, and team performance in a high-accountability environment.',
      'Sharpened understanding of governance, performance management, and institutional systems.',
    ],
  },
  {
    title: 'Health Research Contributor',
    org: 'Cancer Diseases Hospital (CDH)',
    period: 'Previous Role',
    type: 'Health Research',
    points: [
      'Supported large-scale health research at the Cancer Diseases Hospital.',
      'Contributed to analytical work aligned with national and global health priorities.',
      'Applied epidemiological methods to real-world health data in a clinical environment.',
    ],
  },
  {
    title: 'Operational & Quality Assurance Professional',
    org: 'Health & Corporate Environments',
    period: '3+ Years',
    type: 'Health Operations',
    points: [
      'Managed facility operations, ensuring facility readiness and service quality across health settings.',
      'Optimised patient flow and implemented standardised processes to improve service efficiency.',
      'Led data management and workflow optimisation initiatives to enhance operational performance.',
      'Engaged stakeholders to drive continuous improvement and improve customer and patient experience.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="section__inner">
        <p className="section__label">Experience</p>
        <h2 className="section__title">Professional Background</h2>
        <div className="section__divider" />

        <div className="exp__list">
          {roles.map((role, i) => (
            <div className="exp__card" key={i}>
              <div className="exp__card-left">
                <span className="exp__type">{role.type}</span>
                <span className="exp__period">{role.period}</span>
              </div>
              <div className="exp__card-right">
                <h3 className="exp__title">{role.title}</h3>
                <p className="exp__org">{role.org}</p>
                <ul className="exp__points">
                  {role.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
