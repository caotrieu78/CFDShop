import { useState } from "react";

const useForceRender = () => {
	const [render, setRender] = useState(false);

	return () => setRender(!render);
};

export default useForceRender;
