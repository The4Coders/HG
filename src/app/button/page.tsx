import React from "react";
import { BsShieldFillPlus } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";

const page = () => {
  return (
    <>
      <article>
        {/* First Section */}
        <section>
          <h1>
            <span>Cholera</span> Outbreak
          </h1>
          <p>
            Cholera is an acute diarrhoeal infection caused by ingesting
            contaminated food or water.
          </p>
          <img src="/cholera.png" alt="" />
          <ul>
            <li>
              Cholera is a disease caused by eating food and drinking water
              contaminated with the bacterium Vibrio cholerae.
            </li>
            <li>
              When a person is infected with cholera, their small intestine
              releases a toxin which causes the body to secrete enormous amount
              of water.
            </li>
            <li>
              Also contributing to the spread of cholera are:
              <ul>
                <li>
                  Indiscriminate dumping of refuse and irregular disposal of
                  sewage, enabling flies to carry the bacteria to water or food
                </li>
                <li>Blocked drains and leaking water pipes</li>
                <li>
                  Overcrowded conditions such as internally displaced persons’
                  camps, refugees, and prisons with no access to safe water.
                </li>
              </ul>
            </li>
          </ul>
          {/*  */}
          <div>
            <p>For emergencies, call any of the following numbers</p>
            <p>6332</p>
          </div>
        </section>
      </article>
    </>
  );
};

export default page;
