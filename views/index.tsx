import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const React = require("react");
const Default = require("./layouts/default");

function Index({ breads, bakers, title }) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      <h3>Bakers</h3>
      <ul>
        {
          bakers.map((baker: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
            return (
              <li key={baker.id}>
                <a href={`/bakers/${baker.id}`}>{baker.name}</a>
              </li>
            )
          })
        }
      </ul>
      {/* <p>I have {breads[0].name} bread!</p> */}
      <div className="newButton">
        <a href="/breads/new">
          <button>Add a new bread</button>
        </a>
      </div>

      <h3>Breads</h3>
      <ul>
        {breads.map((bread: { id: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => {
          return (
            <li key={index}>
              <a href={`/breads/${bread.id}`}>{bread.name}</a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

module.exports = Index;
