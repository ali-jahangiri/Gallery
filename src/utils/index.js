import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday)
const selfClearTimeout = (callback , timeout) => {
    const timer = setTimeout(() => {
        callback()
        clearTimeout(timer)
    } , timeout)
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


function idGenerator () {
	return '_' + Math.random().toString(36).substr(2, 9);
};


export const _date = (targetDate) => dayjs(targetDate).calendar("jalali").locale('fa')

export {
    selfClearTimeout,
    debounce,
	idGenerator
}