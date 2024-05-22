import React from "react";

export const ContactMe = () => {
    return (
        <form>
            <input type="text" name="name" placeholder="Name:" required/>
            <input type="email" name="email" placeholder="Email Address" required/>
            <textarea name="text" placeholder="Your Message Here" required/>
            <button type="submit">Submit</button>
        </form>
    )
}