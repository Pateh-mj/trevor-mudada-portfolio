import './Training.css';

const categories = [
  {
    group: 'Health & Epidemiology',
    icon: '🏥',
    items: [
      {
        title: 'Applied Epidemiology & Outbreak Investigation',
        issuer: 'Placeholder — e.g. WHO / Africa CDC',
        year: '2023',
        credentialLink: null,
      },
      {
        title: 'Introduction to Epidemiology and Public Health',
        issuer: 'Placeholder — e.g. Coursera / Johns Hopkins',
        year: '2022',
        credentialLink: null,
      },
      {
        title: 'Health Systems Strengthening',
        issuer: 'Placeholder — e.g. USAID / MOH Zambia',
        year: '2022',
        credentialLink: null,
      },
      {
        title: 'Infection Prevention and Control (IPC)',
        issuer: 'Placeholder — e.g. WHO',
        year: '2021',
        credentialLink: null,
      },
    ],
  },
  {
    group: 'Data, Analytics & Research',
    icon: '📊',
    items: [
      {
        title: 'Data Analysis with STATA',
        issuer: 'Placeholder — e.g. StataCorp / Online Course',
        year: '2023',
        credentialLink: null,
      },
      {
        title: 'R Programming for Data Science',
        issuer: 'Placeholder — e.g. Coursera / DataCamp',
        year: '2022',
        credentialLink: null,
      },
      {
        title: 'Power BI — Data Visualisation & Reporting',
        issuer: 'Placeholder — e.g. Microsoft / Udemy',
        year: '2023',
        credentialLink: null,
      },
      {
        title: 'DHIS2 — Health Data Management',
        issuer: 'Placeholder — e.g. HISP / University of Oslo',
        year: '2021',
        credentialLink: null,
      },
    ],
  },
  {
    group: 'Management & Leadership',
    icon: '💼',
    items: [
      {
        title: 'Branch Operations & Compliance Management',
        issuer: 'Placeholder — e.g. Zambia Industrial Commercial Bank',
        year: '2020',
        credentialLink: null,
      },
      {
        title: 'Facilities & Operations Management',
        issuer: 'Placeholder — e.g. Professional Institute',
        year: '2021',
        credentialLink: null,
      },
      {
        title: 'Project Management Fundamentals',
        issuer: 'Placeholder — e.g. PMI / Coursera',
        year: '2022',
        credentialLink: null,
      },
      {
        title: 'Quality Assurance in Health Environments',
        issuer: 'Placeholder — e.g. MOH / WHO',
        year: '2022',
        credentialLink: null,
      },
    ],
  },
];

export default function Training() {
  return (
    <section className="section" id="training">
      <div className="section__inner">
        <p className="section__label">Continuous Learning</p>
        <h2 className="section__title">Professional Training &amp; Development</h2>
        <div className="section__divider" />

        <div className="training__groups">
          {categories.map(({ group, icon, items }) => (
            <div className="training__group" key={group}>
              <div className="training__group-header">
                <span className="training__group-icon">{icon}</span>
                <h3 className="training__group-title">{group}</h3>
              </div>
              <div className="training__cards">
                {items.map(({ title, issuer, year, credentialLink }) => (
                  <div className="training__card" key={title}>
                    <div className="training__card-left">
                      <span className="training__year">{year}</span>
                    </div>
                    <div className="training__card-right">
                      <p className="training__cert-title">{title}</p>
                      <p className="training__issuer">{issuer}</p>
                      {credentialLink && (
                        <a
                          href={credentialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="training__verify-link"
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
