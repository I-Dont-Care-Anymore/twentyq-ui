import {
    Button,
    Hotkey,
    Hotkeys,
    HotkeysTarget,
    IButtonProps,
} from '@blueprintjs/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IForwardButtonProps {
    target: string;
    hotkey?: boolean;
    buttonProps: IButtonProps;
}

@HotkeysTarget
export class ForwardButton extends React.Component<
    IForwardButtonProps & RouteComponentProps<any>,
    {}
> {
    constructor(props: IForwardButtonProps & RouteComponentProps<any>) {
        super(props);
        this.pushHistory = this.pushHistory.bind(this);
    }

    public render() {
        return (
            <Button onClick={this.pushHistory} {...this.props.buttonProps}>{this.props.children && this.props.children}</Button>
        );
    }

    public renderHotkeys() {
        return (
            <Hotkeys>
                <Hotkey
                    disabled={this.props.hotkey && !this.props.hotkey}
                    global={true}
                    combo="enter"
                    label="Go forwards a page"
                    onKeyDown={this.pushHistory}
                />
            </Hotkeys>
        );
    }

    private pushHistory() {
        this.props.history.push(this.props.target);
    }
}
