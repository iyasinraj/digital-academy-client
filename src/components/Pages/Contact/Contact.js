import React from 'react';

const Contact = () => {
    return (
        <div><div className='text-white text-5xl my-16 font-bold text-center'>
            <h1 className='underline'>CONTACT WITH US</h1>
        </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <iframe className="max-w-1/2 rounded-lg shadow-2xl" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6698979841544!2d90.41911603886942!3d23.75914813799123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8793b2745c1%3A0x39b02b7a4e9cd7e2!2sDIT%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690199162859!5m2!1sen!2sbd" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <h1 className="text-5xl font-bold">Digital Academy</h1>
                        <p className="mt-5"> Address: Rampura, Dhaka - 1219</p>
                        <p> Mobile: <a href="tel:+8801700000000">+880 170 0000 000</a></p>
                        <p> E-mail: <a href="mailto: digitalacademy@mail.com">digitalacademy@mail.com</a></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;