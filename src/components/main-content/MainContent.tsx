import "./MainContent.css";

function MainContent() {
  return (
    <div className="center">
      <div className="progress">
        <svg className="progress-bar" width="300" height="300">
          <circle
            className="progress-circle"
            cx="150"
            cy="150"
            r="135"
          ></circle>
          <circle
            className="progress-circle"
            cx="150"
            cy="150"
            r="135"
          ></circle>
        </svg>
        <div className="text">
          75
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
