import "./Forms.css";

const ComboBox = ({
  label,
  comboBoxOptions = [],
  name,
  placeholder,
  value,
  hasError,
  error,
  info,
  className: customClassName = [],
  onChange: onChangeHandler = () => {},
  ...rest
}) => {
  return (
    <section className={["form_field", ...customClassName].join(" ")}>
      <label>{label}</label>
      <select
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        {...rest}
      >
        {comboBoxOptions.map((item, key) => (
          <option value={item}> {item} </option>
        ))}
      </select>
      {info && <span className="field_info">{info}</span>}
      {hasError && <span className="field_error">{error}</span>}
    </section>
  );
};

export default ComboBox;
