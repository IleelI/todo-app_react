import React from 'react';
import PropTypes from 'prop-types';
import { FLASH_MESSAGE_TYPES } from '../utils/constants';

function FlashMessage({ flashState }) {
    const { flashType, flashText } = flashState;
    let msgColors;
    if (flashType === FLASH_MESSAGE_TYPES.ERROR) {
        msgColors = `border-orange-500 text-orange-500`;
    } else {
        msgColors = 'border-emerald-500 text-emerald-500';
    }

    return (
        <div className="fixed top-8 left-0 z-10 w-full px-8">
            <div
                className={`px-8 py-2 rounded rounded-lg border ${msgColors} bg-zinc-50 shadow drop-shadow-lg shadow-gray-300`}>
                <h3 className="font-semibold text-xl whitespace-nowrap text-center">{flashText}</h3>
            </div>
        </div>
    );
}

FlashMessage.propTypes = {
    flashState: PropTypes.shape({
        isToggled: PropTypes.bool,
        flashType: PropTypes.string,
        flashText: PropTypes.string
    }).isRequired
};

export default FlashMessage;
