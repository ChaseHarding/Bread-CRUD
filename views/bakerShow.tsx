import React from 'react'
const Default = require('./layouts/default')

function Show ({baker}) {
    return (
      <Default>
          <h3>{baker.name}</h3>
          <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
          <p>About {baker.name}: {baker.bio}</p>
          <h3>Breads {baker.name} has baked</h3>
          <ul>
            {
                baker.breads.map((bread: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
                    return (
                        <li key={bread.id}>
                        {bread.name}
                        </li>
                    )
                })
            }
          </ul>

        <form action={`/bakers/${baker.id}?_method=DELETE`} method='POST'>
        <input type='submit' value='DELETE' />
        </form>

      </Default>
    )
}

module.exports = Show

