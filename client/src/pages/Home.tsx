const Home = () => {
  return (
    <div
      className="bg-[url('./assets/camp.jpg')] h-[calc(100vh-36px)] bg-cover bg-no-repeat bg-[left_calc(50%)_bottom_calc(40%)]
      relative -z-10"
    >
      <div className="flex flex-col items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%]">
        <h1 className="text-3xl"> Hello Campers</h1>
      </div>
    </div>
  );
};

export default Home;
