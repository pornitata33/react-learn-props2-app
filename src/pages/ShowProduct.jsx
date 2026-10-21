import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function ShowProduct() {
    return (
        <>
            <div>
                <h2 className="text-center text-4xl font-bold font-kanit text-pink-500 mt-10">
                    แสดงข้อมูลสินค้า Show Product
                </h2>

                {/* แสดงไอคอน Facebook และ Google */}
                <p className="flex justify-center gap-10 mt-5">
                    <FaFacebook className="text-blue-700 text-4xl" />
                    <FaGoogle className="text-orange-600 text-4xl" />
                </p>

                <hr className="mt-10 mb-10 w-[80%] mx-auto h-2 bg-pink-800 border-none" />

                {/* แสดงสินค้า 4 ชิ้นต่อจากเส้น hr */}
                <div className="flex justify-center gap-5">
                    {/* สินค้าตัวที่ 1 */}
                    <Product pName="iPhone" pPrice={35000.50} pQuan={100} pImg={Hero} />

                    {/* สินค้าตัวที่ 2 */}
                    <Product pName="Samsung" pPrice={23000.75} pQuan={50} pImg={Hero} />

                    {/* สินค้าตัวที่ 3 */}
                    <Product pName="Vivo" pPrice={15000.25} pQuan={55} pImg={Hero} />

                    {/* สินค้าตัวที่ 4 */}
                    <Product pName="Oppo" pPrice={26000.50} pQuan={299} pImg={Hero} />
                </div>
            </div>
        </>
    );
}