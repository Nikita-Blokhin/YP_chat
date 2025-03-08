function identity(value) {
    return value;
};

function array_last(list) {
		if (!Array.isArray(list)) {
			return undefined;
		}
		
		const length = list.length;
	    return length ? list[length - 1] : undefined;
};

function array_first(list) {
	if (!Array.isArray(list)) {
		return undefined;
	}
	
	return list.length ? list[0] : undefined;
};

function range(start, end, step, isRight = false) {
    let count = 0;
    let list = [];
    let reverseFlag = false;
    [start, end, step, isRight].map(item => {
        item == undefined | item === true && (count += 1);
        item === true && (reverseFlag = true);
    })

	if (count >= 2) {
        end = start;
        start = 0;
    };

	if (step !== 0) {
		if (!step) {
            if (end > 0) {
                step = 1;
            } else {
                step = -1;
            };
        };
        for (let i = start; end > 0 ? i < end : i > end; i += step) {
            list.push(i);
        };
        
	} else {
        if (step === 0) {
            for (let i = start; i < end; i++) {
                list.push(start);
            };
        };
    };
    
    if (reverseFlag) {
        return list.reverse();
    } else {
	    return list;
    };
};

function isEmpty(value) {
    let result = false;
    switch (typeof value) {
        case "boolean":
            result = true;
            break;
        case "undefined":
            result = true;
            break;
        case "number":
            result = true;
            break;
    };
    if (!result) {
        if (!value) {
            result = true;
        };
    };
    return result;
};

export default {array_last, array_first, range, isEmpty, identity};
