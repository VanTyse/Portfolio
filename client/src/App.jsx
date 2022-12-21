import React, {useEffect, useRef, useState} from 'react'
import useInViewPort from './CustomHooks/useInViewPort'
import MyPhoto from './assets/images/my_photo_2.JPG'
import './App.css'
import { Link } from 'react-router-dom'
import useScrollDirection from './CustomHooks/useScrollDirection'

function Portfolio() {
    
  return (
    <div className='portfolio-container container'>
        <Header/>
        <PortfolioHero/>
        <AboutMeSection/>
        <ExperienceSummary/>
        <ProfessionalExperience/>
        <Projects/>
        <Skills/>
        <Education/>
    </div>
  )
}

function Header () {
    const {direction} = useScrollDirection()

    return (
        <header className={`header ${direction === 'up' ? 'show-header' : 'hide-header'}`}>
            <nav className='nav-items'>
                <NavItem item={'About Me'}/>
                <NavItem item={'Experience'}/>
                <NavItem item={'Projects'}/>
                <NavItem item={'Skills'}/>
                <NavItem item={'Education'}/>
            </nav>
        </header>
    )
}

const NavItem = ({item, index}) => {
    return (
        <div className="nav-item"> <a href={`#${item}`}>{item}</a></div>
    )
}

function PortfolioHero(){
    return(
        <div className="portfolio-hero">
            <div>
                <p className='hi-my-name-is' style={{color: 'var(--main-color)', marginBottom: '5px'}}>Hi, my name is</p>
                <h1>Kingsley Okafor.</h1>
                <h2>I build things for the web.</h2>
                <p>I'm a fullstack web developer building exceptional web experiences for the average user. 
                Currently, I'm open to remotely sharing my skills and services, so that your users have an even better experience on the web.
                </p>
                <a href={`/files/resume.pdf`} download><button className='btn'>Download My Resume!</button></a>
            </div>
        </div>
    )
}

function AboutMeSection(){
    const staticRef = useRef()
    const [ref, setRef] = useState({current : null})
    useInViewPort(ref)

    useEffect(() => {
        if (staticRef.current){
            setRef({current: staticRef.current})
        }
    }, [staticRef.current])

    return(
        <div ref={staticRef} className="about-me">
            <h4 className='sub-heading'><span>01.</span> About Me</h4>
            <div className='flex'>
                <div className="right image-container">
                    <div>
                        <div className="img-border"></div>
                        <img className='my-photo' src={MyPhoto} alt="" />
                        <div className="mask"></div>
                    </div>
                </div>
                <div className="left">
                    <p className='intro'>
                        Hello! My name is Kingsley and I enjoy creating things that live on the internet. Such a nice place. 
                        My interest in web development started back in 2019 when I wanted to wish my girlfriend a happy birthday <em>(in style)</em>.
                    </p>
                    <p className='intro'>
                        While I wouldn't do something so cheesy ever again, I have gone beyond that to building software that people
                        would love using. I have little professional work experience so far but have worked on personal projects like designing the algorithm for chess, 
                        making my own version of the <Link style={{textDecoration: 'none'}} to='/games/2048'><span>2048 game</span></Link> and even worked on building the UI for a startup as part of a team.
                    </p>
                    <p className='intro'>
                        When I am not handling pest control on my laptop, I am writing in whatever way I feel is fun at the time.
                    </p>
                </div>
            </div>
        </div>
    )
}

