import React, {Component} from 'react';

class Map extends Component {
    render() {
        return (
            <div className="map-container">
                <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D1%96%D0%BD%D0%B0%20NOVUS,%20%D0%A0%D1%96%D0%B2%D0%BD%D0%B5,%20%D0%A0%D1%96%D0%B2%D0%BD%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%2033003+(Shaverma%20Bro)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
        );
    }
}

export default Map;