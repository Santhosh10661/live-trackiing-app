import MapView, { Marker } from "react-native-maps";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

export default function TrackingScreen() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const locationRef = ref(db, "delivery/DELIVERY_123");

    const unsubscribe = onValue(locationRef, (snapshot) => {
      setLocation(snapshot.val());
    });

    return () => unsubscribe();
  }, []);

  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: location.lat,
          longitude: location.lng,
        }}
        title="Delivery Partner"
      />
    </MapView>
  );
}
