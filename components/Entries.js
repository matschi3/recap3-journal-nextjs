import Container from "./Container";

export default function Entries({ entries }) {
  return (
    <Container direction="column" align="center">
      {entries.map((entry) => {
        <section key={entry.id}>
          <p>{entry.date}</p>
          <p>{entry.title}</p>
          <p>{entry.text}</p>
          <button>SVG</button>
        </section>;
      })}
    </Container>
  );
}
