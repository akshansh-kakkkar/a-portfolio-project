// components/Bio.js

function Bio(){
    const bioText = "Passionate Mern Stack developer with 3+ months of experience creating beautiful, responsive web applications. I love turning complex problems into simple and elegant solution.";
    const skills = ["React", "Express", "NodeJS", "MongoDB", "TailwindCSS", "CSS", "Figma", "Git", "Python", "Javascript", "Blender Artist"];
    return((
        <div className="bio-section">
            <h3>About me</h3>
            <p className="bio-text">{bioText}</p>
            <h3>Skills</h3>
            <div className="skills-container" >
                {skills.map((skill,index)=>(
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    ))
}

export default  Bio;