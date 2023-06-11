import Header from "@/components/Header";
import Container from "@/components/Container";
import useLocalStorageState from "use-local-storage-state";
import Entries from "@/components/Entries";
import Form from "@/components/Form";
import { uid } from "uid";
import TabBar from "@/components/TabBar";

export default function Home() {
  const [entries, setEntries] = useLocalStorageState("personalEntries", {
    defaultValue: [
      {
        id: "e92d0fea1b2",
        category: "standard",
        title: "Beispiel-Titel",
        text: "Hier könnte dein Beitrag stehen. Trage schnell etwas ins Formular ein um zu starten!",
        date: "09.06.2023",
        isFavorite: false,
      },
    ],
  });

  function handleNewEntry(dataNewEntry) {
    const NewEntry = {
      id: uid(),
      category: dataNewEntry.formCategory.toLowerCase(),
      title: dataNewEntry.formInput,
      text: dataNewEntry.formTextarea,
      date: new Date().toLocaleDateString("de-DE"),
      isFavorite: false,
    };
    setEntries([NewEntry, ...entries]);
  }

  function handleBookmark(id) {
    const newEntries = entries.map((entry) => {
      console.log(entry.id);
      if (entry.id != id) return entry;
      return { ...entry, isFavorite: !entry.isFavorite };
    });
    setEntries(newEntries);
  }

  function handleDelete(id) {
    const newEntries = entries.filter((entry) => {
      return entry.id != id;
    });
    setEntries(newEntries);
  }

  return (
    <>
      <Header title="JOURNAL in Next.js" />
      <Container direction="column" align="center">
        <Form handleNewEntry={handleNewEntry} />
        <Container direction="column" align="center">
          <TabBar />
          <Container direction="column" align="center">
            <Entries
              entries={entries}
              handleBookmark={handleBookmark}
              handleDelete={handleDelete}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
}
