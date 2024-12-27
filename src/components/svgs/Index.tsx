


interface SvgProps {
    className?: string;
  }

const Xmark : React.FC<SvgProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='currentColor' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
  );
};
const Hamburger : React.FC<SvgProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12" fill="none">
      <path d="M1 1H33" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M1 11H33" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
  );
};


const Svgs = {
  Xmark,
  Hamburger,
};

export default Svgs;
