const React = require("react");
const Default = require("./layouts/default");

function Index({ breads, title }) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      {/* <p>I have {breads[0].name} bread!</p> */}
      <div className="newButton">
        <a href="/breads/new">
          <button>Add a new bread</button>
        </a>
      </div>

      <ul>
        {breads.map((bread, index) => {
          return (
            <li key={index}>
              <a href={`/bread/${index}`}>{bread.name}</a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

module.exports = Index;
