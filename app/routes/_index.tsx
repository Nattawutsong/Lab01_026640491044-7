import { ObjectHTMLAttributes } from "react";
export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to MyBook</h1>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {todos.map((todo) => (
          <div key={todo.Code} className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{todo.Title}</h2>
            <img src={todo.Cover} alt={todo.Title} className="w-48 h-auto mb-4" />
            <p><strong>Author:</strong> {todo.Author}</p>
            <p><strong>Category:</strong> {todo.Category}</p>
            {todo.Publishing && <p><strong>Publishing:</strong> {todo.Publishing}</p>}
            {todo.Price && <p><strong>Price:</strong> {todo.Price}</p>}
            <p><strong>Bestsellers:</strong> {todo.Bestsellers}</p>
            {todo.Flashsale && <p><strong>Flashsale:</strong> {todo.Flashsale}</p>}
          </div>
        ))}
      </div>
      
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://www.naiin.com/"
            rel="noreferrer"
          >
            เว็บที่อ้างอิง
          </a>
        </li>
      </ul>
    </div>
  );
}

const todos = [
  {
    Code: 1,
    Title: "จิตวิทยาสายดาร์ก",
    Cover: "/images/1.jpg",
    Category: "จิตวิทยา การพัฒนาตัวเอง , การพัฒนาตัวเอง how to",
    Author: "Dr.Hiro",
    Publishing: "",
    Price: "225",
    Bestsellers: "225",
    Flashsale: "",
    
  },
  {
    Code: 2,
    Title: "บ้านวิกลคนประหลาด",
    Cover: "/images/2.jpg",
    Category: "นิยายแปล , นิยายญี่ปุ่น , ลี้ลับ , สยองขวัญ",
    Author: "อุเก็ตสึ",
    Publishing: "",
    Price: "238.50",
    Bestsellers: "225",
    Flashsale: "",
  },
  {
    Code: 3,
    Title: "ผีหลอกอย่างหลอกผี",
    Cover: "/images/3.jpg",
    Category: "ลี้ลับ , สยองขวัญ",
    Author: "มัฑศิกาญจน",
    Publishing: "",
    Price: "4.50",
    Bestsellers: "225",
    Flashsale: "",
  },
  {
    Code: 4,
    Title: "หมวก 6 ใบ คิด 6 แบบ (วีเลิร์น)",
    Cover: "/images/4.jpg",
    Category: "จิตวิทยา การพัฒนาตัวเอง , การพัฒนาตัวเอง how to",
    Author: "EDWARD DE BONO",
    Publishing: "",
    Price: "216",
    Bestsellers: "",
    Flashsale: "",
  },
  {
    Code: 5,
    Title: "ซ่อมแซมใจแล้วไปต่อ",
    Cover: "/images/5.jpg",
    Category: "จิตวิทยา การพัฒนาตัวเอง , การพัฒนาตัวเอง how to",
    Author: "กาย วินช์ (Guy Winch)",
    Publishing: "",
    Price: "193.50",
    Bestsellers: "225",
    Flashsale: "",
  },
];
