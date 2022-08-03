type ButtonLink = {
  text: string;
  url: string;
};

export const HeaderSection = ({
  mainHeading,
  mainTagline,
  buttons,
}: {
  mainHeading: string;
  mainTagline: string;
  buttons: ButtonLink[];
}) => {
  return (
    <div className="bg-black">
      <div className="max-w-5xl mx-auto p-16">
        <h1 className="text-white text-4xl">{mainHeading}</h1>
        <p className="text-gray-400 my-6">{mainTagline}</p>
        <div>
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`${
                isFirstButton(index) ? "bg-white" : "bg-red-500"
              } p-2 mr-2 ${isFirstButton(index) ? "" : "text-black"}`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const isFirstButton = (index: number) => index === 0;
