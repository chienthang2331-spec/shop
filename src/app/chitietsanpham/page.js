import Image from "next/image";
import styles from "./page.module.css";

export default function ChiTietSanPham() {
  const product = {
    id: 1,
    name: "Quạt điều hòa Kangaroo KG50F103 130W",
    price: 3800000,
    oldPrice: 4000000,
    percent: 20,
    image: "/cars/p1.jpg",
    brand: "Kangaroo",
    power: "130W",
    tankCapacity: "50L",
    windModes: ["Gió thường", "Gió tự nhiên", "Gió ngủ"],
    features: [
      "Làm mát nhanh với công suất lớn",
      "Dung tích bình nước lớn 50L",
      "Tiết kiệm điện năng",
      "Điều khiển từ xa tiện lợi",
      "Bánh xe di chuyển linh hoạt"
    ],
    description:
      "Quạt điều hòa Kangaroo KG50F103 là giải pháp làm mát hiệu quả cho không gian lớn như phòng khách, quán cà phê hoặc văn phòng."
  };

  return (
    <div className={styles.container}>
      <div className={styles.productWrapper}>
        
        <div className={styles.imageBox}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.name}>{product.name}</h1>

          <div className={styles.priceBox}>
            <span className={styles.price}>
              {product.price.toLocaleString()}đ
            </span>
            <span className={styles.oldPrice}>
              {product.oldPrice.toLocaleString()}đ
            </span>
            <span className={styles.discount}>-{product.percent}%</span>
          </div>

          <div className={styles.section}>
            <p><span className={styles.label}>Thương hiệu:</span> {product.brand}</p>
            <p><span className={styles.label}>Công suất:</span> {product.power}</p>
            <p><span className={styles.label}>Dung tích:</span> {product.tankCapacity}</p>
          </div>

          <div className={styles.section}>
            <p className={styles.label}>Tính năng:</p>
            <ul className={styles.features}>
              {product.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <p className={styles.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}