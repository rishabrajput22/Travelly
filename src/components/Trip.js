import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripCard">
        <TripData
          image={Trip1}
          heading="Trip In Indoneasia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            porttitor tellus. Nunc sit amet accumsan elit, eget dignissim elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Curabitur felis turpis, feugiat mattis nisi
            eget, maximus tristique diam. Phasellus posuere nisi orci, vel
            fringilla neque faucibus id. Praesent bibendum pulvinar tempor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In semper leo vel nulla imperdiet euismod.
            Duis nisl urna, mattis eu purus et, pellentesque tincidunt neque.
            Maecenas et neque est. Praesent mattis ligula vitae leo vulputate
            sagittis id a nunc."
        />
        <TripData
          image={Trip2}
          heading="Trip In Barcelona"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            porttitor tellus. Nunc sit amet accumsan elit, eget dignissim elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Curabitur felis turpis, feugiat mattis nisi
            eget, maximus tristique diam. Phasellus posuere nisi orci, vel
            fringilla neque faucibus id. Praesent bibendum pulvinar tempor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In semper leo vel nulla imperdiet euismod.
            Duis nisl urna, mattis eu purus et, pellentesque tincidunt neque.
            Maecenas et neque est. Praesent mattis ligula vitae leo vulputate
            sagittis id a nunc."
        />
        <TripData
          image={Trip3}
          heading="Trip In Thailand"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            porttitor tellus. Nunc sit amet accumsan elit, eget dignissim elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Curabitur felis turpis, feugiat mattis nisi
            eget, maximus tristique diam. Phasellus posuere nisi orci, vel
            fringilla neque faucibus id. Praesent bibendum pulvinar tempor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In semper leo vel nulla imperdiet euismod.
            Duis nisl urna, mattis eu purus et, pellentesque tincidunt neque.
            Maecenas et neque est. Praesent mattis ligula vitae leo vulputate
            sagittis id a nunc."
        />
      </div>
    </div>
  );
}

export default Trip;
