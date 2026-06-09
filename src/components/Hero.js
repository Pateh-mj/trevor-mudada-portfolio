import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="section__inner hero__inner">

        <div className="hero__text">
          <p className="hero__eyebrow">Health &amp; Operations &nbsp;·&nbsp; Epidemiology &nbsp;·&nbsp; Data Analytics</p>

          <h1 className="hero__name">
            Trevor<br />
            <span className="hero__name-blue">Mudada</span>
          </h1>

          <p className="hero__subtitle">
            Health &amp; Operations Professional &nbsp;|&nbsp; Epidemiologist &nbsp;|&nbsp; Data Analyst
          </p>

          <p className="hero__bio">
            Bridging frontline health operations with rigorous epidemiological research.
            With over 3 years of experience across health and corporate environments —
            and a contribution to a WHO-supported national study — I translate complex
            data into decisions that improve systems, patient outcomes, and organisational performance.
          </p>

          <div className="hero__ctas">
            <a href="#about" className="hero__btn hero__btn--primary">View Profile</a>
            <a href="#contact" className="hero__btn hero__btn--outline">Get In Touch</a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo">
            <img src="/photo2.jpg" alt="Trevor Mudada" />
          </div>
          <div className="hero__photo-badge">
            <strong>WHO</strong>
            <span>Research Contributor</span>
          </div>
        </div>

      </div>

      <div className="hero__stats">
        <div className="section__inner hero__stats-inner">
          {[
            { value: '3+',    label: 'Years in Health & Operations' },
            { value: 'WHO',   label: 'Published Research Contributor' },
            { value: '6+',    label: 'Data & Analytics Tools' },
            { value: 'MBA',   label: '+ MSc Epidemiology (In Progress)' },
          ].map(({ value, label }) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-val">{value}</span>
              <span className="hero__stat-lbl">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
