import { defineField } from "sanity";
import ProductTooltip from "@/sanity/components/hotspots/ProductTooltip";

export default defineField({
  name: "productHotspots",
  title: "Hotspots",
  type: "array",
  of: [
    {
      type: "spot"
    }
  ],
  options: {
    imageHotspot: {
      imagePath: "image",
      tooltip: ProductTooltip,
      pathRoot: "parent"
    }
  }
});
