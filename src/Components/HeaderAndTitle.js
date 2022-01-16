import React from "react";

function HeaderAndTitle(props) {
  return (
    <>
      <header>
        <img
          alt="man"
          src="https://media.customon.com/unsafe/600x600/img.customon.com//art/2/600/600/ffffff/63484/f0d42d38242314f67f6e214477cba254.png.jpg"
        />
        <h3>Xaviers School for Gifted Youngsters</h3>
      </header>

      <div className="title">
        <h2>Register in Professor x workshop</h2>
        <p onClick={() => props.showList(!props.show)}>Attendees</p>
      </div>
    </>
  );
}

export default HeaderAndTitle;
