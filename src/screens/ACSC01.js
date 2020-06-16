import React from "react";
import Lnb from "../components/Lnb";

class ACSC01 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      const arr = ["경민", "예림", "효진"];

      this.setState({
        dataList: arr,
      });
    }, 5000);
  };

  render() {
    const { dataList } = this.state;
    return (
      <div className="ACSC01">
        <Lnb title="About" column="Home > About" />
        {dataList.length === 0 ? (
          <div>데이터를 불러오는 중 입니다.</div>
        ) : (
          dataList.map((data, idx) => {
            return (
              <div>
                {idx + 1}.{data}
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default ACSC01;
