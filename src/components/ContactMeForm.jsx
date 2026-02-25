import React, { useState } from "react";
const ContactMeForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    return (
        <div id="contact" className="w-full max-w-xl m-8">

            <form action="https://formsubmit.co/75124e7da091b8f688a483c221445adb" method="POST" className="space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
                <div className="form-group">
                    <label htmlFor="name" className="block text-lg">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="block text-lg">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="block text-lg">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows="5"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-gray-600 text-white rounded-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactMeForm;
