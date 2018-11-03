import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { HotkeyButton } from './HotkeyButton';

interface IBackButtonProps {
    hotkey?: boolean;
}

export class BackButton extends React.Component<
    IBackButtonProps & RouteComponentProps<any>,
    {}
> {
    constructor(props: IBackButtonProps & RouteComponentProps<any>) {
        super(props);
        this.popHistory = this.popHistory.bind(this);
    }

    public render() {
        return (
            <HotkeyButton
                onClick={this.popHistory}
                buttonProps={{
                    icon: 'arrow-left',
                    minimal: true,
                    small: true,
                }}
                hotkeyProps={{
                    combo: 'backspace',
                    disabled: this.props.hotkey && !this.props.hotkey,
                    global: true,
                    label: 'Go back a page',
                }}
            />
        );
    }

    private popHistory() {
        this.props.history.goBack();
    }
}
