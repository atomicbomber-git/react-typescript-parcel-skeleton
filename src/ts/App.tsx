import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque totam maxime et beatae. Placeat quod modi temporibus ut recusandae, asperiores pariatur quae maxime eligendi? Obcaecati quod quia nemo? Numquam, laudantium.
                </p>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}