import React from "react";
import { Range } from "rc-slider";

class Filters extends React.Component {
  render() {
    const { filters, setFilter } = this.props;

    return (
      <div>
        <div>
          <label>
            Age ({filters.get("ageMin")} - {filters.get("ageMax")})
          </label>
          <Range
            onChange={e => {
              setFilter("ageMin", e[0]);
              setFilter("ageMax", e[1]);
            }}
            min={0}
            max={100}
            value={[filters.get("ageMin"), filters.get("ageMax")]}
          />
        </div>
        <div>
          <label>Genders</label>
          {["m", "f"].map(g => (
            <div>
              <input
                type="checkbox"
                checked={filters.get("gender").includes(g)}
                onChange={e => {
                  const set = e.target.checked
                    ? filters.get("gender").add(g)
                    : filters.get("gender").remove(g);

                  setFilter("gender", set);
                }}
              />{" "}
              {g}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Filters;
