import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'
// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_u54as6k", "template_1a4y6oo", form.current, "G6G6R8wmHHzBlT8Ch").then((result) => {
            console.log(result.text);
            console.log("message sent");
        },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section>
            <div class="py-8 dark:border-gray-600 lg:py-16 px-24 mx-auto md:mx-36 rounded min-width-full">
                <h2 class="mb-4 text-3xl tracking-tight text-gray-800 dark:text-white">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-dark text-gray-800  sm:text-xl">Let's connect and look for ways to work together on exciting projects and contribute to the ever-changing digital world."</p>
                <form ref={form} onSubmit={sendEmail} class="space-y-8">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" name="from_name" id="subject" class="bg-text block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your good name" required/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" name="from_email" class="bg-text shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea name="message" id="message" rows="6" class="bg-text block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let us know how we can help you"></textarea>
                    </div>
                    <button type="submit" value="Send" class=" bg-gradien hover:bg-blue-600 text-white font-800 py-2 px-4 rounded">Send message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;