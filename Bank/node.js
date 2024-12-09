let list = document.getElementById("list");
let hide = document.getElementById("hide");
let links = document.getElementById("links");

hide.style.display = "none";


list.onclick = function () {
  links.style.display = "block";
  list.style.display = "none";
  hide.style.display = "block";
};

hide.onclick = function () {
  links.style.display = "none";
  list.style.display = "block";
  hide.style.display = "none";
};

const lands = [
  {
    id: "0001",
    owner: "John Doe",
    address: "123 Elm St",
    location: "Springfield",
    measurement: "200 sqft",
  },
  {
    id: "0002",
    owner: "Jane Smith",
    address: "456 Maple Rd",
    location: "Shelbyville",
    measurement: "150 sqft",
  },
  {
    id: "0003",
    owner: "Alice Johnson",
    address: "789 Oak Ln",
    location: "Ogdenville",
    measurement: "300 sqft",
  },
  {
    id: "0004",
    owner: "Bob Brown",
    address: "101 Pine St",
    location: "Capitol City",
    measurement: "250 sqft",
  },
  {
    id: "0005",
    owner: "Emma Wilson",
    address: "202 Cedar Ave",
    location: "North Haverbrook",
    measurement: "180 sqft",
  },
  {
    id: "0006",
    owner: "Charlie White",
    address: "303 Birch Blvd",
    location: "Shelbyville",
    measurement: "275 sqft",
  },
  {
    id: "0007",
    owner: "Daisy Green",
    address: "404 Ash Ct",
    location: "Springfield",
    measurement: "220 sqft",
  },
  {
    id: "0008",
    owner: "Ethan Black",
    address: "505 Willow Way",
    location: "Ogdenville",
    measurement: "300 sqft",
  },
  {
    id: "0009",
    owner: "Ada'aku Peter",
    address: "123 Main Street, Benue State",
    location: "Makurdi",
    measurement: "200 x 100m",
  },
  {
    id: "0010",
    owner: "Longs Pemun",
    address: "Elm Street, Jos, Plateau State",
    location: "Rayfield Jos",
    measurement: "500 x 300m",
  },
  {
    id: "0011",
    owner: "Manoah Luka",
    address: "No.7 Sabo, Kaduna State",
    location: "kurmin-Mashi",
    measurement: "300 x 100m",
  },
  {
    id: "0012",
    owner: "Victor Samuel",
    address: "101 Lane, Borno State",
    location: "No.19 Gamboru, Borno state",
    measurement: "700 x 500m",
  },
  {
    id: "0013",
    owner: "Clement Raymond",
    address: "345 Rayfield, Jos Plateau",
    location: "Lapap Mangu",
    measurement: "100 x 100m",
  },
  {
    id: "0014",
    owner: "Meshak A.",
    address: "345 Birch, Jos Plateau State",
    location: "opp. Gen. Hospital, Mangu",
    measurement: "700 x 500m",
  },
  {
    id: "0015",
    owner: "Dakshak Lere",
    address: "No.9 Kwang Street, Jos",
    location: "Ecwa Staff, Jos North",
    measurement: "1000 x 500",
  },
  {
    id: "0016",
    owner: "Promise Obi",
    address: "111 Umunze, Anambara State",
    location: "121 Orumba South, Anambara State",
    measurement: "500 x 500m",
  },
];

document.getElementById("verifyButton").addEventListener("click", (event) => {
  event.preventDefault();

  const landId = document.getElementById("input-landId").value.trim();

  if (!landId) {
    alert("Please enter the land ID");
    return;
  }

  
  const land = lands.find((land) => land.id === landId);

  const detailsDiv = document.getElementById("landDetails");
  if (land) {
    detailsDiv.innerHTML = `
      <button id="closeDetails">Close</button>
      <h3>Land Details</h3>
      <p><strong>ID:</strong> ${land.id}</p>
      <p><strong>Owner:</strong> ${land.owner}</p>
      <p><strong>Address:</strong> ${land.address}</p>
      <p><strong>Location:</strong> ${land.location}</p>
      <p><strong>Measurement:</strong> ${land.measurement}</p>
    `;
    detailsDiv.style.display = "block";

    
    document.getElementById("closeDetails").addEventListener("click", () => {
      detailsDiv.style.display = "none";
    });
  } else {
    detailsDiv.innerHTML = `
      <button id="closeDetails">Close</button>
      <p>No land found with the entered ID.</p>
    `;
    detailsDiv.style.display = "block";

    
    document.getElementById("closeDetails").addEventListener("click", () => {
      detailsDiv.style.display = "none";
    });
  }
});
