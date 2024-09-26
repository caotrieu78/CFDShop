import { useEffect } from "react";
import { useState } from "react";

const useMutation = (promise, {
  onSuccess,
  onFail
}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const execute = async (...payload) => {
    try {
      setLoading(true);
      const res = await promise(...payload);
      setData(res.data?.data || []);
      onSuccess(res.data?.data)
    } catch (error) {
      setError(error);
      onFail(error)
    } finally {
      setLoading(false);
    }
  };

  return {
    execute,
    data,
    loading,
    error,
  };
};

export default useMutation;
