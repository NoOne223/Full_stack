'use client'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

type Author = {
  id: number;
  author_name: string;
  author_birthday: string;
  piece_name: string;
  year_of_composition: string;
  description: string;
};

export default function Home() {
  const [authors, setAuthors] = useState<Author[]>([]); // ✅ Luôn khởi tạo là mảng

  useEffect(() => {
    fetch("/data/tabledata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu nhận được:", data); // ✅ Kiểm tra dữ liệu trả về
        if (Array.isArray(data)) {
          setAuthors(data); // ✅ Nếu đúng là mảng thì set
        } else if (data.authors && Array.isArray(data.authors)) {
          setAuthors(data.authors); // ✅ Truy cập vào key "authors" nếu có
        } else {
          console.error("Dữ liệu không hợp lệ:", data);
        }
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  return (
    <>
      <table className="table-fixed m-auto">
        <thead>
          <tr>
            <th>Tên tác giả</th>
            <th>Năm sinh</th>
            <th>Tên tác phẩm</th>
            <th>Năm xuất bản</th>
            <th className="w-[800px]">Nội dung</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td className="text-center">{author.author_name}</td>
              <td className="text-center">{author.author_birthday}</td>
              <td className="text-center">{author.piece_name}</td>
              <td className="text-center">{author.year_of_composition}</td>
              <td className="">{author.description}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={5} className="text-center"><button><FontAwesomeIcon icon={faCirclePlus} /></button></td>
          </tr>
        </tbody>
      </table>
      
    </>
  );
}
