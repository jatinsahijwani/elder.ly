import React from 'react';
import { Libre_Franklin } from 'next/font/google';

const libreFranklin = Libre_Franklin({
 subsets: ['latin'],
 display: 'swap',
 variable: '--font-libre-franklin',
});

export default function Component() {
 return (
    <html lang="en">
      <body className={libreFranklin.variable}>
        <div className='grid col-span-2'>
          <section className="w-full flex justify-center items-center py-12 pl-[20vh]">
            <div className="container mt-16 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-12 md:px-6 ">
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58932.62392172818!2d75.86010389539406!3d22.60568091309519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stemples%20in%20indore!5e0!3m2!1sen!2sin!4v1714280544312!5m2!1sen!2sin!5m2!1sen!2sin" width="100%" height="500" className='rounded-[20px] w-full'></iframe>
                <div className="h-[400px] w-full rounded-lg" />
              </div>
              <div className="space-y-4">
                <div className="space-y-2 ml-16">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-500 ">Upcoming Events</h2>
                 <p className="text-gray-500 dark:text-gray-400">Check out our upcoming events and join us!</p>
                 <div className="space-y-4">
                    <div className="grid gap-4 col-span-2">
                      <div>
                        <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm w-full md:w-[40vh] transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
                          <h3 className="text-lg font-semibold">Kirtan - Hanumanji Temple, Palhar Nagar</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">May 15, 2024 - May 17, 2024 5:00 PM </p>
                        </div>
                        <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm transition-colors w-full md:w-[40vh] hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
                          <h3 className="text-lg font-semibold">Get Together - Ramleela Garden</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">June 10, 2024 12PM</p>
                        </div>
                        <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm transition-colors w-full md:w-[40vh] hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
                          <h3 className="text-lg font-semibold">Yoga Session - Palhar Nagar Garden</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Daily 5:00AM</p>
                        </div>
                      </div>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </html>
 );
}