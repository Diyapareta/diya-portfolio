import { motion } from "framer-motion";

export default function Intro({ onComplete }) {
  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 1,
        transition: {
          duration: 0,
        },
      }}
      onAnimationComplete={() => {}}
    >
      {/* Background glow */}
      <motion.div
        className="intro-glow intro-glow-one"
        exit={{
          scale: 4,
          opacity: 0,
          transition: {
            duration: 1.1,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      />

      <motion.div
        className="intro-glow intro-glow-two"
        exit={{
          scale: 4,
          opacity: 0,
          transition: {
            duration: 1.1,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      />

      {/* Top label */}

      <motion.div
        className="intro-label"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        exit={{
          opacity: 0,
        }}
      >
        PORTFOLIO
      </motion.div>

      {/* Main intro */}

      <div className="intro-center">
        <motion.div
          className="intro-overline"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          exit={{
            x: -300,
            opacity: 0,
            transition: {
              duration: 0.7,
            },
          }}
        >
          FULL-STACK
        </motion.div>

        <div className="intro-name-container">
          {/* DIYA */}

          <motion.h1
            className="intro-name intro-name-dark"
            initial={{
              x: -150,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            exit={{
              x: "-115vw",
              scale: 1.35,
              opacity: 0,
              transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >
            DIYA
          </motion.h1>

          {/* PARETA */}

          <motion.h1
            className="intro-name intro-name-gradient"
            initial={{
              x: 150,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            exit={{
              x: "115vw",
              scale: 1.35,
              opacity: 0,
              transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >
            PARETA
          </motion.h1>

          {/* Giant background word */}

          <motion.div
            className="intro-background-name"
            initial={{
              x: "-15%",
              opacity: 0,
            }}
            animate={{
              x: "5%",
              opacity: 0.08,
            }}
            transition={{
              duration: 1.4,
              delay: 0.45,
            }}
            exit={{
              scale: 2.5,
              x: "-10%",
              opacity: 0,
              transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >
            PARETA
          </motion.div>
        </div>

        {/* Description */}

        <motion.p
          className="intro-description"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.9,
          }}
          exit={{
            opacity: 0,
            y: 30,
          }}
        >
          I BUILD INTELLIGENT SYSTEMS
        </motion.p>
      </div>

      {/* Side text */}

      <motion.div
        className="intro-side-text"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        SCROLL TO EXPLORE
      </motion.div>

      {/* Progress */}

      <motion.div
        className="intro-progress"
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 2.4,
          ease: "linear",
        }}
        onAnimationComplete={onComplete}
      />
    </motion.div>
  );
}
