"use client";

import LaserFlow from '@/components/LaserFlow';

export default function SkillsAndTech({ isPlayed }: { isPlayed: boolean }) {
    return (
        <>
            <div className="sknt grid" id="skills">
                <div className='backlight' >
                    {/* {
                        !isPlayed &&
                        <LaserFlow
                            wispDensity={1.6}
                            flowSpeed={1.3}
                            verticalSizing={10}
                            horizontalSizing={5}
                            fogIntensity={2}
                            fogScale={0.15}
                            wispSpeed={18}
                            wispIntensity={13.5}
                            flowStrength={0.15}
                            decay={1.1}
                            horizontalBeamOffset={0.3}
                            verticalBeamOffset={-0.5}
                        />
                    } */}
                </div>
                <section style={{ gridArea: '1/1' }}>
                    <div className="projects-header">
                        <h1>
                            <span className="projects-icon">
                                <i className="fa-solid fa-head-side-virus" />
                            </span>{" "}
                            Skills & <span className="text-purple">Technologies</span>
                        </h1>
                        <p>
                            <span className="dot-accent" />{" "}
                            <span className="text-purple">
                                Sharing some of the skills and technologies
                            </span>{" "}
                            {"Proficient in modern web and application development technologies, with experience in full-stack development and development tools."}
                        </p>
                    </div>
                    <div>

                        <ol>
                            <div>
                                <span><i className="fa-solid fa-flag"></i></span> Programming  & Markup
                            </div>
                            <ul>
                                <li>
                                    <i className="fa-brands fa-php"></i> <p>PHP</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-square-js"></i> <p>JavaScript</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-html5"></i> <p>HTML</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-css3-alt"></i> <p>CSS</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-database"></i> <p>SQL</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-java"></i> <p>Java</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-copyright"></i> <p>C & C++</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-dart-lang"></i> <p>Dart</p>
                                </li>
                            </ul>
                        </ol>

                        <ol>
                            <div>
                                <span><i className="fa-solid fa-folder-tree"></i></span> Technologies & Frameworks
                            </div>
                            <ul>
                                <li>
                                    <i className="fa-brands fa-react"></i> <p>React</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-flutter"></i> <p>Flutter</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-node"></i> <p>Node.js</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-laravel"></i> <p>Laravel</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-database"></i> <p>MySQL</p>
                                </li>
                            </ul>
                        </ol>
                        <ol>
                            <div>
                                <span><i className="fas fa-screwdriver-wrench"></i></span> Tools & Platforms
                            </div>
                            <ul>
                                <li>
                                    <i className="fa-brands fa-docker"></i> <p>Docker</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-figma"></i> <p>Figma</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-vscode"></i> <p>VSCode</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-github"></i> <p>GitHub</p>
                                </li>
                                <li>
                                    <i className="fa-brands fa-git-alt"></i> <p>Git</p>
                                </li>
                                <li>
                                    <img src="/images/composer.png" /> <p>Composer</p>
                                </li>
                                <li>
                                    <img src="/images/tailwind.png" /> <p>Tailwind</p>
                                </li>
                                <li>
                                    <img src="/images/postman.png" /> <p>Postman</p>
                                </li>
                                <li>
                                    <img src="/images/xampp.png" /> <p>XAMPP</p>
                                </li>
                            </ul>
                        </ol>

                        <ol className='sft'>
                            <div>
                                <span><i className="fa-solid fa-building-circle-check"></i></span> Soft Skills & Other Competencies
                            </div>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-puzzle-piece"></i> Problem-Solving
                                </li>
                                <li>
                                    <i className="fa-brands fa-leanpub"></i> <p>Self-Learning/Curiosity</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-code-branch"></i> <p>Version Controll</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-computer"></i> <p>Local Development Environment</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-network-wired"></i> <p>Networking Basics</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-database"></i> <p>Database Operations</p>
                                </li>
                            </ul>
                        </ol>
                    </div>
                </section>
            </div>
        </>
    );
}
