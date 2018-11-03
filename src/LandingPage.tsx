import * as React from 'react';

import { Button, ButtonGroup, Card, H1 } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router-dom';
import { ForwardButton } from './util/ForwardButton';

export class LandingPage extends React.Component<RouteComponentProps<any>, {}> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
        this.pushAbout = this.pushAbout.bind(this);
    }

    public render() {
        return (
            <Card elevation={1}>
                <H1 className="App-brand">Twenty-Q</H1>
                <ButtonGroup large={true}>
                    <Button rightIcon="info-sign" onClick={this.pushAbout}>
                        About
                    </Button>
                    <ForwardButton
                        target="/explain"
                        buttonProps={{
                            intent: 'primary',
                            rightIcon: 'arrow-right',
                        }}
                        {...this.props}
                    >
                        Begin
                    </ForwardButton>
                </ButtonGroup>
            </Card>
        );
    }

    private pushAbout() {
        this.props.history.push('/about');
    }
}
