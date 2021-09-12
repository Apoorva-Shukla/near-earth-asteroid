import React, { useEffect, useState } from 'react';

export default function Search(props) {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('query');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const date = new Date();
    const APIURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date.getFullYear()}-${date.getMonth()+1}-${date.getUTCDate()}&end_date=${date.getFullYear()}-${date.getMonth()+1}-${date.getUTCDate()}&api_key=UWFXJdagMZAFM1H2d2f8DYhFeKyX6dlGz5NfmUgP`;

    useEffect(() => {
        fetch(APIURL)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },(error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [APIURL])

      if (error) {
        return <span>Error: {error.message}</span>;
      } else if (!isLoaded) {
        return <>
            <div className="text-center">
                <div className="spinner-border my-auto" role="status" aria-hidden="true"></div>
            </div>
        </>;
      } else {
        return <>
          <h5>Search results for <span className="fw-bold">{query}</span></h5>
        </>
      }
}