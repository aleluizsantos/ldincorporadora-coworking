const Errors = ({ touched, errors }) => {
  return touched && Array.isArray(errors) ? (
    errors.map((item, idx) => {
      return <span key={idx}>⚠️{item}</span>;
    })
  ) : (
    <div />
  );
};

export default Errors;
