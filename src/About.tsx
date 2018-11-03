import * as React from 'react';

import { Card, H2 } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router-dom';
import {BackButton} from './util/BackButton';

export class About extends React.Component<RouteComponentProps<any>, {}> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
    }

    public render() {
        return (
            <Card elevation={1}>
                <BackButton {...this.props} />
                <H2>About Twenty Q</H2>
                <p className="bp3-text-large">
                    Twenty Q is a project developed for Vandy Hacks V by Don
                    Choi, David Lu, Sameer Puri, and Vishnu Pydah.
                </p>
            </Card>
        );
    }
}
