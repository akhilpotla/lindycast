import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import '../App.css';
import episodes from '../episodes.json';

const READABLEDATEFORMAT = "MMMM Do, YYYY";

class EpisodesTable extends React.Component {
    render() {
        return (
            <Table striped bordered hover className="Episodes-Table" size="sm">
                <thead>
                    <tr>
                         <th>Date</th>
                         <th>Click to Watch</th>
                    </tr>
                </thead>
                <tbody>
                    {renderEpisodes()}
                </tbody>
            </Table>
        );
    }
}

function renderEpisodes() {
    return episodes.map(episode => (
        <tr>
            <td>{readableDate(episode.date)}</td>
            <td>
                <Button variant="primary" className="Watch-Button" href={episode.link}>
                    Watch
                </Button>
            </td>
        </tr>
    ));
}

function readableDate(date) {
    return moment(date).format(READABLEDATEFORMAT);
}

export default EpisodesTable;
