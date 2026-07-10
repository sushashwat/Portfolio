import useTypewriter from "../hooks/useTypewriter";

export default function Hero() {
  const boot = useTypewriter("$ whoami", 55, 400);

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-text">
          <p className="eyebrow">// full-stack mern developer</p>
          <h1>
            Shipping real products,
            <br />
            end to end.
          </h1>
          <p className="home-sub">
            I build and deploy complete web applications — frontend to database.
            Currently sharpening data structures & algorithms while preparing
            for placement interviews.
          </p>

          <div className="home-actions">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-diagram-project"></i> View Projects
            </a>
            <a
              href="/assets/ShashwatGupta_InternshalaResume.pdf"
              download
              className="btn btn-ghost"
            >
              <i className="fa-solid fa-download"></i> Resume
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/sushashwat"
              className="icon"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shashwat-gupta-4288a3321/"
              className="icon"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/Shashwat_ig"
              className="icon"
              target="_blank"
              rel="noopener"
              aria-label="X (Twitter)"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/sushashwat/"
              className="icon"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="home-visual">
          <div
            className="term-window"
            role="img"
            aria-label="Code editor showing a developer profile object"
          >
            <div className="term-bar">
              <div className="term-dots">
                <span className="dot dot-r"></span>
                <span className="dot dot-y"></span>
                <span className="dot dot-g"></span>
              </div>
              <div className="term-tab">about-me.js</div>
            </div>
            <div className="term-body">
              <p className="term-line boot-line">{boot}</p>
              <p className="code-line">
                <span className="tok-kw">const</span>{" "}
                <span className="tok-var">developer</span>{" "}
                <span className="tok-punc">=</span> <span className="tok-punc">{"{"}</span>
              </p>
              <p className="code-line indent">
                <span className="tok-key">name</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-str">"Shashwat Gupta"</span>
                <span className="tok-punc">,</span>
              </p>
              <p className="code-line indent">
                <span className="tok-key">role</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-str">"Full-Stack MERN Developer"</span>
                <span className="tok-punc">,</span>
              </p>
              <p className="code-line indent">
                <span className="tok-key">stack</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-punc">[</span>
                <span className="tok-str">"React"</span>
                <span className="tok-punc">,</span>{" "}
                <span className="tok-str">"Node"</span>
                <span className="tok-punc">,</span>{" "}
                <span className="tok-str">"Express"</span>
                <span className="tok-punc">,</span>{" "}
                <span className="tok-str">"MongoDB"</span>
                <span className="tok-punc">],</span>
              </p>
              <p className="code-line indent">
                <span className="tok-key">deployed</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-num">2</span>
                <span className="tok-punc">,</span>{" "}
                <span className="tok-key">learning</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-str">"DSA"</span>
                <span className="tok-punc">,</span>
              </p>
              <p className="code-line indent">
                <span className="tok-key">status</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-str">"open to opportunities"</span>
              </p>
              <p className="code-line">
                <span className="tok-punc">{"};"}</span>
              </p>
              <p className="term-line result-line">
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
