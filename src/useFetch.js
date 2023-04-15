import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, Setpending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    //creating Abort Controller
    const AbortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: AbortCont.signal })
        .then((res) => {
          //Handling errors
          if (!res.ok) {
            throw Error("Could not fetch data for that resource");
          }
          return res.json();
        })

        .then((data) => {
          setData(data);
          Setpending(false);
          setError(null);
        })
        .catch((err) => {

          if (err.name === "AbortError") {
            console.log("fetch Aborted");
          }
          else {
            Setpending(false);
            setError(err.message);
          }
        });
    }, 1000);

    //Creating a useeffect cleanup function w\
    return () => AbortCont.abort();

  }, [url]);

  return { data, pending, error };
};



export default useFetch;
