import { useTheme } from "../context/ThemeContext";


const Home = () => {
  const {  theme } = useTheme();
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className={ theme === 'purple' ?`bg-gradient-to-r from-amber-200 via-amber-600 to-amber-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl` : `bg-gradient-to-r from-teal-200 via-teal-600 to-teal-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl`}>
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-md btn-primary px-12 py-3 text-sm font-medium text-white  focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded-md btn-outlined px-12 py-3 text-sm font-medium  focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home