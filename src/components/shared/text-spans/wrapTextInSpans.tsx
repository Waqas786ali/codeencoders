const wrapTextInSpans = (text: string) => {
    return text.split('').map((char, index) => (
      char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>
    ));
};


export default wrapTextInSpans;;