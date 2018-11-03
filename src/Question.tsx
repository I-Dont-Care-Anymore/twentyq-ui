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
                        Quickly answer questions with your keyboard! Tap the indicated key for your answer. Tap{' '}
                        <Code>
                            <Icon icon={'key-backspace'} />
                        </Code>{' '}
                        to go back and change an answer.
                    </Callout>
                )}
                <H3>Is your idea related to Commercial Fishing?</H3>
                <ButtonGroup large={true} fill={true}>
                    <LinkButton
                        target={`/question/${Number(
                            this.props.match.params.number,
                        ) + 1}`}
                        buttonProps={{
                            intent: 'danger',
                        }}
                        hotkeyProps={{
                            combo: 'j',
                            global: true,
                            label: 'Answer No to this question',
                        }}
                        {...this.props}
                    >
                        No <Code>j</Code>
                    </LinkButton>
                    <LinkButton
                        target={`/question/${Number(
                            this.props.match.params.number,
                        ) + 1}`}
                        buttonProps={{
                            intent: 'warning',
                        }}
                        hotkeyProps={{
                            combo: 'k',
                            global: true,
                            label: 'Answer Not Sure to this question',
                        }}
                        {...this.props}
                    >
                        Not Sure <Code>k</Code>
                    </LinkButton>
                    <LinkButton
                        target={`/question/${Number(
                            this.props.match.params.number,
                        ) + 1}`}
                        buttonProps={{
                            intent: 'success',
                        }}
                        hotkeyProps={{
                            combo: 'l',
                            global: true,
                            label: 'Answer Yes to this question',
                        }}
                        {...this.props}
                    >
                        Yes <Code>l</Code>
                    </LinkButton>
                </ButtonGroup>
            </Card>
        );
    }
}
