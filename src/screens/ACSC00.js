import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class ACSC00 extends React.Component {
  render() {
    return (
      <div className="ACSC00">
        <div className="ACSC00__bg">
          <div className="ACSC00__bg__desc">
            <h2>맞춤형 교육 시스템</h2>
            <p>전국 최초 학생형 맞춤 교육</p>
            <p>입문부터 개발자까지 한번에</p>
          </div>

          <div className="ACSC00__bg__arrow">
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default ACSC00;
