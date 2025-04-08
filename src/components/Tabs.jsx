import { useState } from "react";

function Tabs(props) {
  const { todos, selectedTab, setTab, darkTheme, handleDeleteCompleted } = props;
  const tabs = ["All", "Active", "Completed"];
  const openTasks = todos.filter((val) => !val.complete).length;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="center-section">
      <nav
        className="tab-cont"
        style={
          darkTheme
            ? { backgroundColor: "hsl(235, 24%, 19%)" }
            : { backgroundColor: "white" }
        }
      >
        <p style={{ fontSize: "16px", color: "hsl(233, 14%, 35%)" }}>
          {openTasks} item(s) left
        </p>
        <div className="tabs-nav">
          {tabs.map((tab, index) => {

            return (
              <button
                onClick={() => {
                  setTab(tab);
                }}
                className={
                  "tab-btn " + (tab === selectedTab ? "open-tab" : " ")
                }
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={
                  darkTheme
                    ? {
                        color: hoveredIndex === index ? "hsl(236, 33%, 92%)" : "",
                      }
                    : { color: hoveredIndex === index ? "black" : "" }
                }
              >
                <p>{tab}</p>
              </button>
            );
          })}
        </div>
        <button 
        className="tab-btn"
        onClick={() => {
            handleDeleteCompleted()
            }}>
          <p>Clear Completed</p>
        </button>
      </nav>
    </div>
  );
}

export default Tabs;
