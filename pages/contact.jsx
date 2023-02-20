import Footer from "../components/Footer";
import Header from "../components/Header";
import Square from "../components/square";
import emailjs from "@emailjs/browser";
import Router from "next/router";
import Head from "next/head";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8hfgxpu",
        "template_8mu4a2l",
        form.current,
        "KspOPe0fC64G75tYs"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("Send Message successful");
            Router.reload(window.location.pathname);
          } else {
            alert("Send Message failed, please try again");
            Router.reload(window.location.pathname);
          }
        },
        (err) => {
          console.log("fail", err);
        }
      );
  };
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Created by Tuon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="icon-sm.png" />
      </Head>
      <Header />
      <main className="bg-pink1-cus py-32 xs:py-24">
        <div className="mx-96 md:mx-10 xs:mx-0">
          <div className="flex justify-center items-center ">
            <Square />
            <span className="font-bold tracking-wider text-2xl">
              Let&apos;s talk
            </span>
          </div>
          <div className="mt-10 xs:mx-5">
            <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
              <label className="mb-2">Your name</label>
              <input
                placeholder="Enter your name"
                type="text"
                required
                title="Your name should be only words"
                className="bg-none h-10 rounded"
                name="from_name"
              />
              <label className="mt-5 mb-2">Your email</label>
              <input
                placeholder="Enter your email"
                type="email"
                required
                patterm="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                title="Your email should be eligible"
                className="h-10 rounded"
                name="from_email"
              ></input>
              <label className="mt-5 mb-2">Your subject</label>
              <input
                placeholder="Enter your subject"
                type="subject"
                required
                maxLength="100"
                title="Max length of subject should be less than 100"
                className="h-10 rounded"
                name="subject"
              ></input>
              <label className="mt-5 mb-2">Message</label>
              <textarea
                placeholder="Leave your message here"
                type="text"
                required
                className="h-32 rounded"
                name="message"
              />
              <input
                type="submit"
                className="bg-blue-cus text-white cursor-pointer w-20 h-10 mt-10 rounded"
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
