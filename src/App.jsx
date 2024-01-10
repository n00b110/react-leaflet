import './App.css'
import { MapContainer, TileLayer} from 'react-leaflet'

const pos = [38.8858, -94.5330]


export default function App(){
  return (
    <MapContainer center={pos} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>
  );
}
