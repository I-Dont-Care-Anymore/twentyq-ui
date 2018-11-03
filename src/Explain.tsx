import * as React from 'react';

import { Card, H2 } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router-dom';
import { BackButton } from './util/BackButton';
import { ForwardButton } from './util/ForwardButton';

export class Explain extends React.Component<RouteComponentProps<any>, {}> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
    }

    public render() {
        return (
            <Card elevation={1}>
                <p>
                    <BackButton {...this.props} />
                </p>
                <H2>Before you get started...</H2>
                <p className="bp3-text-large">
                    You will be asked to do xyz. Please make sure you do.
                </p>
                <ForwardButton
                    target="/question"
                    buttonProps={{
                        intent: 'primary',
                        large: true,
                        rightIcon: 'arrow-right',
                    }}
                    {...this.props}
                >
                    Continue
                </ForwardButton>
            </Card>
        );
    }
}
