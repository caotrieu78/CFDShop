// transform 0 - 1 to percent 100%
export const transformNumberToPercent = (number) => {
	if (!number) return 0;
	return number * 100;
};

// get image url
export const getImageUrl = (path) => {
	return "https://cfdshop.cfdcircle.vn/" + path;
};
