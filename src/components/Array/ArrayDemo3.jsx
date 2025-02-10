import React from "react";

export default function ArrayDemo3() {
  let players = [
    {
      id: 1,
      name: "Virat Kohli",
      age: 35,
      score: 12500,
      gender: "male",
      isActive: 1,
    },
    {
      id: 2,
      name: "Rohit Sharma",
      age: 36,
      score: 11500,
      gender: "male",
      isActive: 1,
    },
    {
      id: 3,
      name: "Smriti Mandhana",
      age: 27,
      score: 4200,
      gender: "female",
      isActive: 1,
    },
    {
      id: 4,
      name: "Harmanpreet Kaur",
      age: 34,
      score: 5000,
      gender: "female",
      isActive: 1,
    },
    {
      id: 5,
      name: "Steve Smith",
      age: 34,
      score: 9500,
      gender: "male",
      isActive: 1,
    },
    {
      id: 6,
      name: "Ellyse Perry",
      age: 33,
      score: 7000,
      gender: "female",
      isActive: 1,
    },
    {
      id: 7,
      name: "Shubman Gill",
      age: 24,
      score: 2800,
      gender: "male",
      isActive: 1,
    },
    {
      id: 8,
      name: "Beth Mooney",
      age: 30,
      score: 3500,
      gender: "female",
      isActive: 1,
    },
  ];
  

  let city = [
    {
      id: 1,
      cityName: "Mumbai",
      Population: 20410,
      AQI: 85,
    },
    {
      id: 2,
      cityName: "Delhi",
      Population: 32800,
      AQI: 310,
    },
    {
      id: 3,
      cityName: "Bangalore",
      Population: 1380000,
      AQI: 65,
    },
    {
      id: 4,
      cityName: "Kolkata",
      Population: 153000,
      AQI: 120,
    },
    {
      id: 5,
      cityName: "Chennai",
      Population: 117000,
      AQI: 75,
    },
    {
      id: 6,
      cityName: "Hyderabad",
      Population: 1100000,
      AQI: 250,
    },
    {
      id: 7,
      cityName: "Ahmedabad",
      Population: 880000,
      AQI: 130,
    },
  ];

  let salesData = [
    {
      id: 1,
      day: "Monday",
      sales: 5000,
      discount: 10,
      profit: 1200,
    },
    {
      id: 2,
      day: "Tuesday",
      sales: 7000,
      discount: 15,
      profit: 1800,
    },
    {
      id: 3,
      day: "Wednesday",
      sales: 4500,
      discount: 5,
      profit: 900,
    },
    {
      id: 4,
      day: "Thursday",
      sales: 8000,
      discount: 20,
      profit: 4500,
    },
    {
      id: 5,
      day: "Friday",
      sales: 6000,
      discount: 12,
      profit: 1500,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Table 1: Players</h2>
      <p style={{ fontSize: "15px", color: "gray", marginBottom: "5px" }}>
        (Players with age &gt; 35 are marked as "Retire Now!!")
      </p>
      <table className="table table-striped table-hover table-bordered border-primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Score</th>
            <th>Gender</th>
            <th>isActive</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.age >= 35 ? "Retire Now!!" : player.age}</td>
              <td>{player.score}</td>
              <td>{player.gender}</td>
              <td>{player.isActive === 0 ? "False" : "True"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Table 2: City</h2>
      <p style={{ fontSize: "15px", color: "gray", marginBottom: "5px" }}>
        (Population &gt; 200,000 is <span style={{ color: "red" }}>red</span>,
        AQI &gt; 300 is
        <span
          style={{
            color: "red",
          }}
        >
          {" "}
          red
        </span>
        , AQI &lt; 200 is <span style={{ color: "green" }}>green</span>)
      </p>
      <table className="table table-success table-striped-columns table-hover table-bordered border-primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>City Name</th>
            <th>Population</th>
            <th>AQI</th>
          </tr>
        </thead>
        <tbody>
          {city.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.cityName}</td>
              <td style={{ backgroundColor: city.Population > 200000 ? "red" : "" }}>
                {city.Population}
              </td>
              <td
                style={{
                  backgroundColor:
                    city.AQI > 300 ? "red" : city.AQI < 200 ? "green" : "",
                }}
              >
                {city.AQI}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table 3: Sales Data */}
      <h2>Table 3: Sales Data</h2>
      <p style={{ fontSize: "15px", color: "gray", marginBottom: "5px" }}>
        (Profit &gt; 50% of sales is{" "}
        <span style={{ backgroundColor: "green" }}>green</span>)
      </p>
      <table className="table table-dark table-hover table-bordered border-primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Day</th>
            <th>Sales</th>
            <th>Discount</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sales) => (
            <tr key={sales.id}>
              <td>{sales.id}</td>
              <td>{sales.day}</td>
              <td>{sales.sales}</td>
              <td>{sales.discount}%</td>
              <td
                style={{
                  backgroundColor: sales.profit / sales.sales > 0.5 ? "green" : "black",
                }}
              >
                {sales.profit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
