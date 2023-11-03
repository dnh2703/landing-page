import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button } from '../../components/Elements';

type ContactFormType = {
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormType>();
  const onSubmit: SubmitHandler<ContactFormType> = (data) =>
    Swal.fire('Success!', 'We will contact you soon!', 'success');

  return (
    <section className="lg:py-20 py-12">
      <div className="flex flex-col items-center justify-center ">
        <h2>Contact Us</h2>
        <p className="py-6 text-l max-w-screen-md text-center  ">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <div className="w-full max-w-screen-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="" htmlFor="">
                <p className="font-semibold text-m pb-2 border-black">
                  Your email
                </p>
                <input
                  {...register('email', {
                    required: 'Please provide the email',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please write correct email',
                    },
                  })}
                  className="w-full py-3 px-4 rounded-lg"
                  placeholder="name@gmail.com"
                  type="email"
                />
              </label>
              <small className="text-red font-medium py-4">
                {errors?.email ? errors.email.message : ''}
              </small>
            </div>
            <div className="mb-4">
              <label htmlFor="">
                <p className="font-semibold text-m pb-2 border-black">
                  Subject
                </p>
                <input
                  {...register('subject', { required: 'Please fill subject' })}
                  className="w-full py-3 px-4 mb-5 rounded-lg"
                  placeholder="Let us know how we can help you"
                  type="text"
                />
              </label>
              <small className="text-red font-medium py-4">
                {errors?.subject ? errors.subject.message : ''}
              </small>
            </div>
            <div className="mb-4">
              <label htmlFor="">
                <p className="font-semibold text-m pb-2 border-black">
                  Your message
                </p>
                <textarea
                  {...register('message')}
                  rows={6}
                  placeholder="Leave a comment..."
                  className="w-full py-3 px-4 mb-5 rounded-lg"
                />
              </label>
            </div>
            <Button
              className="bg-blue-600 px-4 py-2 rounded-md text-white text-l font-bold"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
