import * as React from 'react';

import { Card, H1 } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router-dom';
import { BackButton } from './util/BackButton';
import { ForwardButton } from './util/ForwardButton';

export class Question extends React.Component<RouteComponentProps<any>, {}> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
    }

    public render() {
        return (
            <Card elevation={1}>
                <p>
                    <BackButton {...this.props} />
                </p>
                <H1>
                    Question{' '}
                    {this.props.match.params.number
                        ? this.props.match.params.number
                        : 1}
                </H1>
                <p className="bp3-text-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla bibendum sapien tortor, et accumsan libero ornare et.
                    Nunc malesuada molestie arcu, ut consectetur enim semper
                    egestas. Suspendisse scelerisque sapien ex, vitae euismod
                    diam vestibulum eget. Aenean vestibulum porttitor leo et
                    ornare. Quisque faucibus interdum vestibulum. Nam eget dolor
                    congue, finibus erat in, luctus tellus. Etiam tincidunt
                    porttitor justo, ac molestie metus laoreet in. Aliquam eu
                    varius eros, non sollicitudin leo. Ut accumsan neque
                    tincidunt nisl porta dictum. Nunc vitae orci sit amet felis
                    aliquam placerat. Maecenas aliquet accumsan felis nec
                    aliquam.
                </p>
                <ForwardButton
                    target={`/question/${
                        this.props.match.params.number
                            ? Number(this.props.match.params.number) + 1
                            : 2
                    }`}
                    buttonProps={{
                        intent: 'primary',
                        large: true,
                        rightIcon: 'arrow-right',
                    }}
                    {...this.props}
                >
                    Next
                </ForwardButton>
            </Card>
        );
    }
}
