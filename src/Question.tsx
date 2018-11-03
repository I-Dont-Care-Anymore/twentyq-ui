import * as React from 'react';

import { ButtonGroup, Callout, Card, Code, H1, H3, Icon } from '@blueprintjs/core';
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
                <H3>Is your idea related to Commercial Fishing?</H3>
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
