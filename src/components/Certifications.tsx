import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCertificate } from "react-icons/fa6";
import { CERTIFICATIONS } from "../data/portfolioData";
import "./styles/Certifications.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="certifications-section"
      id="certifications"
    >
      <div className="certifications-header">
        <motion.h2
          className="certifications-title"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        <motion.p
          className="certifications-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Professional certifications in AI, Data Science, and Machine Learning.
        </motion.p>
      </div>

      <motion.div
        className="certifications-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {CERTIFICATIONS.map((cert) => (
          <motion.div
            key={cert.id}
            className="certification-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="certification-card-glow" aria-hidden />
            <div className="certification-card-inner">
              <div className="certification-card-header">
                <span className="certification-badge" aria-hidden>
                  <FaCertificate />
                </span>
                <h3 className="certification-name">{cert.name}</h3>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-btn"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
