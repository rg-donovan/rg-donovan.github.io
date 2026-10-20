import links from "../links";

const LetsConnect = () => {
  return (
    <div className="bg-purple-100 w-full flex flex-col items-center text-center text-2xl">
      <div className="max-w-screen-md xl:max-w-screen-lg py-14 mx-12">
        <h2 className="text-4xl font-black pb-4">Let's Connect!</h2>
        <p className="pb-10">It's always great meeting new people! Feel free to connect if you'd like to talk.</p>
        <div className="grid gap-4 grid-rows-2 grid-cols-2 text-white xl:grid-rows-1 xl:grid-cols-4">
          {links.map(({ label, href, icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: "_blank", rel: "noreferrer" })}
              className="transform transition ease-in-out duration-150 py-3 hover:bg-indigo-600 bg-indigo-500 flex justify-center items-center rounded-lg shadow-lg"
            >
              <img src={icon} alt="" className="inline w-10 mr-2" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LetsConnect;
