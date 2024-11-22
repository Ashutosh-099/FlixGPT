import { useSelector } from "react-redux";
import { lang } from "../../utils/languageConfig";

const GPTSearchContainer = () => {
  const langKey = useSelector((store) => store.langConfig.lang);

  return (
    <div className="absolute w-full background-image-login bg-cover h-screen">
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={lang[langKey].searchBarPlaceholder}
          />
          <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchContainer;
