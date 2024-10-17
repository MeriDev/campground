const Home = () => {
  return (
    <div
      className="bg-[url('./assets/camp.jpg')] h-[calc(100vh-36px)] bg-cover bg-no-repeat bg-[left_calc(50%)_bottom_calc(40%)]
      flex flex-col items-center justify-center"
    >
      <div className=" glass rounded-sm p-5 w-96 text-center">
        <h1 className="text-3xl mb-4"> Hello Campers</h1>
        <input
          type="text"
          className=" px-3 py-2 rounded-lg w-full"
          name="camp-search"
          placeholder="Search Campgrounds..."
        />
      </div>
    </div>
  );
};

export default Home;
