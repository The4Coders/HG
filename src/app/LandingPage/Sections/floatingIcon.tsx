/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const FloatingIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Carexa');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    switch (active) {
      case 'Carexa':
        return <div>Carexa Content</div>;
      case "What's new":
        return (
          <div className="h-[500px] overflow-y-scroll scrollbar-hide pb-4">
            <div className="flex flex-row gap-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-journal-medical w-[24.75px] h-[30.38px] text-[#4ade80] text-3xl"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
              </svg>
              <div className="flex flex-col">
                <div className="flex flex-row gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 48 48"
                    className="w-[24.75px] h-[30.38px] text-[#4ade80] text-3xl"
                  >
                    <g fill="none">
                      <path d="M0 0h48v48H0z" />
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M21.671 6.8a5.54 5.54 0 0 1 5.737 0l2.037 1.246c2.858 1.747 6.113 2.136 9.383 2.528c1.057.127 2.115.253 3.162.426c0 0 .023 1.834-.001 2.666l-.209 7.151c-.18 6.133-2.907 11.948-7.585 16.174c-2.207 1.993-4.49 3.794-7.113 5.29a5.55 5.55 0 0 1-5.1.187c-3.029-1.44-5.711-3.266-8.16-5.477c-4.678-4.226-7.405-10.041-7.584-16.174l-.208-7.128c-.025-.844 0-2.689 0-2.689c.85-.1 1.716-.183 2.589-.266c3.853-.366 7.834-.744 11.1-2.74zM22 22v-7h4v7h7v4h-7v7h-4v-7h-7v-4z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                  <h2 className="font-semibold text-3xl w-[414px] h-[39px] mb-2">
                    <span className="text-[#4ade80]">Cholera</span> Outbreak
                  </h2>
                </div>
                <p>
                  Cholera is an acute diarrhoeal infection caused by ingesting
                  contanimated food or water.
                </p>
              </div>
            </div>
            <Image
              width={500}
              height={500}
              src="/images/twodoctors.jpeg"
              alt={'Health News'}
              className="mb-6"
            />
            <ul>
              <li className="custom-li mb-6">
                <p className="text-base font-normal">
                  <strong>• Cholera</strong> is a disease caused by eating food
                  and drinking water contaminated with the
                  bacterium Vibrio cholerae.
                </p>
              </li>
              <li className="custom-li mb-6">
                <p className="text-base font-normal">
                  • When a person is infected with cholera, their small
                  intestine releases a toxin which causes the body to secrete
                  enormous amount of water.
                </p>
              </li>
              <li className="custom-li mb-6">
                <p>• Also contributing to the spread of cholera are:</p>
                <div className="ml-6 text-base font-normal">
                  <p>
                    • indiscriminate dumping of refuse and irregular disposal of
                    sewage, enabling flies to carry the bacteria to water or
                    food
                  </p>
                  <p>• blocked drains and leaking water pipes</p>
                  <p>
                    • overcrowded conditions such as internally displaced
                    persons’ camps, refugees and prisons with no access to safe
                    water.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-4 ml-6">
              <span className="text-[#063B3F] w-[374px] h-[38px] font-bold text-lg">
                For emergencies, call any of the following numbers
              </span>
              <ul>
                <li className="flex flex-row gap-3 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill text-[#4ade80] w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <span className="text-[#063b3f] font-bold text-base w-[42px] h-[19px]">
                    6232
                  </span>
                </li>
                <li className="flex flex-row gap-3 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill text-[#4ade80] w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>{' '}
                  <span className="text-[#063b3f] font-bold text-base w-[42px] h-[19px]">
                    112
                  </span>
                </li>
                <li className="flex flex-row gap-3 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill text-[#4ade80] w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>{' '}
                  <span className="text-[#063b3f] font-bold text-base w-[42px] h-[19px]">
                    767
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'News':
        return (
          <div className="h-[500px] overflow-y-scroll scrollbar-hide pb-4">
            <div className="flex flex-row gap-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-journal-medical w-[24.75px] h-[30.38px] text-[#4ade80] text-3xl"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
              </svg>
              <h2 className="font-semibold text-3xl w-[197px] h-[39px]">
                <span className="text-[#4ade80]">Health</span> News
              </h2>
            </div>
            <Image
              width={500}
              height={500}
              src="/images/healthnews.jpeg"
              alt={'Health News'}
              className="mb-6"
            />
            <ul>
              <li className="custom-li mb-6">
                <strong className="text-lg">
                  • COVID-19 Symptoms and Vaccination:
                </strong>
                <p className="ml-6 text-base font-normal">
                  The most common COVID-19 symptom during the current surge is a
                  sore throat. Experts emphasize the importance of staying
                  vigilant and getting vaccinated to reduce the severity of
                  symptoms and prevent the spread of the virus.
                </p>
              </li>
              <li className="custom-li mb-6">
                <strong className="text-lg">• Women's Health:</strong>
                <p className="ml-6 text-base font-normal">
                  A new clinical treatment guideline for tobacco cessation in
                  adults has been released by the World Health Organization
                  (WHO), which could significantly help in reducing
                  smoking-related health issues. Also, vaccines to treat human
                  papillomavirus (HPV) are being seen as a promising innovation
                  in the fight against cervical cancer.
                </p>
              </li>
              <li className="custom-li mb-6">
                <strong className="text-lg">
                  • Advancements in Medical Treatments:
                </strong>
                <p className="ml-6 text-base font-normal">
                  Researchers are making strides towards a preventative HIV
                  vaccine, which could be a significant breakthrough in global
                  health. Additionally, new genetic studies suggest oxytocin as
                  a potential treatment for obesity and postnatal depression.
                </p>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="fixed bottom-5 right-5 flex items-end justify-end">
      {isOpen && (
        <div className=" slide-in-box relative bg-gradient-to-t from-[#E6E4E5] to-[#045357] bottom-16 -right-16 flex flex-col rounded-[24px] shadow-lg p-6 mb-2 text-white w-[454px] h-[650px] px-7">
          <div className="flex-grow overflow-auto">{renderContent()}</div>
          <div className="absolute bottom-0 flex flex-row justify-around w-[414px] h-[127px] border-t-2 border-[#38777A] p-5 gap-6">
            {['Carexa', "What's new", 'News'].map((item, index) => (
              <div
                key={index}
                className={`w-[108.67px] h-[87px] rounded-[20px] flex items-center justify-center ${
                  active === item
                    ? 'bg-gradient-to-b from-[#08838A] to-[#045357]'
                    : ''
                }`}
              >
                <span
                  className={`w-[100px] h-[63px] flex flex-col items-center justify-center gap-2 cursor-pointer ${
                    active === item
                      ? 'text-white'
                      : 'text-[#484848] hover:text-[#1a1a1a]'
                  }`}
                  onClick={() => setActive(item)}
                >
                  {item === 'Carexa' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      height="36px"
                      viewBox="0 0 14 14"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M7.527 9.331a5.025 5.025 0 0 0 1.49-1.319a1.964 1.964 0 0 1-.273-.661l-.019-.088a1.294 1.294 0 0 0-1.042-.998c-2.072-.36-2.072-3.334 0-3.695a1.293 1.293 0 0 0 1.03-.948a5 5 0 1 0-6.187 7.709V10.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.331Zm-5 3.919a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m7.28-11.533C9.99.881 11.18.876 11.37 1.71l.009.04l.018.078a2.395 2.395 0 0 0 1.921 1.812c.872.152.872 1.404 0 1.556a2.396 2.396 0 0 0-1.925 1.827l-.023.102c-.19.835-1.381.83-1.565-.007l-.019-.087A2.38 2.38 0 0 0 7.87 5.194c-.871-.151-.871-1.401 0-1.553a2.38 2.38 0 0 0 1.915-1.826L9.8 1.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {item === "What's new" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.75 6.75 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m5.25 10.5h-2.94l-2.7 4.52a1 1 0 0 1-.86.48h-.06a1 1 0 0 1-.86-.59L9.87 9.67l-2 3.35a1 1 0 0 1-.86.48h-3.5v-2h2.93l2.71-4.51a1 1 0 0 1 1.77.11l3.22 7.24l2-3.35a1 1 0 0 1 .86-.49h3.5z"
                      />
                    </svg>
                  )}
                  {item === 'News' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      height="36px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11l5 5v11q0 .825-.587 1.413T19 21zm2-4h10v-2H7zm0-4h10v-2H7zm8-4h4l-4-4zM7 9h5V7H7z"
                      />
                    </svg>
                  )}
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
        <div
      onClick={handleClick}
      className="bg-[#063b3f] rounded-full shadow-lg w-[60px] h-[60px] flex items-center justify-center cursor-pointer hover:scale-105"
    >
      <div className={`icon-container ${isOpen ? 'open' : ''}`}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            className="bi bi-chevron-down text-white p-5 rounded-full"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58px"
            height="60px"
            viewBox="0 0 24 24"
            className="text-white text-xl rounded-full w-[58px] h-[60px] p-3"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              color="currentColor"
            >
              <path d="M20.25 6.75L18 9h-2m3.5-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 10.5L18 15h-2m3.5 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m.75-5.25H12m7.5 0a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-10 7h.009" />
              <path d="M16 6c-.08-1.42-.302-2.323-.909-2.975C14.136 2 12.598 2 9.523 2S4.911 2 3.955 3.025S3 5.7 3 9v6c0 3.3 0 4.95.955 5.975C4.911 22 6.448 22 9.523 22s4.613 0 5.568-1.025c.607-.652.828-1.556.909-2.975" />
            </g>
          </svg>
        )}
      </div>

      <style jsx>{`
        .icon-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
        }

        .icon-container svg {
          transition: transform 0.5s ease;
        }

        .icon-container svg:first-child {
          transform-origin: center;
        }

        .icon-container.open svg:first-child {
          transform: rotate(180deg) scale(0.5);
        }

        .icon-container.open svg:last-child {
          transform: rotate(0deg) scale(1);
        }

        .icon-container svg:last-child {
          transform-origin: center;
          transform: rotate(180deg) scale(0.9);
          position: absolute;
        }

        .icon-container.open svg:last-child {
          transform: rotate(0deg) scale(1);
        }

        .slide-in-box {
          bottom: 0;
        }
        }
      `}</style>
    </div>
      </div>
    </div>
  );
};

export default FloatingIcon;
