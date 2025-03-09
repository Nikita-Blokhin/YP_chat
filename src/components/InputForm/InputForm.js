import template from './InputForm.hbs?raw';
import createItem from '../../utils/createItem';

function createInputForm(options) {
    const defaultOptions = {
        label: 'Поле',
        class_name__group: 'default-group',
        class_name__label: 'default-label',
        class_name__input: 'default-input',
        id_name: 'input-id'
    };

    const mergedOptions = {
        ...defaultOptions,
        ...options
    };
    return createItem(template, mergedOptions);
};

export default createInputForm;