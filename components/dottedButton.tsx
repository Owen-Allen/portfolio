const DottedButton = (props:{onClick:()=>void, className: string}) => {
    return (
      <a target="_blank" href="/resume.pdf" className={props.className + "text-center rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"}>
        See my Resume
      </a>
    );
  };
  
  export default DottedButton;