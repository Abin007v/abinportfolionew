import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; 

import project1 from "./images/project-1.jpeg";
import projectObj from "./data/projectsObj";
import skillobj from "./data/skills";
import profilepic from "./data/profilepic/portfolioPic.jpg";
import vid from "./videos/jsvid.mp4";
import SocialLinks from "./links/SocialLinks";

function Index() {
  const aboutImg =
    "https://res.cloudinary.com/dykmiet9x/image/upload/v1646158420/yjnuq4pbqpyhsrvoiudj.jpg";
  const about =
    " I am an self taught developer, having good knowledge in frontend & backend architecture, worked on multiple core technologies like (html,css,JavaScript,react,NodeJs,ExpressJs,MongoDB). Interest in learning more web technologies & Web Security automation testing to find vulnerabilities in the systems. And besides, I am an active open-source contributor on my GitHub to share my work with developers.  I have started pursuing my interest in web development after having a solid background in coding, to know more about security vulnerabilities and follow the best coding practices to secure the platforms. I am participating and doing more projects to get hands-on experience";


  
  // Refs for each section
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);


 

  useEffect(() => {
    // Simulate minimum loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Animation variants for the loading screen
  const loadingVariants = {
    initial: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the main content
  const contentVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        <motion.div
          key="loader"
          variants={loadingVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 bg-[#fef9e7] flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1, 1, 0.5],
              opacity: [0, 1, 1, 0],
              rotate: [0, 0, 180, 180]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0
            }}
            className="w-20 h-20 border-4 border-[#feb649] rounded-full border-t-transparent"
          />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          {/* profile sction */}
          <motion.header 
            variants={childVariants}
            ref={headerRef}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            className="bg-[#fef9e7] cursor-pointer"
          >
            <div className="w-[90vw] mx-auto max-w-[1170px] min-h-[calc(100vh-5rem)] grid place-items-center md:grid-cols-2 md:gap-8">
              <motion.article
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4
                }}
              >
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "5rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 mb-5 bg-[#feb649] ml-0"
                />
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-5xl md:text-6xl capitalize tracking-[0.25rem] leading-tight mb-3 font-['Roboto']"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    i'm
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="text-[#feb649]"
                  >
                    abin
                  </motion.span>
                </motion.h1>
                <motion.h4 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-sm md:text-base text-[#617d98] mb-6 tracking-[0.25rem]"
                >
                  Full-stack webdevoloper
                </motion.h4>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Link 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToContact();
                    }}
                    className="uppercase bg-[#feb649] text-[#453227] px-3 py-1.5 tracking-[0.25rem] inline-block font-bold transition-all duration-300 text-sm border-2 border-transparent cursor-pointer shadow-md rounded-md hover:bg-[#fecd7b] hover:text-[#453227]"
                  >
              hire me
            </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <SocialLinks />
                </motion.div>
              </motion.article>
              
              <motion.article 
                className="hidden md:block relative"
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.4
                }}
              >
                <motion.img 
                  src={profilepic} 
                  className="max-w-[25rem] h-[30rem] object-cover rounded-md relative z-10" 
                  alt="profile"
                  variants={{
                    initial: { 
                      x: 0, 
                      y: 0,
                      scale: 1,
                      rotate: 0
                    },
                    hover: { 
                      x: "2rem",
                      y: "2rem",
                      scale: 1.05,
                      rotate: 2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }
                  }}
                />
                <motion.div 
                  className="absolute w-full h-full border-4 border-[#feb649] top-8 right-[-2rem] rounded-md"
                  variants={{
                    initial: {
                      opacity: 0.5,
                      scale: 1.05,
                      rotate: 0
                    },
                    hover: {
                      opacity: 1,
                      scale: 1,
                      rotate: -2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }
                  }}
                />
              </motion.article>
            </div>
          </motion.header>
           {/* about me section */}
          <motion.section 
            variants={childVariants}
            ref={aboutRef}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            className="py-20 cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-[90vw] mx-auto max-w-[1170px] grid gap-12 md:grid-cols-2 items-center"
            >
              <motion.article 
                className="relative w-fit"
                initial={{ opacity: 0, scale: 0.8, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.4
                }}
              >
                <motion.img 
                  src={aboutImg} 
                  className="max-w-[25rem] h-[30rem] object-cover rounded-md relative z-10" 
                  alt="about"
                  variants={{
                    initial: { 
                      x: 0, 
                      y: 0,
                      scale: 1,
                      rotate: 0
                    },
                    hover: { 
                      x: "-2rem",
                      y: "2rem",
                      scale: 1.05,
                      rotate: -2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }
                  }}
                />
                <motion.div 
                  className="absolute w-full h-full border-4 border-[#feb649] top-8 -left-8 rounded-md"
                  variants={{
                    initial: {
                      opacity: 0.5,
                      scale: 1.05,
                      rotate: 0
                    },
                    hover: {
                      opacity: 1,
                      scale: 1,
                      rotate: 2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }
                  }}
                />
              </motion.article>
              
              <motion.article
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.6
                }}
              >
                <motion.div 
                  className="text-center md:text-left mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-4xl capitalize tracking-[0.25rem] leading-tight mb-3 font-['Roboto']">
                    about
                  </h2>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="h-1 bg-[#feb649] mx-auto md:mx-0"
                  />
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-[#617d98] mb-5"
                >
                  {about}
                </motion.p>
              </motion.article>
            </motion.div>
          </motion.section>
           {/* projects section */}
          <motion.section 
            variants={childVariants}
            ref={projectsRef}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="py-20"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl capitalize tracking-[0.25rem] leading-tight mb-3 font-['Roboto']">
                Projects
              </h2>
              <div className="w-20 h-1 bg-[#feb649] mx-auto"></div>
            </motion.div>

            <div className="flex flex-col items-center">
              {projectObj.map((item, id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: id * 0.2 }}
                  className="w-[70%] mb-8"
                >
                  <Link to={item.ProjectGitLink}>
                    <motion.article 
                      className="relative bg-[#feb649] rounded-md group overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <img
                        src={item.image}
                        alt="project"
                        className="h-60 w-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-10"
                      />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-white">{item.text}</p>
                  </div>
                    </motion.article>
              </Link>
                </motion.div>
              ))}
        </div>
          </motion.section>
           {/* skills section */}
          <motion.section 
            variants={childVariants}
            ref={skillsRef}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            className="py-20 bg-[#fef9e7]"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl capitalize tracking-[0.25rem] leading-tight mb-3 font-['Roboto']">
                skills
              </h2>
              <div className="w-20 h-1 bg-[#feb649] mx-auto"></div>
            </motion.div>
            
            <div className="w-[90vw] mx-auto max-w-[1170px] grid gap-8 md:grid-cols-2">
              {skillobj.map((item, id) => (
                <motion.article 
                  key={id}
                  initial={{ opacity: 0, x: id % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: id * 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl mb-6 text-[#453227]">{item.name}</h3>
                  {item.skillatributes.map((x, i) => (
                    <motion.div 
                      key={i}
                      initial={{ width: 0 }}
                      whileInView={{ width: x.percentage }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="mb-5"
                    >
                      <p className="capitalize mb-2 text-[#453227]">{x.skillname}</p>
                      <div className="h-4 bg-white rounded-md">
                        <div 
                          className={`h-full bg-[#feb649] rounded-md relative`}
                          style={{ width: x.percentage }}
                        >
                          <span className="absolute -top-8 transform -translate-x-1/2 text-[#453227] left-full top-[0.8rem]" >
                            {x.percentage}
                          </span>
        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.article>
              ))}
                    </div>
          </motion.section>

          {/* contact section */}
          <motion.section 
            variants={childVariants}
            ref={contactRef}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            className="relative min-h-[40vh] py-40"
          >
        <video
          autoPlay
          muted
          loop
              className="absolute inset-0 w-full h-full object-cover -z-20"
          poster={project1}
        >
          <source src={vid} type="video/mp4" />
        </video>
            
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                bounce: 0.3
              }}
              className="bg-[#fef9e7] p-12 text-center rounded-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto clip-path-polygon"
            >
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-4xl capitalize tracking-[0.25rem] leading-tight mb-3 font-['Roboto']">
                  let's get in touch
                </h2>
                <div className="w-20 h-1 bg-[#feb649] mx-auto"></div>
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mx-auto px-4"
              >
                <div className="flex flex-col items-center justify-center gap-2 text-[#617d98] text-lg mb-4">
                  <span>If you are looking to get ahold of me, you can send me an email at</span>
                  <motion.a 
                    href="mailto:abinvv9108834737@gmail.com" 
                    className="text-[#feb649] uppercase hover:text-[#453227] transition-colors duration-300 break-all text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    abinvv9108834737@gmail.com
                  </motion.a>
          </div>

                <div className="flex flex-col items-center justify-center gap-2 text-[#617d98] text-lg mb-4">
                  <span>You can also reach me on LinkedIn at</span>
                  <motion.a 
                    href="https://www.linkedin.com/in/abin-vinod-a50b65227"
                    className="text-[#feb649] uppercase hover:text-[#453227] transition-colors duration-300 break-all text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Abin Vinod
                  </motion.a>
        </div>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.footer 
            variants={childVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pb-8 bg-[#222] grid place-items-center"
          >
        <SocialLinks />
            <p className="text-lg capitalize text-[#feb649]">
              &copy; <span id="date">{new Date().getFullYear()}</span> abin v v. all rights reserved
            </p>
          </motion.footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Index;
