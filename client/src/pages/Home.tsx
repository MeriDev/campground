const Home = () => {
  return (
    <div
      className="fixed top-0 left-0 -z-10 bg-[url('./assets/camp.jpg')] h-[100vh] w-full bg-cover bg-no-repeat bg-[left_calc(50%)_bottom_calc(40%)]
      flex flex-col items-center justify-center"
    >
      <div className=" glass rounded-lg p-16 w-[70vw] absolute top-1/2 -translate-y-[70%]">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-color via-primary-color/55 text-transparent bg-clip-text">
            Hello Campers
          </h1>
          <h2 className="text-neutral-500  text-2xl mb-4">
            Start Booking for your next adeventure Today
          </h2>
        </div>
        <form className="flex">
          {' '}
          <input
            type="text"
            className=" px-3 py-2 rounded-tl-lg rounded-bl-lg w-full "
            name="camp-search"
            placeholder="Search Campgrounds..."
          />
          <button className=" bg-orange-600 px-5 text-white rounded-tr-lg rounded-br-lg cursor-pointer">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
