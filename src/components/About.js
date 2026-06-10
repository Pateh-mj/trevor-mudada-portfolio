import { useEffect, useRef } from 'react';
import './About.css';

const competencies = [
  'Public Health Leadership and Program Management',
  'Global Health Strategy and Systems Strengthening',
  'Monitoring, Evaluation and Learning (MEL)',
  'Advanced Data Analytics and Predictive Modeling',
  'Workflow Optimisation',
  'Epidemiology and Disease Intelligence',
  'Health Information Systems and Digital Health',
  'Occupational Health, Safety and Environmental (HSE) Management',
  'Climate Change and Health Risk Assessment',
  'Public Health Policy and Governance',
  'Health Systems Strengthening and Universal Health Coverage',
  'Research Design, Analysis and Knowledge Translation',
  'Data Governance and Quality Management',
  'Performance Monitoring and Results-Based Management',
  'Strategic Partnerships and Stakeholder Coordination',
  'Evidence-Based Decision Support and Program Optimization',
  'Grant Management, Technical Reporting and Resource Mobilization'
];

export default function About() {
  const compRef = useRef(null);

  useEffect(() => {
    const el = compRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="about">
      <div className="section__inner">
        <p className="section__label">About</p>
        <h2 className="section__title">Professional Summary</h2>
        <div className="section__divider" />

        <div className="about__grid">
          <div className="about__text">
            <p>
              Health and Operations professional with over 4 years experience in facility management,
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
              Holds of an MBA and currently pursuing a Masters of Data Science and a Masters in Epidemiology and Biostatistics, with a strong
              interest in Data Science, research, grants, and scalable development impact.
            </p>
          </div>

          <div className="about__competencies" ref={compRef}>
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
