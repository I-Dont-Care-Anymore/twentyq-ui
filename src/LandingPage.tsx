import * as React from 'react';

import { H1 } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router-dom';

class LandingPage extends React.Component<RouteComponentProps<any>, {}> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
    }

    public render() {
        return <H1>Yeet</H1>;
    }
}

export default LandingPage;
