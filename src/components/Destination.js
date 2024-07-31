import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours Give you the Opportunity to Explore</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
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
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
      className="first-des-reverse"
        heading="Mount Batur, Indonesia"
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
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
