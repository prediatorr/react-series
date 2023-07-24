const heading = React.createElement(
    "h1",
    {
      style: { color: "red", backgroundColor: "blue", fontSize: 100 },
    },
    "heading 1"
  );
  const heading2 = React.createElement(
    "h1",
    { style: { color: "red", backgroundColor: "blue", fontSize: 100 } },
    "heading 2"
  );
    const container =React.createElement("div", {
        id:"container" 
    },[heading,heading2])//[] multiple children
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(container);