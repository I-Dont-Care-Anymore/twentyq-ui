import * as React from 'react';

import { Button, Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router-dom';

interface IBackButtonProps {
    hotkey?: boolean;
}

@HotkeysTarget
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
            <Button
                minimal={true}
                small={true}
                icon="arrow-left"
                onClick={this.popHistory}
            />
        );
    }

    public renderHotkeys() {
        return (
            <Hotkeys>
                <Hotkey
                    disabled={this.props.hotkey && !this.props.hotkey}
                    global={true}
                    combo="backspace"
                    label="Go back a page"
                    onKeyDown={this.popHistory}
                />
            </Hotkeys>
        );
    }

    private popHistory() {
        this.props.history.goBack();
    }
}
