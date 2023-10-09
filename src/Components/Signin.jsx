import { Link } from "react-router-dom";

const Signin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
  };

  return (
    <section className=' py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='w-full px-4'>
          <div className='relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-base-200 py-16 px-10 text-center sm:px-12 md:px-[60px]'>
            <div className='mb-10 text-center md:mb-16'>
              <Link to={"/"}>
                <p className='font-extrabold text-2xl md:text-4xl'>
                  <span className='text-[#50b8e7] '>Event</span>Devify
                </p>
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className='w-full border-0 rounded-md p-3 mb-4'
                type='email'
                name='email'
                placeholder='Email'
                required
              />

              <input
                className='w-full border-0 rounded-md p-3 mb-4'
                type='password'
                name='pass'
                placeholder='Password'
                required
              />

              <div className='mb-10'>
                <button
                  className='btn btn-info text-white w-full'
                  type='submit'
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className='mb-6 text-base text-[#adadad]'>Connect With</p>
            <ul className='-mx-2 mb-12 flex justify-between'>
              <li className='w-full px-2'>
                <button
                  className='btn hover:bg-[#D64937] bg-[#D64937] text-white w-full'
                  type='submit'
                >
                  Google
                </button>
              </li>
            </ul>
            <a
              href='/#'
              className='mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline'
            >
              Forget Password?
            </a>
            <p className='text-base text-[#adadad]'>
              Not a member yet?
              <Link
                to={"/signup"}
                className='text-[#50b8e7] hover:underline'
              >
                Sign Up
              </Link>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