function ExperienceSummary(){
    const staticRef = useRef()
    const [ref, setRef] = useState({current : null})
    useInViewPort(ref)

    useEffect(() => {
        if (staticRef.current){
            setRef({current: staticRef.current})
        }
    }, [staticRef.current])
    const list = [
        'Substantial experience with SOLID principles.',
        'High ability to implement designs.',
        'High level of expertise in JavaScript language.',
        'Knowledge of important third-party libraries that make development easier and faster.',
        'Experience with Database Management Solutions.',
        'Knowledge of the complete MERN stack.',
        'Knowledge of UI/UX design principles.',
        'Experience publishing web applications to Netlify and Heroku.',
        'Experience using version control tool–Git.',
        'High level skills in building custom React UI components.',
        'Acceptable level skills building RESTful APIs performing CRUD operations.'
    ]

    return(
        <div ref={staticRef} className="experience-summary">
            <h4 className="sub-heading"><span>02. </span>Experience Summary</h4>
            <h6>Proficient experience in creating user friendly and highly optimized web applications, especially at the ‘frontend’ of things.</h6>
            <ul>
                {
                    list.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}

function ProfessionalExperience(){
    const [experienceId, setExperienceId] = useState(0)
    const staticRef = useRef()
    const [ref, setRef] = useState({current : null})
    useInViewPort(ref)

    useEffect(() => {
        if (staticRef.current){
            setRef({current: staticRef.current})
        }
    }, [staticRef.current])

    let experiences =[
        {
            id : '0',
            companyName : 'Foodsub Africa',
            website : 'https://foodsub.africa',
            workDone : ['Led a team of react developers to work on responsive user interfaces for the company’s web applications. The company’s users use the mobile application to use the company’s services, while the web applications are used by the staff to manage everything, like a really huge dashboard.',
                        'Was part of the backend team building robust and secure apis using node, express, websockets, and mongodb for the database.',
                        'Worked with a DevOps engineer to host the project on AWS.'   
                        ],
            duration: 'July 2022 - August 2022',
            role: 'Full Stack Developer - (Contract)'
        },
        {
            id : '1',
            companyName : 'Genesys Tech Hub',
            website : 'https://genesystechhub.com',
            workDone : ['Working with a small team to build  simple to slightly complex, responsive frontend web applications, while occasionally helping with the back.',
                        'Working with a larger array of technologies including Nodejs, expressjs, mongodb, heroku, netlify.'   
                        ],
            duration: 'September 2021 - April 2022',
            role: 'Full Stack Developer - (Intern)'
        },
        {
            id: '2',
            companyName : 'HNG',
            website : 'https://internship.zuri.team/',
            workDone : ['Handled building custom React UI components for a calendar and scheduler based web application using the Agile process.',
                        'Working with an array of technologies including React, Sass, CSS, TS, JS, html.'
                        ],
            duration: 'July 2020 – October 2020',
            role: 'Frontend Developer - (Intern)'
        }
    ]
    return(
        <section ref={staticRef} className="professional-experience-section">
            <h4 className="sub-heading"><span>03.</span> Where I've worked</h4>
            <div className="flex">
                <div className="nav">
                    <ul>
                        {
                            experiences.map(experience => {
                                const {companyName, id} = experience
                                return <li onClick={() => setExperienceId(id)} className={`${(experienceId == id) && 'active'}`} key={id}>{companyName}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="details">
                    {
                        experiences.map((experience) => {
                            const {id} = experience
                            return <ExperienceDetails experienceId={experienceId} {...experience} key={id}/>
                        })
                    }
                    <div className="add-height">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa sapiente eveniet deserunt aspernatur eos corporis recusandae doloremque possimus placeat delectus veniam inventore maxime libero, alias consequuntur voluptates commodi quasi perspiciatis laudantium fuga, unde omnis ipsa! Nemo magni magnam voluptatem odio, perspiciatis architecto ut facere possimus in quia sint alias error nulla nesciunt cum exercitationem fugit impedit ducimus quos neque repellendus porro! Neque doloremque laborum libero? Ea placeat nesciunt ipsa.
                    </div>
                </div>
            </div>
        </section>
    )
}

function ExperienceDetails({companyName, duration, role, workDone, experienceId, id}){
    return(
        <div className={`detail ${experienceId==id && 'show'}`}>
            <h5 className="role">{role}  <span> @ {companyName}</span></h5>
            <h6 className="duration">{duration}</h6>
            <ul>
            {
                workDone.map(item => {
                    return <li>{item}</li>
                })
            }
            </ul>
        </div>
    )
                
}

function Projects(){
    const staticRef = useRef()
    const [ref, setRef] = useState({current : null})
    useInViewPort(ref)

    useEffect(() => {
        if (staticRef.current){
            setRef({current: staticRef.current})
        }
    }, [staticRef.current])

    return(
        <div ref={staticRef} className="projects-container">
            <h4 className="sub-heading"><span>04. </span>Projects I've worked on</h4>
            <div className="projects container">
             {
                projectsArray.map((project, index) => <Project key={index} {...project} />)
             }   
            </div>
        </div>
    )
}

function Project({projectName, desc, externalLink, githubLink, skills}){
    const staticRef = useRef()
    const [ref, setRef] = useState({current : null})
    useInViewPort(ref)

    useEffect(() => {
        if (staticRef.current){
            setRef({current: staticRef.current})
        }
    }, [staticRef.current])

    return(
        <div className="project">
            <div>
                <div className="icons">
                    <span className='folder-icon'><i class="bi bi-folder"></i></span>
                    <div>
                        {githubLink && <span className="github-icon"><a href={githubLink}><i class="bi bi-github"></i></a></span>}
                        <span className="external-link-icon"><a target='_blank' href={externalLink}><i class="bi bi-box-arrow-up-right"></i></a></span>
                    </div>
                </div>
                <h5 className='project-name'>{projectName}</h5>
                <p>{desc}
                    <a href={externalLink} target='_blank'>here.</a>
                </p>
            </div>
            <p className='skill-array'>
                {
                    skills.map(skill => <span>{skill}</span>)
                }
            </p>
        </div>
    )
}

function Skills(){
    const staticRef = useRef()
    const [ref, setRef] = useState({current : null})
    useInViewPort(ref)

    useEffect(() => {
        if (staticRef.current){
            setRef({current: staticRef.current})
        }
    }, [staticRef.current])

    const hardSkills = ['react', 'node', 'express', 'mongodb', 'redux', 'bootstrap', 'sass', 'next', 'agile development', 'javaScript', 'github', 'git']
    const softSkills = ['problem-solving', 'critical-thinking', 'time-management', 'listening', 'collaboration', 'written communication']
    return(
        <div ref={staticRef} className="skills-container">
            <h4 className='sub-heading'><span>05. </span>Skills</h4>
            <div className='inner-container'>
                <div className="tech-skills">
                    <h5>Tech Skills</h5>
                    <div className="skills">
                    {
                        hardSkills.map((skill, index) => <Skill key={index} skill={skill}/>)
                    }
                    </div>
                </div>
                <div className="soft-skills">
                    <h5>Soft Skills</h5>
                    <div className="skills">
                    {
                        softSkills.map((skill, index) => <Skill key={index} skill={skill}/>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

function Skill({skill}){

    return(
        <div className="skill">
            {skill}
        </div>
    )
}

function Education(){
    const staticRef = useRef()
    const [ref, setRef] = useState({current : null})
    useInViewPort(ref)

    useEffect(() => {
        if (staticRef.current){
            setRef({current: staticRef.current})
        }
    }, [staticRef.current])

    return(
        <div ref={staticRef} className="education">
            <h4 className="sub-heading"><span>06. </span>Education</h4>
            <ul>
                <li>
                    <div>
                        <h5>University of Nigeria, Nsukka</h5>
                        <h6>Bsc. Computer Science</h6>
                        <p>2018 - 2022</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}



export default Portfolio


const projectsArray = [
    {
        'projectName': 'Vantyse',
        'desc': `This is a big personal project that displays my skills as a proficient MERN developer. This is a cross between a social media website, blog and game hub. It's a website where users can read content, play games and have personalized to-do lists. This portfolio page happens to rest on this domain, so use the nav at the top to check out the site `,
        'externalLink' : 'https://vantyse.com',
        'githubLink': 'https://github.com/VanTyse/Van_tyse',
        'skills': ['react', 'css', 'express', 'mongoose'],
    },
    {
        'projectName': 'Chess.com Clone',
        'desc': 'Recreated the UI for chess.com and the basic rules of play for the game. That is, how each piece moves, valid and invalid moves and checkmate. This shows my proficiency with OOP in JavaScript. The project has no backend. Check it out ',
        'externalLink' : 'http://vantyse-chess.netlify.app',
        'githubLink': 'https://github.com/vantyse/chess',
        'skills': ['html', 'css', 'vanilla js']
    },
    {
        'projectName': '2048 Game',
        'desc': 'This is a part of the vantyse project which I think is big enough to be viewed separately. This is a game of tiles, cells and numbers that is just fun. Play the game ',
        'externalLink' : 'https://vantyse.com/games/2048',
        'githubLink': 'https://github.com/VanTyse/Van_tyse/tree/main/frontend/src/routes/2048',
        'skills': ['react', 'css']
    },
    {
        'projectName': 'Foodsub Africa',
        'desc': 'This is the home page for the startup that I currently have a contract with. I am currently building more stuff for the startup that I am not allowed to share. This website however proves my expertise as a react developer. Check it out ',
        'externalLink' : 'https://www.foodsub.africa/',
        'githubLink': null,
        'skills': ['react', 'css']
    },
    {
        'projectName': 'Vantyse Docs',
        'desc': 'My resume was typed with google docs and this project is a google docs clone focusing more on the backend. In this project users are able to make documents, edit documents, delete documents and even collaborate on documents in real time. Log in and create a document, then open up an icognito window or use a different browser to test the ability to collaborate with a differet user ',
        'externalLink' : 'https://vantyse-docs.netlify.app/',
        'githubLink': 'https://github.com/VanTyse/vantyse_docs',
        'skills': ['react', 'css', 'expressjs', 'socket.io']
    },  
    {
        'projectName': 'Class_MGT App',
        
        'desc': 'This is an application tailored to managing the needs of student management in the classroom; complete with both backend and frontend.',
        'externalLink' : 'https://class-mgt.up.railway.app/',
        'githubLink': null,
        'skills': ['react', 'css', 'expressjs', 'socket.io']
    }
]
