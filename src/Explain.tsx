import * as React from 'react';

import { Card, H2 } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router-dom';
import { BackButton } from './util/BackButton';
import { LinkButton } from './util/LinkButton';

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
                <H2>How does Twenty-Q work?</H2>
                <p className="bp3-text-large">
                    You will be asked a series of yes or no questions to help us
                    determine the marketplace that your idea belongs to. <br />
                    Then, we share information on that marketplace and top
                    companies in it.
                </p>
                <p className="bp3-text-small">
                    Our lawyers have asked us to let you know that all content
                    on TwentyQ.com is for informational purposes only and is not
                    intended to be a substitute for professional assistance from
                    a market analyst.
                </p>
                <LinkButton
                    target="/question/1"
                    buttonProps={{
                        intent: 'primary',
                        large: true,
                        rightIcon: 'arrow-right',
                    }}
                    hotkeyProps={{
                        combo: 'enter',
                        global: true,
                        label: 'Go forwards a page',
                    }}
                    {...this.props}
                >
                    Continue
                </LinkButton>
            </Card>
        );
    }
}
