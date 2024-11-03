import defineStructure from "@/utils/defineStructure";
import { ListItemBuilder } from "sanity/structure";

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Settings")
    .schemaType("settings")
    .child(
      S.editor().title("Settings").schemaType("settings").documentId("settings")
    )
);
