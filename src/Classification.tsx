import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IClassificationState {
    classification: number;
}

export class Classification extends React.Component<
    RouteComponentProps<any>,
    IClassificationState
> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
        const searchParams = new URLSearchParams(this.props.location.search);
        let classification = searchParams.get('classification');
        classification = classification === null ? '' : classification;
        this.state = {
            classification: JSON.parse(atob(classification)),
        };
    }

    public render() {
        return <div />;
    }
}
