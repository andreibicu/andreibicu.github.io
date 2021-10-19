import { FunctionComponent, useState } from 'react';
import classNames from 'classnames';

import './rube-goldberg-machine.css';

/**
 * Check https://cloudfour.com/thinks/css-animation-timelines-building-a-rube-goldberg-machine/
 */

type MachineProps = { isOpen: boolean }

const Machine: FunctionComponent<MachineProps> = ({ isOpen }) => {
    return (
        <div className="js-demo demo">
            <div className={classNames('js-section', 'section', isOpen && 'is-open')}>
                <h1 className="section__title">Hello</h1>
                <p className="section__description">
                    <div className="pb-4">
                        I'm Andrei and this is my portofolio.
                    </div>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
                <button className="section__action">Lorem</button>
            </div>
        </div>
    );
}

export const RubeGoldbergMachine = () => {

    const [key, setKey] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const runAnimation = () => {
        if (isOpen) {
            increaseKey();

            setIsOpen(false);

            setTimeout(() => {
                setIsOpen(true);
            }, 200);
        }
        else {
            setIsOpen(true);
        }
    }

    const increaseKey = () => {
        setKey(key + 1);
    }

    return (
        <div className="wrapper">
            <Machine key={key} isOpen={isOpen} />

            <button className="js-reset-button reset-button" onClick={runAnimation}>Run Animation</button>
        </div>
    );
}