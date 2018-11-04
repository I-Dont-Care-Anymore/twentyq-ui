import { IButtonProps, IHotkeyProps } from '@blueprintjs/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { HotkeyButton } from './HotkeyButton';

interface ILinkButtonProps {
    target: string;
    buttonProps: IButtonProps;
    hotkeyProps: IHotkeyProps;
    sideEffect?: () => void;
}

export class LinkButton extends React.Component<
    ILinkButtonProps & RouteComponentProps<any>,
    {}
> {
    constructor(props: ILinkButtonProps & RouteComponentProps<any>) {
        super(props);
        this.pushHistory = this.pushHistory.bind(this);
    }

    public render() {
        return (
            <HotkeyButton
                onClick={this.pushHistory}
                buttonProps={this.props.buttonProps}
                hotkeyProps={this.props.hotkeyProps}
            >
                {this.props.children && this.props.children}
            </HotkeyButton>
        );
    }

    private pushHistory() {
        if (this.props.sideEffect) {
            this.props.sideEffect();
        }
        this.props.history.push(this.props.target);
    }
}
