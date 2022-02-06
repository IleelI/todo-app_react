export const FILTERS = {
    STATE: {
        FINISHED: 'Finished',
        UNFINISHED: 'Unfinished'
    },
    PRIORITY: {
        IMPORTANT: 'Important',
        NORMAL: 'Normal',
        NOT_IMPORTANT: 'Not important'
    }
};

export const SORTING = {
    PRIORITY_ASC: 'Priority Ascending',
    PRIORITY_DESC: 'Priority Descending',
    NEWEST: 'Newest',
    OLDEST: 'Oldest'
};

export const SORT_DIRECTION = {
    ASC: 'Ascending',
    DSC: 'Descending'
};

export const FLASH_MESSAGE_TYPES = {
    INFO: 'Info',
    ERROR: 'Error'
};

export const FLASH_DURATION = 1500;

export default { FILTERS, SORTING };
