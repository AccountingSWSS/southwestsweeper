import type { ImageMetadata } from "astro";

interface RentalItem {
  title: string;
  description: string;
  source: string;
  visual: ImageMetadata;
}

export const rentalsSection = {
  title: "Rentals",
  subheading1_1: "Give us a call at (602) 678-0496 / ",
  subheading1_2: "Monday - Friday: 7:00am - 4:00pm",
  rentals: [] as RentalItem[],
};