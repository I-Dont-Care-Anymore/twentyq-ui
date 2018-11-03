import * as React from 'react';

import { ButtonGroup, Callout, Card, Code, H1, Icon } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router-dom';
import { BackButton } from './util/BackButton';
import { LinkButton } from './util/LinkButton';

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
                <H1>Question {this.props.match.params.number}</H1>
                {Number(this.props.match.params.number) === 1 && (
                    <Callout icon="lightbulb" intent="primary">
                        Quickly answer questions with your keyboard! Tap{' '}
                        <Code>y</Code> for yes, <Code>n</Code> for no, and{' '}
                        <Code>m</Code> for maybe. Tap{' '}
                        <Code>
                            <Icon icon={'key-backspace'} iconSize={15} />
                        </Code>{' '}
                        to go back and change your answer.
                    </Callout>
                )}
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
                <ButtonGroup large={true} fill={true}>
                    <LinkButton
                        target={`/question/${Number(
                            this.props.match.params.number,
                        ) + 1}`}
                        buttonProps={{
                            intent: 'success',
                        }}
                        hotkeyProps={{
                            combo: 'y',
                            global: true,
                            label: 'Answer yes to this question',
                        }}
                        {...this.props}
                    >
                        Yes
                    </LinkButton>
                    <LinkButton
                        target={`/question/${Number(
                            this.props.match.params.number,
                        ) + 1}`}
                        buttonProps={{
                            intent: 'warning',
                        }}
                        hotkeyProps={{
                            combo: 'm',
                            global: true,
                            label: 'Answer maybe to this question',
                        }}
                        {...this.props}
                    >
                        Not Sure
                    </LinkButton>
                    <LinkButton
                        target={`/question/${Number(
                            this.props.match.params.number,
                        ) + 1}`}
                        buttonProps={{
                            intent: 'danger',
                        }}
                        hotkeyProps={{
                            combo: 'n',
                            global: true,
                            label: 'Answer no to this question',
                        }}
                        {...this.props}
                    >
                        No
                    </LinkButton>
                </ButtonGroup>
            </Card>
        );
    }
}
