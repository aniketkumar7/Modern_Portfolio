import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Folder from "./Folder";
import { designs, projects, profile } from "../data";

export default function ProjectFolders() {
    const [openIdx, setOpenIdx] = useState(null);
    const open = openIdx === null ? null : projects[openIdx];

    // Warm the cache so an opened folder shows its screenshot instantly
    useEffect(() => {
        projects.forEach((p) => { new Image().src = p.image; });
    }, []);

    return (
        <>
            <div className="folders">
                {projects.map((p, i) => (
                    <Folder
                        key={p.name}
                        {...p}
                        open={openIdx === i}
                        onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    />
                ))}
                <a className="folder-more" href={profile.links[0].href} target="_blank" rel="noreferrer">
                    <Folder name="more on github" placeholder tint="#a39d91" />
                </a>
            </div>

            <AnimatePresence mode="wait" initial={false}>
                {open && (
                    <motion.article
                        key={open.name}
                        className="project"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <a className="project-shot" href={open.live} target="_blank" rel="noreferrer">
                            <img src={open.image} alt={`${open.name} screenshot`} />
                        </a>
                        <div className="project-body">
                            <div className="project-head">
                                <h3 className="project-name">{open.name}</h3>
                                <span className="mono faint">{open.year}</span>
                            </div>
                            <p>{open.blurb}</p>
                            <div className="chips">
                                {open.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                            </div>
                            <div className="project-links">
                                <a href={open.live} target="_blank" rel="noreferrer">live ↗</a>
                                <a href={open.code} target="_blank" rel="noreferrer">code ↗</a>
                                <button type="button" onClick={() => setOpenIdx(null)}>close</button>
                            </div>
                        </div>
                    </motion.article>
                )}
            </AnimatePresence>

            <p className="designs mono faint">
                design explorations:{" "}
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
