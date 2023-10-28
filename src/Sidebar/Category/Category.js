import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
      </label>
      <div>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
