import { Card, H2, H3 } from '@blueprintjs/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface INaics {
    name: string;
    companies: [any];
}
interface IClassificationState {
    classification: number;
    naics?: INaics;
}

export class Overview extends React.Component<
    RouteComponentProps<any>,
    IClassificationState
> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
        const searchParams = new URLSearchParams(this.props.location.search);
        let classification = searchParams.get('classification');
        classification = classification === null ? '' : classification;
        this.state = {
            classification: JSON.parse(classification),
        };
    }

    public componentDidMount() {
        fetch(`https://api.twentyq.com/naics/${this.state.classification}`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then((naics: INaics) => {
                this.setState({
                    naics,
                });
            });
    }

    public render() {
        return (
            <Card>
                <H2>Your idea falls under {this.state.naics && this.state.naics.name} </H2>
                {this.state.naics && (
                    <H2>Top companies in this industry</H2>
                )}
                {this.state.naics &&
                    this.state.naics.companies.map(company => (
                        <div>
                            <H3>{company.CorporateName}</H3>
                            <p>Sales Volume of {company.SalesVolume}</p>
                            <hr />
                        </div>
                    ))}
            </Card>
        );
    }
}
