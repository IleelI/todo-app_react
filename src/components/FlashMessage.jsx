import React from 'react';
import PropTypes from 'prop-types';
import { FLASH_MESSAGE_TYPES } from '../utils/constants';

function FlashMessage({ flashState }) {
    const { flashType, flashText } = flashState;
    const msgColor = flashType === FLASH_MESSAGE_TYPES.ERROR ? 'orange' : 'emerald';
    const flashStyle = `absolute top-0 left-1/2 z-10 transform -translate-x-1/2 w-full px-8 py-1.5
            border-2 rounded-lg border-${msgColor}-500 bg-white text-${msgColor}-500 drop-shadow-lg`;
    return (
        <div className={flashStyle}>
            <h3 className="font-semibold text-xl whitespace-nowrap text-center">{flashText}</h3>
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
