import './Research.css';

export default function Research() {
  return (
    <section className="section" id="research">
      <div className="section__inner">
        <p className="section__label">Research &amp; Publications</p>
        <h2 className="section__title">Key Research Milestone</h2>
        <div className="section__divider" />

        <div className="research__highlight">
          <div className="research__who-badge">
            <span className="research__who-text">WHO</span>
            <span className="research__who-sub">World Health Organization</span>
          </div>

          <div className="research__body">
            <p className="research__tag">Published Research Paper &nbsp;·&nbsp; One of Four Contributors</p>
            <h3 className="research__paper-title">
              "COVID-19: A Retrospective Cross-Sectional Study of the Three Different Waves in Zambia"
            </h3>
            <p className="research__desc">
              Selected as one of four contributors to this World Health Organization–supported research
              paper examining the epidemiological patterns across Zambia's three COVID-19 waves.
              This work strengthened skills in applied epidemiology, scientific writing, and
              collaborative research at national level.
            </p>

            <div className="research__skills">
              {['Applied Epidemiology', 'Scientific Writing', 'Retrospective Study Design',
                'Cross-Sectional Analysis', 'National-Level Research', 'WHO Collaboration'].map(s => (
                <span key={s} className="research__skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="research__foundation">
          <h3 className="research__foundation-title">Research Foundation</h3>
          <p>
            Strong foundation in research and epidemiological analysis, with hands-on experience
            in study design, data collection, statistical analysis, and evidence synthesis.
            Research experience spans the Cancer Diseases Hospital and contributions to analytical
            work aligned with national and global health priorities.
          </p>
        </div>
      </div>
    </section>
  );
}
