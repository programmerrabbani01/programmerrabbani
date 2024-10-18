"use client";

import React, { useEffect, useState } from "react";
import Card from "../Card/Card.tsx";
import { IconArrowElbowRight } from "@tabler/icons-react";
import Accordion from "../Accordion/Accordion.tsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import moment from "moment-timezone";
import Select, { SingleValue } from "react-select";
import { getTimezone } from "countries-and-timezones";

type Props = {};

export default function Contact({}: Props) {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState<string | undefined>("");
  const [budget, setBudget] = useState<string | undefined>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [meetingLink, setMeetingLink] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [timezones, setTimezones] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    const budgetParam = searchParams.get("budget");

    if (subjectParam) setSubject(subjectParam);
    if (budgetParam) setBudget(budgetParam);

    // Populate timezones using moment-timezone and countries-and-timezones
    const timezonesList = moment.tz.names().map((tz) => {
      const countryInfo = getTimezone(tz); // Use getTimezone function
      const countryName = countryInfo
        ? countryInfo.countries.join(", ")
        : "Unknown";

      return {
        label: `${countryName} - ${tz} (${moment.tz(tz).format("Z")})`,
        value: tz,
      };
    });

    setTimezones(timezonesList);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          budget,
          selectedDate,
          meetingLink,
          comment,
          country,
        }),
      });

      const { message } = await res.json();
      setStatus(message);

      // SweetAlert2 success alert
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset all form fields after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setBudget("");
      setSelectedDate(null);
      setMeetingLink("");
      setComment("");
      setCountry("");
    } catch (error) {
      setStatus("Error submitting form");
    }
  };

  return (
    <>
      <Card>
        <div className="p-6 xl:pt-12 xl:px-10 xl:pb-10">
          {/* top info */}
          <div className="block mb-12">
            <div className="w-full max-w-none">
              <h1 className="text-[40px] text-myBgDarkTwo dark:text_bg font-semibold mb-6 leading-[.9em] ">
                I’d Love to Hear from You!
              </h1>
              <p className="text-lg font-normal leading-[1.5em] text-myGray dark:text-[rgba(240,242,245,.7)] ">
                "Looking for a product designer to turn your vision into
                reality? Or perhaps a design partner to elevate your business to
                new heights? I'm here to help you create impactful,
                user-centered designs that bring your ideas to life and drive
                your business forward."
              </p>
            </div>
          </div>
          {/* top info */}

          {/* contact area */}

          <div className="mt-[54px]">
            {/* contact box */}
            <div className="p-6 bg-myBgLight dark:bg-myBgDark rounded-lg ">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center flex-wrap">
                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-2">
                    <div className="mb-6 flex flex-col">
                      <label className="text-sm dark:text-white font-medium leading-[1.4em] mb-2">
                        Name
                      </label>
                      <input
                        className="bg-white dark:bg-black rounded-lg py-4 px-6 border border-myBorder dark:border-myBgDarkTwo text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-myGray  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
                        placeholder="Enter your name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-2">
                    <div className="mb-6 flex flex-col">
                      <label className="text-sm dark:text-white font-medium leading-[1.4em] mb-2">
                        Email
                      </label>
                      <input
                        className="bg-white dark:bg-black rounded-lg py-4 px-6 border border-myBorder dark:border-myBgDarkTwo text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-myGray focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-2">
                    <div className="mb-6 flex flex-col">
                      <label className="text-sm dark:text-white font-medium leading-[1.4em] mb-2">
                        Subject
                      </label>
                      <input
                        className="bg-white dark:bg-black rounded-lg py-4 px-6 border border-myBorder dark:border-myBgDarkTwo text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-myGray dark:text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
                        placeholder="Subject"
                        type="text"
                        value={subject || ""}
                        // readOnly
                        onChange={(e) => setSubject(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-2">
                    <div className="mb-6 flex flex-col">
                      <label className="text-sm dark:text-white font-medium leading-[1.4em] mb-2">
                        Budget
                      </label>
                      <input
                        className="bg-white dark:bg-black rounded-lg py-4 px-6 border border-myBorder dark:border-myBgDarkTwo text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-myGray dark:text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
                        placeholder="Budget"
                        type="text"
                        value={budget || ""}
                        // readOnly
                        onChange={(e) => setBudget(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Date and Time Picker */}

                  <div className="w-full px-2">
                    <div className="mb-6 flex flex-col">
                      <label className="text-sm dark:text-white font-medium leading-[1.4em] mb-2">
                        Schedule Date & Time
                      </label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => {
                          setSelectedDate(date);
                        }}
                        showTimeSelect
                        dateFormat="Pp"
                        className="w-full bg-white dark:bg-black rounded-lg py-4 px-6 border border-myBorder dark:border-myBgDarkTwo text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-myGray dark:text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
                        placeholderText="Select Date & Time"
                      />
                    </div>

                    <div className="mb-6 flex flex-col">
                      <label className="text-sm dark:text-white font-medium leading-[1.4em] mb-2">
                        Select Country/Time Zone
                      </label>

                      <Select
                        options={timezones}
                        value={
                          timezones.find((tz) => tz.value === country) || null
                        }
                        onChange={(
                          selectedOption: SingleValue<{
                            label: string;
                            value: string;
                          }>
                        ) =>
                          setCountry(selectedOption ? selectedOption.value : "")
                        }
                        placeholder="Search for your time zone"
                        classNamePrefix="react-select"
                        isClearable
                        className="bg-white dark:bg-black rounded-lg py-4 px-6 text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-myGray dark:text-white transition duration-300 ease-in-out"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            backgroundColor:
                              document.documentElement.classList.contains(
                                "dark"
                              )
                                ? "black"
                                : "white",
                            border: "none", // Remove border
                            boxShadow: "none", // Remove focus effect
                          }),
                          menu: (provided) => ({
                            ...provided,
                            backgroundColor:
                              document.documentElement.classList.contains(
                                "dark"
                              )
                                ? "black"
                                : "white",
                            color: document.documentElement.classList.contains(
                              "dark"
                            )
                              ? "white"
                              : "black",
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected
                              ? document.documentElement.classList.contains(
                                  "dark"
                                )
                                ? "gray"
                                : "lightgray"
                              : document.documentElement.classList.contains(
                                  "dark"
                                )
                              ? "black"
                              : "white",
                            color: document.documentElement.classList.contains(
                              "dark"
                            )
                              ? "white"
                              : "black",
                            "&:hover": {
                              backgroundColor:
                                document.documentElement.classList.contains(
                                  "dark"
                                )
                                  ? "gray"
                                  : "lightgray",
                            },
                          }),
                        }}
                      />
                    </div>
                  </div>

                  {/* Meeting Link Input */}
                  <div className="w-full px-2">
                    <div className="mb-6 flex flex-col">
                      <label className="text-sm dark:text-white font-medium leading-[1.4em] mb-2">
                        Meeting Link (Zoom, Google Meet, Skype)
                      </label>
                      <input
                        className="bg-white dark:bg-black rounded-lg py-4 px-6 border border-myBorder dark:border-myBgDarkTwo text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-myGray  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
                        placeholder="Paste your meeting link"
                        type="url"
                        value={meetingLink}
                        onChange={(e) => setMeetingLink(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* comment box */}
                  <div className="w-full px-2">
                    <div className="mb-6  flex flex-col">
                      <label className="text-sm dark:text-white font-medium leading-[1.4em] mb-2">
                        Comment
                      </label>
                      <textarea
                        className="bg-white dark:bg-black rounded-lg py-4 px-6 border border-myBorder dark:border-myBgDarkTwo text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-myGray  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                        rows={4}
                        placeholder="Type details about your inquiry"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <button
                      type="submit"
                      className="text-base font-medium text-white bg-[#4770ff] hover:bg-[#2563eb] transition-all duration-300 border-0 w-full rounded-lg py-4 px-6 flex items-center justify-center"
                    >
                      Send A Message
                      <IconArrowElbowRight
                        stroke={2}
                        className="w-5 h-5 ml-1"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* contact box */}
          </div>

          {/* contact area */}

          {/* Accordion Start */}
          <div className="mt-[50px] hidden">
            <h2 className="text-3xl font-medium leading-[1.2em] text-myBgDarkTwo dark:text-[#4770ff] mb-8 ">
              Frequently Asked Questions
            </h2>

            {/* accordion */}

            <Accordion />
          </div>
          {/* Accordion End */}
        </div>
      </Card>
    </>
  );
}
