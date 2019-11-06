import React from 'react';
import ReactTable from 'react-table';
import episodes from '../episodes.json';

class EpisodesList extends React.Component {
    render() {
        return (
            <div>
                {renderEpisodes()}
            </div>
        );
    }
}

const columns = [{
    Header: 'Date',
    accessor: 'date'
}, {
    Header: 'Watch Here',
    accessor: 'link',
    Cell: props =><a className="App-link"  href={props.original.link} target="_blank" rel="noopener noreferrer">Watch</a>
}];

function renderEpisodes() {
    return <ReactTable data ={episodes} columns={columns}/>;
}

export default EpisodesList;
