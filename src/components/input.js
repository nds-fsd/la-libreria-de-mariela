import Proptypes from "prop-types";

const styles = {
  height: "80px",
  width: "230px",
  border: "2px solid black",
  padding: "6px",
  borderRadius: "3px",
  color: "grey",
};

const MyInput = ({ label, onChange, type, color }) => {
  return (
    <input
      value={label}
      type={type}
      onChange={onChange}
      style={{ ...styles, backgroundColor: color, fontWeight: "bold" }}
      placeholder="Enter your input here"
    />
  );
};

MyInput.propTypes = {
  label: Proptypes.string,
  onChange: Proptypes.func,
  type: Proptypes.string,
  color: Proptypes.string,
};

export default MyInput;
