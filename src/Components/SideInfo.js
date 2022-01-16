import React from "react";
import profileImg from "../download.jpeg";
function SideInfo() {
  return (
    <div className="side-info">
      <img src={profileImg} alt="logo" />
      <p>
        Charles Francis Xavier was born the son of nuclear researcher Brian
        Xavier and his wife, Sharon.By the time he graduated high school,
        Charles was completely bald as a side effect of his mutant nature. He
        entered Bard College in New York at age 16 and earned his bachelor's
        degree in biology within two years. He was then accepted into the
        graduate-studies program at England's prestigious Oxford University,
        where he earned degrees in genetics and biophysics.{" "}
      </p>
      <p>
        in this workshop you will learn the basics of how the human brain work,
        what is the process of controlling it and the history behind it.{" "}
      </p>
      <h5>EDUCATION</h5>
      Ph.Ds in genetics, biophysics, psychology, and anthropology, and an M.D.
      in psychiatry
    </div>
  );
}

export default SideInfo;
