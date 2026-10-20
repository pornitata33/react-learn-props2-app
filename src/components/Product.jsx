export default function Product({pName, pPrice, pQuan, pImg}) {
  return (
    <>
      <div className="border-2 border-pink-600 rounded-lg p-3">
        <img src={pImg} className="w-20 block mx-auto mb-5" />
        <p className="font-bold">ชื่อสินค้า : {pName}</p>
        <p>ราคาสินค้า : {pPrice}</p>
        <p>จำนวนสินค้า : {pQuan}</p>
      </div>
    </>
  )
}
