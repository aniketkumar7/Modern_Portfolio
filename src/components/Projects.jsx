import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import BrowserFrame from "./BrowserFrame";
import { designs, earlier, projects } from "../data";

const Links = ({ live, code }) => (
    <div className="case-links">
        <a className="btn btn-solid" href={live} target="_blank" rel="noreferrer">
            Visit site <FiArrowUpRight />
        </a>
        <a className="btn" href={code} target="_blank" rel="noreferrer">
            <FiGithub /> Code
        </a>
    </div>
);

function Case({ p, i }) {
    return (
        <motion.article
            className="case"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <header className="case-head">
                <span className="case-index mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="case-title">
                    <h3 className="case-name">{p.name}</h3>
                    <p className="case-meta mono">{p.type} · {p.year}</p>
                </div>
                <Links live={p.live} code={p.code} />
            </header>
            <BrowserFrame src={p.image} url={p.live} alt={`${p.name} website`} />
            <div className="case-details">
                <p className="case-one">{p.oneLiner}</p>
                <div>
                    <ul className="case-points">
                        {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                    <div className="chips">
                        {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    return (
        <>
            <div className="cases">
                {projects.map((p, i) => <Case key={p.name} p={p} i={i} />)}
            </div>

            <h3 className="sub-title">Earlier work</h3>
            <div className="earlier">
                {earlier.map((p) => (
                    <article key={p.name} className="earlier-card">
                        <BrowserFrame src={p.image} url={p.live} alt={`${p.name} website`} compact />
                        <div className="earlier-body">
                            <div className="earlier-head">
                                <h4>{p.name}</h4>
                                <span className="mono faint">{p.year}</span>
                            </div>
                            <p>{p.blurb}</p>
                            <div className="earlier-links mono">
                                <a href={p.live} target="_blank" rel="noreferrer">live ↗</a>
                                <a href={p.code} target="_blank" rel="noreferrer">code ↗</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <p className="designs mono faint">
                Design explorations:{" "}
                {designs.map((d, i) => (
                    <span key={d.name}>
                        <a href={d.href} target="_blank" rel="noreferrer">{d.name}</a>
                        {i < designs.length - 1 && " · "}
                    </span>
                ))}
            </p>
        </>
    );
}
