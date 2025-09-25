import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    design: skills.filter(skill => skill.category === 'design'),
  };

  const getSkillLevel = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i < level ? 'bg-primary-500' : 'bg-gray-200'
        }`}
      />
    ));
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - More About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate developer with over 5 years of experience building 
                modern web applications. I love turning complex problems into simple, 
                beautiful, and intuitive solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the 
                latest trends in web development. My goal is to create applications 
                that not only look great but also provide exceptional user experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Let's Connect
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">Location:</span> {personalInfo.contact.location}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {personalInfo.contact.email}
                  </a>
                </p>
                {personalInfo.contact.phone && (
                  <p>
                    <span className="font-medium">Phone:</span>{' '}
                    <a
                      href={`tel:${personalInfo.contact.phone}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {personalInfo.contact.phone}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Skills & Technologies
            </h3>
            
            <div className="space-y-8">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                    {category}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <div className="flex space-x-1">
                          {getSkillLevel(skill.level)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
