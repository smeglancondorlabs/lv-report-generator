import moment from 'moment';

export const calculateDate = (format) => {
    const date = moment().subtract(1,'d').format(format);
    return date;
}

