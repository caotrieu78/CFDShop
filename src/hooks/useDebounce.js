import { useState, useEffect, useRef } from "react";

function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const timeoutRef = useRef(null);

	useEffect(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		if (value != true) {
			timeoutRef.current = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
		} else {
			setDebouncedValue(value);
		}

		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, [value, delay, timeoutRef]);

	return debouncedValue;
}

export default useDebounce;
