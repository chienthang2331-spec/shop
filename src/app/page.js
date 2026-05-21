import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const products = [
    { id: 1, name: "Quạt điều hòa Kangaroo KG50F103 130W", price: "3.800.000₫", oldPrice: "4.000.000₫", percent: "-20%", image: "/cars/p1.jpg" },
    { id: 2, name: "Quạt điều hòa Panasonic 120W", price: "2.500.000₫", oldPrice: "3.000.000₫", percent: "-15%", image: "/cars/p2.jpg" },
    { id: 3, name: "Quạt hơi nước Xiaomi", price: "1.800.000₫", oldPrice: "2.200.000₫", percent: "-10%", image: "/cars/p3.jpg" },
    { id: 4, name: "Máy lọc nước Karofi 10 cấp", price: "5.200.000₫", oldPrice: "6.500.000₫", percent: "-25%", image: "/cars/p1.jpg" },
    { id: 5, name: "Tủ lạnh Samsung Inverter 208L", price: "7.100.000₫", oldPrice: "8.900.000₫", percent: "-20%", image: "/cars/p2.jpg" },
    { id: 6, name: "Nồi cơm điện Sharp 1.8L", price: "1.200.000₫", oldPrice: "1.500.000₫", percent: "-18%", image: "/cars/p3.jpg" },
  ];

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>

        <div className={styles.logo}>
          MATME<span>SHOP</span>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className={styles.mainContent}>
        {products.map((item) => (
          <div className={styles.product} key={item.id}>
            <div className={styles.mainProduct}>
              <div className={styles.productImage}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.productName}>
                <h5>{item.name}</h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>{item.price}</strong>
                <div className={styles.priceSub}>
                  <label className={styles.oldPrice}>{item.oldPrice}</label>
                  <small className={styles.percent}>{item.percent}</small>
                </div>
              </div>
            </div>

            <div className={styles.buyButton}>Mua ngay</div>
          </div>
        ))}
      </div>

      
      <div className={styles.footer}>
        <p>© 2026 MyShop. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}