/**
 * Created by Aliaksei on 07.03.17.
 */
import React, {Component} from 'react'
import './Schedule.css';

class Schedule extends Component {
    render() {
        return (
            <div className="header">
                <p className="title1">CENTRAL RAILROAD OF NEW JERSEY</p>
                <p className="title2">NEW YORK AND LONG BRANCH DIVISION.</p>
                <p className="title3">Passenger Station in New York, Foot of Liberty Street, North River.</p>
                <table cellPadding="16">
                    <tr>
                        <td height="38px" width="359px" colSpan="8"><p className="way">TRAINS FROM NEW YORK.</p></td>
                        <td className="unBorderBottom" width="2px"></td>
                        <td className="unBorderRight way" width="359px" colSpan="8">TRAINS FROM LONG BRANCH.</td>
                    </tr>
                    <tr>
                        <td className="time unBorderLeft unBorderTopBottom" rowSpan="2" width="80px"><h className="timeBig">LEAVE.</h></td>
                        <td className="time" height="29px" width="38.5px">2</td>
                        <td className="time" width="38.5px">4</td>
                        <td className="time" width="38.5px">6</td>
                        <td className="time" width="38.5px">8</td>
                        <td className="time" width="38.5px">10</td>
                        <td className="time" width="38.5px">12</td>
                        <td className="time" width="40px">14</td>
                        <td className="unBorderTopBottom"></td>
                        <td className="time unBorderTopBottom" rowSpan="2" width="87px"><h className="timeBig">LEAVE.</h></td>
                        <td className="time" height="29px" width="38.5px">1</td>
                        <td className="time" width="38.5px">3</td>
                        <td className="time" width="38.5px">5</td>
                        <td className="time" width="38.5px">7</td>
                        <td className="time" width="38.5px">9</td>
                        <td className="time" width="38.5px">11</td>
                        <td className="time unBorderRight">13</td>
                    </tr>
                    <tr>
                        <td className="time unBorderTopBottom" height="18px">A.M.</td>
                        <td className="time unBorderTopBottom">A.M.</td>
                        <td className="time unBorderTopBottom">A.M.</td>
                        <td className="time unBorderTopBottom">P.M.</td>
                        <td className="time unBorderTopBottom">P.M.</td>
                        <td className="time unBorderTopBottom">P.M.</td>
                        <td className="time unBorderTopBottom">P.M.</td>
                        <td className="unBorderTopBottom"></td>
                        <td className="time unBorderTopBottom">A.M.</td>
                        <td className="time unBorderTopBottom">A.M.</td>
                        <td className="time unBorderTopBottom">A.M.</td>
                        <td className="time unBorderTopBottom">A.M.</td>
                        <td className="time unBorderTopBottom">P.M.</td>
                        <td className="time unBorderTopBottom">P.M.</td>
                        <td className="time unBorderRight unBorderTopBottom">P.M.</td>
                    </tr>
                    {this.props.list.map(item => <tr>
                        <td className="unBorderBottom unBorderTopBottom" height="16px"><p className="nameStation">{item.nameStation1}</p></td>
                        <td className="unBorderTopBottom"><p6>{item.time2}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time4}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time6}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time8}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time10}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time12}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time14}</p6></td>
                        <td className="unBorderTopBottom"></td>
                        <td className="unBorderTopBottom"><p className="nameStation">{item.nameStation2}</p></td>
                        <td className="unBorderTopBottom"><p6>{item.time1}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time3}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time5}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time7}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time9}</p6></td>
                        <td className="unBorderTopBottom"><p6>{item.time11}</p6></td>
                        <td className=" unBorderRight unBorderTopBottom"><p6>{item.time13}</p6></td>
                    </tr> )}
                </table>
            </div>
        );
    }
}

export default Schedule