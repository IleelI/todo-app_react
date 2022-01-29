import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectToggler from './SelectToggler';

class SelectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelectListToggled: false
        };
        this.handleNewOptionToggleClick = this.handleNewOptionToggleClick.bind(this);
        this.handleSelectListToggleClick = this.handleSelectListToggleClick.bind(this);
    }

    handleSelectListToggleClick() {
        this.setState(({ isSelectListToggled }) => ({
            isSelectListToggled: !isSelectListToggled
        }));
    }

    handleNewOptionToggleClick({ target }) {
        const { onNewOptionToggleClick } = this.props;
        onNewOptionToggleClick(target.innerText);
    }

    render() {
        const { isSelectListToggled } = this.state;
        const { options, optionsInfo, selectedOptionsInfo, selectedOptions } = this.props;
        return (
            <div className="select-list">
                <h5>
                    {optionsInfo}
                    <span>{selectedOptionsInfo}</span>
                </h5>
                <SelectToggler
                    isSelectToggled={isSelectListToggled}
                    onSelectTogglerClick={this.handleSelectListToggleClick}
                />
                {isSelectListToggled ? (
                    <ul className="sorting">
                        {options.map(([key, val]) => {
                            const found = selectedOptions.find((option) => option === val);
                            return (
                                <button
                                    className={found ? 'option option--active' : 'option'}
                                    type="button"
                                    onClick={this.handleNewOptionToggleClick}
                                    key={key}>
                                    {val}
                                </button>
                            );
                        })}
                    </ul>
                ) : null}
            </div>
        );
    }
}

SelectList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    optionsInfo: PropTypes.string,
    selectedOptionsInfo: PropTypes.string,
    selectedOptions: PropTypes.arrayOf(PropTypes.string),
    onNewOptionToggleClick: PropTypes.func
};
SelectList.defaultProps = {
    options: [],
    optionsInfo: 'List options:',
    selectedOptionsInfo: 'none',
    selectedOptions: [],
    onNewOptionToggleClick: null
};

export default SelectList;
