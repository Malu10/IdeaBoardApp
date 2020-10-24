import React, {Component} from 'react';

import IdeaList from '../../components/IdeaList/IdeaList';

import './Layout.css';

class Layout extends Component {

    render() {
        return(
            <div>
                <h2 className="heading">
                    Idea Board
                </h2>
                <IdeaList/>
            </div>
        )
    }
}

export default Layout;