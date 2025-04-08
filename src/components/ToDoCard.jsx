
import done from "../assets/images/icon-check.svg";
import x from "../assets/images/icon-cross.svg";

export function ToDoCard(props) {
  const { todo, index, handleDelete, handleComplete, darkTheme, selectedTab } = props;
  const checked = todo.complete;

  var WhiteCard = {
    backgroundColor: "white",
    borderBottom: " 1px solid hsl(233, 11%, 84%)",
  };

  var BlackCard = {
    backgroundColor: "hsl(235, 24%, 19%)",
    borderBottom: "1px solid hsl(237, 14%, 26%)",
  }

  var Check = {
    borderRadius: "100%",
    background: checked && selectedTab !== 'Active'
      ? "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
      : "transparent",
    width: "20px",
    height: "20px",
    border: darkTheme
      ? "1px solid hsl(237, 14%, 26%)"
      : "1px solid hsl(233, 11%, 84%)",
    textAlign: "center",
  };

  return (
    <div className="card-cont" style={darkTheme ? BlackCard : WhiteCard}>
      <div
        style={{ display: "flex", gap: "15px", cursor:'pointer' }}
        onClick={() => handleComplete(index)}
      >
        <div style={Check}>
          <img
            style={
              checked && selectedTab !== 'Active'
                ? { display: "inline-block", marginBottom: "2px" }
                : { display: "none" }
            }
            src={done}
          />
        </div>
        <p
          style={
            checked && selectedTab !== 'Active'
              ? { textDecoration: "line-through", color: "hsl(236, 9%, 61%)" }
              : { textDecoration: "none" }
          }
        >
          {todo.input}
        </p>
      </div>
      <button
        onClick={() => {
          handleDelete(index);
        }}
      >
        <img src={x} />
      </button>
    </div>
  );
}
