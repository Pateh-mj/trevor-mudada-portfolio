import './Projects.css';

const projects = [
  {
    category: 'Research',
    title: 'COVID-19 Wave Analysis — Zambia',
    description:
      'WHO-supported retrospective cross-sectional study analysing epidemiological patterns across the three COVID-19 waves in Zambia. Contributed as one of four national researchers.',
    tags: ['Epidemiology', 'STATA', 'Cross-Sectional Study', 'WHO'],
    link: null,
  },
  {
    category: 'Health Research',
    title: 'Cancer Diseases Hospital Research Initiative',
    description:
      'Supported large-scale health research at the Cancer Diseases Hospital, contributing to data collection, analysis, and evidence synthesis aligned with national health priorities.',
    tags: ['SPSS', 'Data Collection', 'Evidence Synthesis', 'Public Health'],
    link: null,
  },
  {
    category: 'Operations',
    title: 'Luangwa Branch Setup & Operations',
    description:
      'Led the opening and operationalisation of the Luangwa Branch of Zambia Industrial Commercial Bank as Acting Branch Manager, establishing systems for compliance, governance, and team performance.',
    tags: ['Branch Management', 'Compliance', 'Governance', 'Team Leadership'],
    link: null,
  },
  {
    category: 'Data Analytics',
    title: 'Health Operations Dashboard',
    description:
      'Designed and implemented a Power BI reporting dashboard to monitor facility KPIs, patient flow metrics, and service efficiency across multiple health units.',
    tags: ['Power BI', 'Data Reporting', 'KPIs', 'Facility Management'],
    link: null,
  },
  {
    category: 'Quality Assurance',
    title: 'Regulatory Compliance and Audits',
    description:
      'Supported audits, strengthened administrative processes, and contributed to improving institutional compliance levels from 23% to 78%.',
    tags: ['QA', 'Process Improvement', 'SOP Development'],
    link: null,
  },
  {
    category: 'Research',
    title: 'Epidemiological Field Study',
    description:
      'Conducted a community-level epidemiological survey to assess disease burden and risk factors, applying STATA and R for analysis and reporting.',
    tags: ['R Programming', 'STATA', 'Field Research', 'Biostatistics'],
    link: null,
  },
];

const categoryColors = {
  'Research':        { bg: '#eff4ff', color: '#1a56db' },
  'Health Research': { bg: '#f0fdf4', color: '#16a34a' },
  'Operations':      { bg: '#fff7ed', color: '#ea580c' },
  'Data Analytics':  { bg: '#faf5ff', color: '#7c3aed' },
  'Quality Assurance': { bg: '#fef2f2', color: '#dc2626' },
};

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="section__inner">
        <p className="section__label">Portfolio</p>
        <h2 className="section__title">Projects &amp; Initiatives</h2>
        <div className="section__divider" />

        <div className="projects__grid">
          {projects.map(({ category, title, description, tags, link }) => {
            const style = categoryColors[category] || { bg: '#f4f7fb', color: '#1a56db' };
            return (
              <div className="projects__card" key={title}>
                <div className="projects__card-top">
                  <span
                    className="projects__category"
                    style={{ background: style.bg, color: style.color }}
                  >
                    {category}
                  </span>
                </div>
                <h3 className="projects__title">{title}</h3>
                <p className="projects__desc">{description}</p>
                <div className="projects__tags">
                  {tags.map(t => (
                    <span key={t} className="projects__tag">{t}</span>
                  ))}
                </div>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="projects__link">
                    View Project →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
