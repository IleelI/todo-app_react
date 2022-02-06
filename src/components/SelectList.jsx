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
            <div
                className="options mb-4 px-4 py-1.5 bg-gray-700 text-zinc-50 rounded rounded-md
                dark:text-gray-700 dark:bg-zinc-50">
                <h5 className="col-start-1 col-end-2">
                    <span className="font-semibold">{optionsInfo}</span>
                    <span className="text-sm">{selectedOptionsInfo}</span>
                </h5>
                <SelectToggler
                    isSelectToggled={isSelectListToggled}
                    onSelectTogglerClick={this.handleSelectListToggleClick}
                />
                {isSelectListToggled ? (
                    <ul className="col-span-2 pt-0.5 flex flex-col items-start border-t border-zinc-50 dark:border-gray-700">
                        {options.map(([key, val]) => {
                            const found = selectedOptions.find((option) => option === val);
                            return (
                                <button
                                    className={
                                        found
                                            ? 'my-1 py-0.5 text-md text-emerald-500 font-semibold'
                                            : 'my-1 py-0.5 text-md'
                                    }
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
