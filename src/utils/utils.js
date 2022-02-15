import React from 'react';
import { FILTERS, SORTING } from './constants';

export function getActiveOptionsString(activeOptions) {
    if (activeOptions.length > 0) {
        let outputString = '';
        activeOptions.forEach((option) => {
            outputString = outputString.concat(`${option}, `);
        });
        outputString = outputString.slice(0, outputString.length - 2);
        return outputString;
    }
    return '';
}

export function getTodoImportance(todoImportance) {
    const { PRIORITY } = FILTERS;
    let outputStatus = '';
    if (todoImportance === PRIORITY.IMPORTANT) outputStatus = 'Important';
    else if (todoImportance === PRIORITY.NORMAL) outputStatus = 'Normal';
    else outputStatus = 'Not Important';
    return outputStatus;
}

export function getFullTimeAndDate() {
    const today = new Date();
    const day = `${today.getDate()}`.padStart(2, '0');
    const month = `${today.getMonth() + 1}`.padStart(2, '0');
    const year = `${today.getFullYear()}`;
    return `${day}.${month}.${year}`;
}

/* Function sort array of todos in place by date */
export function getTimeSortedList(list, sortBy) {
    list.sort(({ date: a }, { date: b }) => {
        const [aDay, aMonth, aYear] = a.split('.');
        const [bDay, bMonth, bYear] = b.split('.');
        if (aYear < bYear) return 1;
        if (aYear > bYear) return -1;

        if (aMonth < bMonth) return 1;
        if (aMonth > bMonth) return -1;

        if (aDay < bDay) return 1;
        if (aDay > bMonth) return -1;
        return 0;
    });
    if (sortBy === SORTING.OLDEST) list.reverse();
}

/* Function sort array of todos in place by priority */
export function getPrioritySortedList(list, sortBy) {
    const { PRIORITY } = FILTERS;
    const priorityValue = {
        [PRIORITY.IMPORTANT]: 1,
        [PRIORITY.NORMAL]: 0,
        [PRIORITY.NOT_IMPORTANT]: -1
    };
    list.sort(({ priority: a }, { priority: b }) => {
        const aValue = priorityValue[a];
        const bValue = priorityValue[b];
        if (aValue > bValue) return -1;
        if (aValue < bValue) return 1;
        return 0;
    });
    if (sortBy === SORTING.PRIORITY_DESC) list.reverse();
}

export function getFilteredList(list, filterBy) {
    const { STATE } = FILTERS;
    return list.filter((todo) => {
        let shouldStay = false;
        filterBy.forEach((filter) => {
            if (todo.priority === filter) shouldStay = true;
            if (todo.isFinished === true && filter === STATE.FINISHED) shouldStay = true;
            if (todo.isFinished === false && filter === STATE.UNFINISHED) shouldStay = true;
        });
        return shouldStay;
    });
}

export function priorityOptions(options) {
    return options.map(([key, val]) => <option key={key}>{val}</option>);
}

export function getFormErrors(errors) {
    return errors.length === 0 ? null : (
        <ul className="my-4 mx-2 px-4 py-2 border border-red-600 rounded-lg dark:border-red-500">
            {errors.map((error) => (
                <li
                    className="my-0.5 text-xs font-semibold text-red-600 dark:text-red-500"
                    key={error}>
                    {error}
                </li>
            ))}
        </ul>
    );
}

export default { getActiveOptionsString, getTodoImportance };
