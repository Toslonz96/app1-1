import React from "react";
import './products.css';

export default class Product extends React.Component {
    
        data = [
            ['React', 500],
            ['React Native', 80],
            ['Node.js', 90],
            ['MongoDB', 70],
            ['Express.js', 60]
        ]

    render() {
        return (
            <table border = "1">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {
                    this.data.map(d => {
                        return (
                            <tr>
                                <td>{d[0]}</td>
                                <td>{d[1]}</td>
                            </tr>
                        )
                    })
                }
            </table>
        )
    }
}
