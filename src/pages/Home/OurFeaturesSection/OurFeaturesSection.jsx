import customerSupport from "/customerSupport.png";
import parcelSafety from "/parcelSafety.png";
import fastdelivery from "/fastdelivery.png";

const OurFeaturesSection = () => {
  const features = [
    {
      icon: parcelSafety,
      title: "Parcel Safety",
      description: "Ensuring your parcels are delivered safely and securely.",
      coverimage:
        "https://images.pexels.com/photos/4392043/pexels-photo-4392043.jpeg",
    },
    {
      icon: fastdelivery,
      title: "Super Fast Delivery",
      description:
        "Get your parcels delivered in record time with our efficient delivery network.",
      coverimage:
        "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
    },
    {
      icon: customerSupport,
      title: "Excellent Customer Support",
      description:
        "Our team is here to support you 24/7 with any queries or issues.",
      coverimage:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
    },
  ];
  return (
    <>
      <h2 className="text-2xl md:text-4xl text-red-500 font-lato pt-10 pb-5 font-bold text-center">
        Why Choose Us?
      </h2>
      <div className="flex flex-col md:flex-row  gap-10 lg:mx-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full  mx-auto"
          >
            <div
              style={{
                "--image-url": `linear-gradient(45deg,rgba(0,0,0,0.9),rgba(0,0,0,0.3)),url(${feature?.coverimage})`,
              }}
              className={`w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md bg-[image:var(--image-url)]`}
            >
              <div className="flex items-center justify-center w-full h-full p-10 text-white text-center">
                {feature.description}
              </div>
            </div>

            <div className="w-2/3 -mt-10 overflow-hidden flex items-center justify-center lg:gap-5 bg-white rounded-lg shadow-lg  dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                <img src={feature.icon} className="size-10" alt="" />
              </h3>
              <h2 className=" font-bold text-center uppercase">
                {" "}
                {feature.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurFeaturesSection;
