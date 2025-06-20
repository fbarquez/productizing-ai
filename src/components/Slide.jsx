export default function Slide({ slide }) {
  return (
    <section className="slide">
      <h2>{slide.title}</h2>
      <p>{slide.content}</p>
    </section>
  );
}