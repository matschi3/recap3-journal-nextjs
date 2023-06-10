import Header from "@/components/Header";
import Container from "@/components/Container";
import useLocalStorageState from "use-local-storage-state";
import Entries from "@/components/Entries";
import Form from "@/components/Form";

export default function Home() {
  const [entries, setEntries] = useLocalStorageState("personalEntries", {
    defaultValue: [
      {
        id: "00000000",
        title: "Beispiel-Titel",
        text: "Hier könnte dein Beitrag stehen. Trage schnell etwas ins Formular ein um zu starten!",
        date: "09.06.2023",
        isFavorite: false,
      },
      {
        id: "00000001",
        title: "Beispiel-Titel #2",
        text: "Hier könnte dein Beitrag stehen. Trage schnell etwas ins Formular ein um zu starten!",
        date: "10.06.2023",
        isFavorite: false,
      },
    ],
  });

  function handleNewEntry(dataNewEntry) {
    const NewEntry = {
      id: uid(),
      title: dataNewEntry.formInput,
      text: dataNewEntry.formTextarea,
      date: new Date().toLocaleDateString("de-DE"),
      isFavorite: false,
    };
    setEntries([NewEntry, ...entries]);
  }

  return (
    <>
      <Header title="JOURNAL in Next.js" />
      <Container direction="column" align="center">
        <Form handleNewEntry={handleNewEntry} />
        <Container direction="column" align="center">
          <p>tabBar</p>
          <Container direction="column" align="center">
            <Entries entries={entries} />
          </Container>
        </Container>
      </Container>
    </>
  );
}
