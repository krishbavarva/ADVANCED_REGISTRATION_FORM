import React, { useEffect } from 'react';

const Stepp4 = ({ data }) => {
  const fname = data.firstName;
  const lname = data.lastName;
  const email = data.email;
  const address = data.address;
  // const photoURL = data.photo || null;

  useEffect(() => {
    if (fname) {
      localStorage.setItem("Fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("email", email);
      localStorage.setItem("address", address);
    }
  }, [fname]);

  return (
    <div>
      <h1>Name is {fname} {lname}</h1>
      {/* <div>
        {photoURL ? (
          <img
            src={photoURL}
            alt="Uploaded"
            style={{ width: '100px', height: '100px', margin: '10px' }} // Adjust styling as needed
          />
        ) : (
          <p>No photo uploaded.</p>
        )}
      </div> */}
    </div>
  );
};

export default Stepp4;
