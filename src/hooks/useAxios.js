import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (baseUrl) => {
  const [state, setState] = useState([]);

  const fetchData = async (addToUrl = null) => {
    const res = await axios.get(addToUrl ? baseUrl + addToUrl : baseUrl);
    setState([...state, { ...res.data, id: uuid() }]);
  };

  return [state, fetchData];
};

export default useAxios;
