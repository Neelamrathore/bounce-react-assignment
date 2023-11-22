import { useMemo } from "react";


function Button(props) {
  const {
    children,
    size = "",
    block = false,
    outlined = false,
    secondary = false,
    success = false,
    withOutbackground=false,
    danger = false,
  } = props;

  const buttonClasses = useMemo(() => {
    let defaultClasses =
      "rounded-md  font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
      

    if (block) {
      defaultClasses += " block w-full ";
    }

    if (size === "sm") {
      defaultClasses += " text-sm h-8 px-4 py-1  ";
    } else {
      defaultClasses += " h-12 px-4 ";
    }

    if (outlined) {
      if (secondary) {
        defaultClasses += " border-gray-400 border text-gray-600";
      } else if (success) {
        defaultClasses += " border-green-600 border text-green-500";
      } else if (danger) {
        defaultClasses += " border-red-500 border text-red-500";
      } else defaultClasses += " primary-self-text border-blue-400 border ";
    } else {
      if (secondary) {
        defaultClasses += " text-gray-900 leading-6 ";
      } else if (success) {
        defaultClasses += "bg-indigo-600 text-white hover:bg-indigo-500";
      } else if (danger) {
        defaultClasses += " bg-red-500 ";
      }
      else if (withOutbackground) {
        defaultClasses += " bg-white-500 ";
      } else defaultClasses += " primary-background-color ";
    }

    return defaultClasses;
  }, [block, danger, outlined, secondary, size, success,withOutbackground]);

  return (
    <button
    
      type="button"
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
