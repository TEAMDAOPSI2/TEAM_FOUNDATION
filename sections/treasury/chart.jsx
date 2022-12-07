import {Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip} from "recharts";
import {formatNumber} from "../../utils/money_format";

const Chart = () => {
    const data = [
        {name: 'HELD IN TREASURY', value: 4157808212},
        {name: 'BURNED', value: 63820612},
        {name: 'CIRCULATING SUPPLY', value: 6778317176},
    ]

    const renderCustomizedLabel = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, name, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g className="mobile-gone">
                <path  d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text className="pie-legend-title" x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#fff">
                    $ {formatNumber(value)}
                </text>
                <text className='pie-legend-sub-title' x={ex + (cos >= 0 ? 1 : -1) * 21} y={ey} dy={31} textAnchor={textAnchor} fill="#333">
                    {`${name}`}
                </text>
            </g>
        );
    };


    const COLORS = ['#fff', '#fff', '#FFBB28'];

    return (
      <>
          <div className="chart" style={{width: '100%'}}>
              <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={700} height={400}>
                      {/*<Tooltip content={customTooltip}/>*/}
                      <Pie
                          data={data}
                          cx={"50%"}
                          cy={200}
                          innerRadius={'40%'}
                          outerRadius={'60%'}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={renderCustomizedLabel}
                      >
                          {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                      </Pie>
                  </PieChart>
              </ResponsiveContainer>
          </div>
          <div className="legend">
              <ul>
                  {
                      data.map((item, index) => {
                          return (
                              <li key={index}>
                                  <span className="legend-color" style={{backgroundColor: COLORS[index]}}></span>
                                  <div className="entry">
                                      <span className="legend-title">{item.name}</span> <br/>
                                      <span className="legend-value">$ {formatNumber(item.value)}</span>
                                  </div>
                              </li>
                          )
                      })
                  }
              </ul>
          </div>
      </>
    )
}

export default Chart;