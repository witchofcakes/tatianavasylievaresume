import React, { useState } from 'react';
import english from "../images/english.png"
import polish from "../images/polish.png"
import ukrainian from "../images/ukrainian.png"
import russian from "../images/russian.png"
import medal from "../images/medal.png"
import heart from "../images/heart.png"
import arrowDown from "../images/arrow.png"
import arrowUp from "../images/arrowUp.png"

export default function Landing() {

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
        <>
            <div className="body-landing">
                <div className="row">
                    <div className="col-12">
                                <div className="rounded-greeting-block">
                                    <div className="image-main-div">
                                        <div className={"circle-image"}/>
                                        <div className="image-div">
                                            {/*<img src={profile} className="image-profile"/>*/}
                                        </div>
                                    </div>
                                    <div className="greetings-div">
                                        <div className="title-greeting">
                                            <p className="title-greeting-text">Tatiana Vasylieva</p>
                                        </div>
                                        <div className="title-greeting-2">
                                            <p className="position-greeting-text">Entrepreneur</p>
                                        </div>
                                        <div className="title-greeting-3">
                                            <p className="email-greeting-text">tanyavasylieva01@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 about-me-block">
                        <div className="about-me-div">
                            <p className="about-me-text">
                                I am an <b>Enterpreneur</b> with expertise in <b>Project Management, UI/UX design, Performance Marketing, Front-end development</b>. Successfully created <b>6 business projects</b> since 14 yrs old. Worked in the #1 telecom Ukrainian company as data analyst, also in freelance as designer. Speaking 4 languages.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-div">
                            <p className="section-title-text">6 business projects</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                                <div className="projects-block-div red-border">
                                    <div className="project-title">
                                        Highers
                                    </div>
                                    <div className="project-achievements red-text">
                                        Clients: Coca-Cola,  Deloitte, Danone & 46 more; 900K+ media reach
                                    </div>
                                    <div className="project-short-description">
                                        service for advertising career offers among Gen Z
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                                <div className="projects-block-div blue-border">
                                    <div className="project-title">
                                        Project for UNICEF
                                    </div>
                                    <div className="project-achievements blue-text">
                                        317 mass media, TV and radio channels told about the project
                                    </div>
                                    <div className="project-short-description">
                                        online interactive lessons about COVID-19 for children
                                    </div>
                                </div>
                            </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-block-div pink-border">
                            <div className="project-title">
                                Music festival
                            </div>
                            <div className="project-achievements pink-text">
                                2600+ paying visitors, organized with no budget
                            </div>
                            <div className="project-short-description">
                                festival in one of the most famous Kyiv’s clubs
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="more-button-container">
                        <button onClick={onClick} className="button-more-projects">
                            {
                                isActive ?
                                    <img src={arrowUp} className="arrow-more" alt={"Arrow up"}/>
                                    :
                                    <img src={arrowDown} className="arrow-more" alt={"Arrow down"}/>
                            }
                            3 more projects
                        </button>
                    </div>
                </div>

                {
                    isActive ?
                        <>
                            <div className="row margin-top-more-projects">
                                <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                                    <div className="projects-block-div blue-border">
                                        <div className="project-title">
                                            Teamwork mobile app
                                        </div>
                                        <div className="project-achievements">
                                            Used by 12 companies • improved work of 140+ teams
                                        </div>
                                        {/*<div className="project-short-description">*/}
                                        {/*    service for advertising career offers among Gen Z candidates*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                                    <div className="projects-block-div pink-border">
                                        <div className="project-title">
                                            3x Career Festival for students
                                        </div>
                                        <div className="project-achievements">
                                            12000+ visitors • Visa, Pepsi, Nestle & 12 more companies took part
                                        </div>
                                        {/*<div className="project-short-description">*/}
                                        {/*    service for advertising career offers among Gen Z candidates*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                                    <div className="projects-block-div red-border">
                                        <div className="project-title">
                                            Education platform for questions & answers
                                        </div>
                                        <div className="project-achievements">
                                            Used by 4 top Kyiv's universities • 7000+ visits
                                        </div>
                                        {/*<div className="project-short-description">*/}
                                        {/*    service for advertising career offers among Gen Z candidates*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </>
                     : <></>
                }

                <div className="row">
                    <div className="col-12">
                        <div className="section-title-div">
                            <p className="section-title-text">Main skills</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 display-flex">
                        <div className="round-pill">
                            <p className="round-pill-text">Project Management</p>
                        </div>
                        <div className="round-pill">
                            <p className="round-pill-text">UI/UX design</p>
                        </div>
                        <div className="round-pill">
                            <p className="round-pill-text">Front-end development</p>
                        </div>
                        <div className="round-pill">
                            <p className="round-pill-text">Performance Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-div">
                            <p className="section-title-text">Education</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                        <div className="projects-block-div blue-border">
                            <div className="project-title">
                                Computer Science
                            </div>
                            <div className="project-short-description">
                                Bachelor’s degree, University of Kyiv-Mohyla Academy
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                        <div className="projects-block-div pink-border">
                            <div className="project-title">
                                WEVE New York Startup Accelerator
                            </div>
                            <div className="project-short-description">
                                +3 more startup accelerators
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-block-div red-border">
                            <div className="project-title">
                                GOOGLE Professional Certificates
                            </div>
                            <div className="project-short-description">
                                Project Management, Data Analytics, Marketing
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-div">
                            <p className="section-title-text">4 Languages</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 display-flex">
                        <div className="round-pill">
                            <p className="round-pill-text">
                                <img src={english} className="language-flag" alt={"English language"}/>
                                English • Fluent</p>
                        </div>
                        <div className="round-pill">
                            <p className="round-pill-text">
                                <img src={russian} className="language-flag" alt={"Russian language"}/>
                                Russian • Fluent</p>
                        </div>
                        <div className="round-pill">
                            <p className="round-pill-text">
                                <img src={polish} className="language-flag" alt={"Polish language"}/>
                                Polish • Advanced</p>
                        </div>
                        <div className="round-pill">
                            <p className="round-pill-text">
                                <img src={ukrainian} className="language-flag" alt={"Ukrainian language"}/>
                                Ukrainian • Native</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-div">
                            <p className="section-title-text">Jobs & More Activities</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                        <div className="projects-block-div red-border">
                            <div className="project-title">
                                Data Analyst in Kyivstar
                            </div>
                            <div className="project-short-description">
                                Analyzed data for #1 telecom company in Ukraine
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-projects-margin">
                        <div className="projects-block-div pink-border">
                            <div className="project-title">
                                Designer on Freelance
                            </div>
                            <div className="project-short-description">
                                Created 200+ graphic designs and videos
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-block-div blue-border">
                            <div className="project-title">
                                <img src={medal} className="medal-smiley" alt={"First place"}/>
                                <img src={medal} className="medal-smiley" alt={"First place"}/>
                                <img src={medal} className="medal-smiley" alt={"First place"}/>
                                <img src={medal} className="medal-smiley" alt={"First place"}/>
                                Swimming
                            </div>
                            <div className="project-short-description">
                                4 first place medals in Kyiv and Ukrainian competitions
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer-container">
                <div className="row">
                    <line className="footer-line"/>
                </div>
                <div className="row">
                    <div className="col-12 footer-text-div">
                        <p className="footer-text-big">
                            Made by Tatiana Vasylieva
                            <img src={heart} className="heart-smiley" alt={"Heart smiley"}/>
                        </p>
                        <p className="footer-text-small">year of 2022</p>
                    </div>
                </div>
            </div>
        </>
    );
}