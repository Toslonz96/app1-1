import React from "react";

export default function Home() {
    return (
        <p style={{textAlign:'center'}}>
            <h3>Welcome to the Home Page</h3>
            รายชื่อ <a href="/products">สินค้า</a>ที่เรามีจำหน่าย <br />
            แต่ท่านต้องเป็น <a href="/member">สมาชิก</a> จึงจะสั่งได้ <br />
            หากมีข้อสงสัย <a href="/contact">กรุณาติดต่อเรา</a>
        </p>
    )
}