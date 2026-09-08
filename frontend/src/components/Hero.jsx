import { motion } from "framer-motion";

export default function Hero({ theme, isIntroDone }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className={`editorial-hero ${
        theme === "dark" ? "editorial-dark" : "editorial-light"
      }`}
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="editorial-background" />

      <div className="editorial-noise" />

      {/* =========================================
          DECORATIVE DOTS
      ========================================= */}

      <div className="editorial-dots">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* =========================================
          GIANT BACKGROUND WORD
      ========================================= */}

      <motion.div
        className="editorial-giant-word"
        initial={{
          opacity: 0,
          x: 120,
        }}
        animate={
          isIntroDone
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: 120,
              }
        }
        transition={{
          duration: 1.3,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        SYSTEMS
      </motion.div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <motion.div
        className="editorial-main"
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={
          isIntroDone
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: 80,
              }
        }
        transition={{
          duration: 1,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* SMALL LABEL */}

        <motion.div
          className="editorial-label"
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={
            isIntroDone
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: -30,
                }
          }
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          SOFTWARE ENGINEER
        </motion.div>

        {/* =====================================
            TITLE
        ===================================== */}

        <div className="editorial-heading">
          <motion.h1
            className="editorial-title-green"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={
              isIntroDone
                ? {
                    x: 0,
                    opacity: 1,
                  }
                : {
                    x: -100,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.85,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            FULL-STACK
          </motion.h1>

          <motion.h1
            className="editorial-title-white"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={
              isIntroDone
                ? {
                    x: 0,
                    opacity: 1,
                  }
                : {
                    x: -100,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.85,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            DEVELOPER
          </motion.h1>
        </div>

        {/* =====================================
            DESCRIPTION
        ===================================== */}

        <motion.p
          className="editorial-description"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isIntroDone
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
        >
          Hi! I'm <strong>Diya</strong>. I build high-performance, scalable web
          applications and intelligent systems with a focus on clean experiences
          and practical solutions.
        </motion.p>

        {/* =====================================
            CTA
        ===================================== */}

        <motion.div
          className="editorial-actions"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            isIntroDone
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="editorial-talk-button"
          >
            LET'S TALK
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="editorial-work-button"
          >
            VIEW MY WORK →
          </button>
        </motion.div>

        {/* =====================================
            AVAILABILITY
        ===================================== */}

        <motion.div
          className="editorial-availability"
          initial={{
            opacity: 0,
          }}
          animate={
            isIntroDone
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.6,
            delay: 1,
          }}
        >
          <span />
          Available for internships & software development opportunities
        </motion.div>
      </motion.div>

      {/* =========================================
          RIGHT SIDE INFORMATION
      ========================================= */}

      <motion.div
        className="editorial-side-info"
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={
          isIntroDone
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: 50,
              }
        }
        transition={{
          duration: 0.8,
          delay: 0.7,
        }}
      >
        <span>Frontend</span>
        <span>•</span>
        <span>Backend</span>
        <span>•</span>
        <span>Full Stack</span>
        <span>•</span>
        <span>DSA</span>
      </motion.div>

      {/* =========================================
          VERTICAL EMAIL
      ========================================= */}

      <motion.div
        className="editorial-email"
        initial={{
          opacity: 0,
        }}
        animate={
          isIntroDone
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 0.8,
          delay: 0.9,
        }}
      >
        diyapareta23@gmail.com
      </motion.div>

      {/* =========================================
          DECORATIVE BLACK BLOCKS
      ========================================= */}

      <motion.div
        className="editorial-block editorial-block-top"
        initial={{
          x: 250,
        }}
        animate={
          isIntroDone
            ? {
                x: 0,
              }
            : {
                x: 250,
              }
        }
        transition={{
          duration: 1.1,
          delay: 0.1,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      <motion.div
        className="editorial-block editorial-block-middle"
        initial={{
          x: 350,
        }}
        animate={
          isIntroDone
            ? {
                x: 0,
              }
            : {
                x: 350,
              }
        }
        transition={{
          duration: 1.1,
          delay: 0.25,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      <motion.div
        className="editorial-block editorial-block-bottom"
        initial={{
          x: 450,
        }}
        animate={
          isIntroDone
            ? {
                x: 0,
              }
            : {
                x: 450,
              }
        }
        transition={{
          duration: 1.1,
          delay: 0.4,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </section>
  );
}
