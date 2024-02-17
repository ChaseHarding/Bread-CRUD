const React = require('react')
const Default = require('./layouts/default')

function Error404 () {
    return (
    <Default>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, Sorry, we can't find this page!</p>
            <div>
                <img src="https://placekitten.com/350/350" />
            </div>
        </main>
    </Default>
    )
}

module.exports = Error404