const config = {
  style: "mapbox://styles/bereaepg/ckpwsckpf4sb417n33parhieh",
  accessToken:
    "pk.eyJ1IjoiYmVyZWFlcGciLCJhIjoiY2twcHJrdTQ2MDJ1aTJ2bzY4dWhmZG4wayJ9.3cIych-Xcf-apOrR1xlzaw",
  CSV: "./March Map.csv",
  center: [-84.3, 37.6],
  zoom: 7,
  title: "US Bike Route 21",
  description:
    "This route follows US 21 from Cumberland Gap to Maysville. You can search by category (lodging, dining, etc.) by city, or by county.",
  sideBarInfo: ["Location_Name", "Address", "Phone"],
  popupInfo: ["Location_Name", "Address", "Web Site"],
  filters: [
    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Category",
      listItems: [
        "Points of Interest",
        "Lodging",
        "Dining",
        "Outfitters",
        "Cafe",
        "Spirits",
        "Campground",
        "Tours",
        "Culture",
        "Recreation",
        "Parks",
        "Grocery and Gas",
        "Shopping/Retail",
        "Information",
        "Other",
              ],
    },
    {
      type: "checkbox",
      title: "Services available",
      columnHeader: "Services available", // Case sensitive - must match spreadsheet entry
      listItems: ["Restrooms", "Wi-Fi"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "County: ",
      columnHeader: "County",
      listItems: [
        "Bell",
        "Bourbon",
        "Knox",
        "Laurel",
        "Madison",
        "Mason",
        "Nicholas",
        "Robertson",
        "Rockcastle",
      ],
    },
  ],
};
