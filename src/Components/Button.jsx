function Button({ text, id, className }) {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt="Arrow down"
            className="arrow"
          />
        </div>
      </div>
    </a>
  );
}

export default Button;
