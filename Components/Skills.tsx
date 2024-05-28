import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'
import ExperienceItems from './ExperienceItems'
import exp_1 from '../public/images/exp1.png'
import Image from 'next/image'

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">Education & <span className="text-yellow-400">Skill</span></h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillsItem title="Bachelor of Technology" year="2019 - 2023"
                        body="in Computer Science<li>
                            from Poornima College of Engineering<li>
                            achieved an Honours Degree<li>
                            with a CGPA of 9.2" />
                    <SkillsLanguage
                        skill1="html"
                        skill2="css"
                        skill3="javascript"
                        level1="w-[91%]"
                        level2="w-[80%]"
                        level3="w-[80%]" />
                </div>
                <div>
                    <SkillsItem title="CERTIFICATIONS" year="2019 -2022"
                        body="NPTEL : Programming in Java<li>
                            Microsoft Certified: Azure AI Fundamentals<li>
                            Coursera: HTML, CSS, and Javascript for Web Developers
                        "/>
                    <SkillsLanguage
                        skill1="Angular"
                        skill2="Node"
                        skill3="React"
                        level1="w-[80%]"
                        level2="w-[81%]"
                        level3="w-[65%]" />
                </div>
            </div>
            <h1 className="heading">Work <span className="text-yellow-400">Experience</span></h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <ExperienceItems year='2023 - present' title='Associate Software Engineer' body='RoboMQ - An API and data integration company behind some of the leading- edge technologies and platforms that enable enterprises to build business processes and automate their operations using best of breed cloud, SaaS, and on-premise applications.' />
                </div>
                <div style={{ position: 'relative', bottom: '72px', height: '63%', width: '48%', objectFit: 'contain', color: 'transparent' }}>
                    <Image src={exp_1.src} alt="company_icon" layout="fill" objectFit="contain" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    )
}

export default Skills