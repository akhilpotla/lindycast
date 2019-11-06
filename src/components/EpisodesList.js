import React from 'react';
import episodes from '../episodes.json';

import Episode from './Episode.js';

class EpisodesList extends React.Component {
    render() {
        return (
            <div>
                {renderEpisodes()}
            </div>
        );
    }
}

function renderEpisodes() {
    return episodes.map(function (episode){
        return <Episode date={episode['date']} />;
    });
}

export default EpisodesList;
