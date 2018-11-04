import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IClassificationState {
    classifications: [number];
}

export class Classification extends React.Component<
    RouteComponentProps<any>,
    IClassificationState
> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
        const searchParams = new URLSearchParams(this.props.location.search);
        let classifications = searchParams.get('classifications');
        classifications = classifications === null ? '' : classifications;
        this.state = {
            classifications: JSON.parse(atob(classifications)),
        };
    }

    public render() {
        return <div />;
    }
}
