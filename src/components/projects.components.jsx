import "../CSS-Files/projects.components.css";

function Projects(props) {
    const card = document.getElementsByClassName('card_inner');
    card.addEventListener('click', () => {
        card.className.add('is-flipped');
    })
  return (
    <div className="card">
      <div className="card_inner">
        <div className="card_face card_face--front">
          <h2>{props.projectName}</h2>
        </div>
        <div className="card_face card_face--back">
          <div className="card_content">
            <div className="project">
              <div className="project-image">
                <img src={props.imgURL} alt="projectimg" />
              </div>
              <div className="projectName">{props.projectType}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
