import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { Link } from 'react-router-dom';

export default function List() {
  const currentUser = ReactSession.get("currentUserEmail");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('/api/referrals.json', { headers: { 'Content-Type': 'application/json' } })
      .then(function (response) {
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log();
      })
  }, []);

  function renderList() {
    return (
      <>
        {
          list.map((item) => (
            <li key={item.id}>
              <span>{item.id} -- </span>

              {item.created_at != item.updated_at &&
                <span>
                  {item.email}
                  <span> -- signed up</span>
                </span>
              }

              {item.created_at == item.updated_at &&
              <>
                <Link to={`/api/referrals/${item.id}`}>
                  {item.email}
                </Link>
                <span> -- {item.created_at} -- {item.updated_at}</span>
                </>
              }
            </li >
          ))
        }
      </>
    )
  }

  return (
    <>
      {!currentUser && 'Login please'}

      {currentUser &&
        <section>
          <h2>Referrals <small>(Recent 5)</small></h2>
          <ul>{renderList()}</ul>
        </section>
      }
    </>
  )
};
