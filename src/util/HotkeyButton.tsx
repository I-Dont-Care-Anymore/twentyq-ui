import {
    Button,
    Hotkey,
    Hotkeys,
    HotkeysTarget,
    IButtonProps,
    IHotkeyProps,
} from '@blueprintjs/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IHotkeyButtonProps {
    hotkeyProps: IHotkeyProps;
    buttonProps: IButtonProps;
    onClick: () => void;
}

@HotkeysTarget
export class HotkeyButton extends React.Component<IHotkeyButtonProps, {}> {
    constructor(props: IHotkeyButtonProps & RouteComponentProps<any>) {
        super(props);
    }

    public render() {
        return (
            <Button onClick={this.props.onClick} {...this.props.buttonProps}>
                {this.props.children && this.props.children}
            </Button>
        );
    }

    public renderHotkeys() {
        return (
            <Hotkeys>
                <Hotkey
                    onKeyDown={this.props.onClick}
                    {...this.props.hotkeyProps}
                />
            </Hotkeys>
        );
    }
}
