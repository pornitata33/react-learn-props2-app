import { Link } from "react-router";
 
export default function Home() {
  return (
    <>
      <div>
        <h2 style={{ textAlign:'center', fontSize:'3rem', fontWeight: 'bold',
                    color: '#3C27F5', fontFamily: 'Kanit', marginTop: '30px'
                  }} >
            เรียนรู้ Props ใน React
        </h2>
 
        <p className="text-center mt-7.5 text-3xl font-bold
                    text-blue-500 font-itim">
            Props คือ การส่งข้อมูลจาก Component แม่ไปยัง Component ลูก
        </p>        
 
        <hr className="mt-5 w-[80%] mx-auto h-3 bg-red-500 border-none" />
 
        <div className="mt-10 flex justify-center gap-10">
             <Link to="/showproduct"
                   className="bg-pink-500 text-white py-5 px-10 rounded-xl
                                font-bold hover:bg-pink-700 font-charm">
                  เปิด Show Product 🎁
             </Link>    
 
             <Link to="/showperson"
                   className="bg-green-500 text-white py-5 px-10 rounded-xl
                                font-bold hover:bg-green-700 font-charm">
                  เปิด Show Person 🥸
             </Link>
        </div>
 
      </div>
    </>
  );
}
