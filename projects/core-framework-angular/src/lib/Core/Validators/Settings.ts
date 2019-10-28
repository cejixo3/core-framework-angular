//@see https://validatejs.org/

import * as validate from 'validate.js';

export const LoginValidator = {
    email: {
        message: 'Invalid'
    }
};

export const EmailValidator = {
    email: true,
    presence: true
};

export const PasswordValidator = {
    presence: {
        allowEmpty: false,
        message: 'Password could not be empty'
    }
};

export const NameValidator = {
    length: {
        minimum: 3,
        maximum: 255,
        tooShort: 'needs to have %{count} words or more',
        tooLong: 'needs to have not more %{count}'
    }
};

export const DescriptionValidator = {
    length: {
        minimum: 3,
        maximum: 255,
        tooShort: 'needs to have %{count} words or more',
        tooLong: 'needs to have not more %{count}'
    }
};
export const BigDescriptionValidator = {
    length: {
        minimum: 3,
        maximum: 10000,
        tooShort: 'needs to have %{count} words or more',
        tooLong: 'needs to have not more %{count}'
    }
};
export const PercentValidator = {
    numericality: {
        onlyInteger: true,
        greaterThan: 0,
        lessThanOrEqualTo: 100
    }
};

export const CreditCardValidator = {
    presence: true,
    format: {
        pattern: /^(34|37|4|5[1-5]).*$/,
        message: function (value, attribute, validatorOptions, attributes, globalOptions) {
            return validate.format('^%{num} is not a valid credit card number', {
                num: value
            });
        }
    },
    length: function (value, attributes, attributeName, options, constraints) {
        if (value) {
            // Amex
            if ((/^(34|37).*$/).test(value)) return {is: 15};
            // Visa, Mastercard
            if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
        }
        // Unknown card, don't validate length
        return false;
    }
};
export const CVV2Validator = {
    presence: {
        allowEmpty: false
    },
    length: function (value, attributes, attributeName, options, constraints) {

        if (value < 100 || value > 999) {
            return {
                presence: {message: 'is 3 digit for CVV2 required'},
                length: {is: 3}
            };
        }

    }
};
export const RequiredValidator = {
    presence: {allowEmpty: false}
};
export const GTE0Validator = {
    numericality: {
        onlyInteger: true,
        greaterThan: 0
    }
};
export const GTE1Validator = {
    numericality: {
        onlyInteger: true,
        greaterThan: 1
    }
};
export const URLValidator = {
    length: {
        minimum: 3,
        maximum: 255,
        tooShort: 'needs to have %{count} words or more',
        tooLong: 'needs to have not more %{count}'
    }
};