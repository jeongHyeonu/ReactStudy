/**
 * ch03/02/03-1-dom.js
 * pseudocode
 */

const { render } = ReactDOM;

const Welcome = () => (
    <div id="welcome">
        <h1>Hello world</h1>
    </div>
);

render(<Welcome />,  document.getElementById('target'));