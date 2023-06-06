import Header from "@/components/Header";
import Container from "@/components/Container";
import useLocalStorageState from "use-local-storage-state";

export default function Home() {
  const [entries, setEntries] = useLocalStorageState("personalEntries", {
    defaultValue: {
      id: "00000000",
      title: "Beispiel-Titel",
      text: "Hier könnte dein Beitrag stehen. Trage schnell etwas ins Formular ein um zu starten!",
      isFavorite: false,
    },
  });

  return (
    <>
      <Header title="JOURNAL in Next.js" />
      <Container direction="column" align="center">
        <p>form</p>
        <Container direction="column" align="center">
          <p>tabBar</p>
          <Container direction="column" align="center">
            <p>entries</p>
          </Container>
        </Container>
      </Container>
    </>
  );
}
