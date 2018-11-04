import {
    ButtonGroup,
    Callout,
    Card,
    Classes,
    Code,
    H1,
    H3,
    Icon,
} from '@blueprintjs/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as rp from 'request-promise-native';
import { HotkeyButton } from './util/HotkeyButton';

interface IQuestionResponse {
    question: string;
}

interface IQuestionAnswerBody {
    answer: string;
}

interface IQuestionState {
    number: number;
    question?: string;
    answered: boolean;
}

export class Question extends React.Component<
    RouteComponentProps<any>,
    IQuestionState
> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
        this.state = {
            answered: false,
            number: 0,
        };
        this.getQuestion = this.getQuestion.bind(this);
        this.putAnswer = this.putAnswer.bind(this);
        this.deleteAnswerOrGoBack = this.deleteAnswerOrGoBack.bind(this);
    }

    public componentDidMount() {
        this.getQuestion();
    }

    public render() {
        return (
            <Card
                elevation={1}
                className={
                    !this.state.question || this.state.answered
                        ? Classes.SKELETON
                        : undefined
                }
            >
                <p>
                    <HotkeyButton
                        onClick={this.deleteAnswerOrGoBack}
                        buttonProps={{
                            icon: 'arrow-left',
                            minimal: true,
                            small: true,
                        }}
                        hotkeyProps={{
                            combo: 'backspace',
                            global: true,
                            label: 'Go back a page',
                        }}
                    />
                </p>
                <H1>Question {this.state.number}</H1>
                {this.state.number === 1 && (
                    <Callout icon="lightbulb" intent="primary">
                        Quickly answer questions with your keyboard! Tap the
                        indicated key for your answer. Tap{' '}
                        <Code>
                            <Icon icon={'key-backspace'} />
                        </Code>{' '}
                        to go back and change a previous answer.
                    </Callout>
                )}
                <H3>{this.state.question && this.state.question}</H3>
                <ButtonGroup large={true} fill={true}>
                    <HotkeyButton
                        onClick={this.putAnswer('no')}
                        buttonProps={{
                            intent: 'danger',
                        }}
                        hotkeyProps={{
                            combo: 'j',
                            global: true,
                            label: 'Answer No to this question',
                        }}
                    >
                        No <Code>j</Code>
                    </HotkeyButton>
                    <HotkeyButton
                        onClick={this.putAnswer('not sure')}
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
                    </HotkeyButton>
                    <HotkeyButton
                        onClick={this.putAnswer('yes')}
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
                    </HotkeyButton>
                </ButtonGroup>
            </Card>
        );
    }

    private getQuestion() {
        fetch(`http://api.twentyq.com/question/${this.state.number + 1}`)
            .then(res => res.json())
            .then((questionResponse: IQuestionResponse) => {
                this.setState({
                    answered: false,
                    number: this.state.number + 1,
                    question: questionResponse.question,
                });
            }).catch(x => alert(x));
    }

    private putAnswer(answer: string) {
        return () => {
            const questionAnswer: IQuestionAnswerBody = {
                answer,
            };
            this.setState({ answered: true });
            rp({
                body: questionAnswer,
                json: true,
                method: 'PUT',
                uri: `http://api.twentyq.com/answer/${this.state.number}`,
            });
            this.getQuestion();
        };
    }

    private deleteAnswerOrGoBack() {
        if (this.state.number !== 1) {
            this.setState({
                question: undefined,
            });
            rp({
                json: true,
                method: 'DELETE',
                uri: `http://api.twentyq.com/answer/${this.state.number - 1}`,
            });
            rp({
                json: true,
                uri: `http://api.twentyq.com/question/${this.state.number - 1}`,
            }).then((questionResponse: IQuestionResponse) => {
                this.setState({
                    answered: false,
                    number: this.state.number - 1,
                    question: questionResponse.question,
                });
            });
        } else {
            this.props.history.goBack();
        }
    }
}
