import Container from "./Container";

export default function Entries({ entries }) {
  console.log(entries);
  return (
    <Container direction="column" align="center">
      {entries.map((entry) => (
        <article key={entry.id}>
          <p>{entry.date}</p>
          <p>{entry.title}</p>
          <p>{entry.text}</p>
          <button>SVG</button>
        </article>
      ))}
    </Container>
  );
}

/*  {
  id: "00000000",
  title: "Beispiel-Titel",
  text: "Hier könnte dein Beitrag stehen. Trage schnell etwas ins Formular ein um zu starten!",
  date: "10.06.2023",
  isFavorite: false,
} */
