import './Education.css';

const degrees = [
  {
    degree: 'Master of Data Science',
    institution: 'In Progress',
    status: 'Currently Pursuing',
    focus: 'AI and Machine Learning, Statistical Modelling, Data Visualisation, and Scalable Data Solutions',
  },
  {
    degree: "Master's in Epidemiology and Biostatistics",
    institution: 'In Progress',
    status: 'Currently Pursuing',
    focus: 'Epidemiological methods, biostatistics, research design, and public health analytics',
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section__inner">
        <p className="section__label">Education</p>
        <h2 className="section__title">Academic Background</h2>
        <div className="section__divider" />

        <div className="edu__grid">
          {degrees.map(({ degree, institution, status, focus }) => (
            <div className="edu__card" key={degree}>
              <div className="edu__status-badge">{status}</div>
              <h3 className="edu__degree">{degree}</h3>
              <p className="edu__institution">{institution}</p>
              <p className="edu__focus">
                <strong>Focus:</strong> {focus}
              </p>
            </div>
          ))}
        </div>

        <div className="edu__interest">
          <p className="edu__interest-label">Research Interests</p>
          <p>
            Strong interest in research, grants, and scalable development impact. Committed to
            translating complex health and operational data into actionable insights for national
            and global health systems.
          </p>
        </div>
      </div>
    </section>
  );
}
