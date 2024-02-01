import star from "../../assets/star.svg";

export default function Rating({ value }) {
  const stars = new Array(Math.round(value)).fill(star);

  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="star" />
      ))}
    </>
  );
}
