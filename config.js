const config = {
  style: "mapbox://styles/bereaepg/ckpwsckpf4sb417n33parhieh",
  accessToken:
    "pk.eyJ1IjoiYmVyZWFlcGciLCJhIjoiY2twcHJrdTQ2MDJ1aTJ2bzY4dWhmZG4wayJ9.3cIych-Xcf-apOrR1xlzaw",
  CSV: "./ABR v3.csv",
  center: [-84.3, 37.6],
  zoom: 7,
  title: "Daniel Boone Bike Route 21",
  description:
    "This route follows US 21N from Cumberland Gap to Maysville You can search by category (lodging, dining, etc.) by city, or by county.",
  sideBarInfo: ["Name", "Address", "Phone"],
  popupInfo: ["Name"],
  filters: [
    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Category",
      listItems: [
        "Boone Trace Markers",
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
      title: "Start",
      columnHeader: "City", // Case sensitive - must match spreadsheet entry
      listItems: ["Middlesboro", "London", "Berea", "Maysville"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "checkbox",
      title: "Finish",
      columnHeader: "City", // Case sensitive - must match spreadsheet entry
      listItems: ["Middlesboro", "London", "Berea", "Maysville"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
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
