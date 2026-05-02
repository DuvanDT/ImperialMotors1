import ModelCard from "@/components/ModelCard";
const carsData = [
  {
    slug: "lamborghini",
    image: "/images/lamborghini_veneno.png",
    alt: "Lamborghini Collection",
    heritage: "Italy",
    focus: "Raw Emotion",
    name: "Lamborghini",
    description: "lamborghini veneno.",
  },
  
];

export default function lamborghiniPage() {

  return (
    <div>
      <h1>Sección de Carros</h1>
      {carsData.map((car) => (
                        <ModelCard key={car.name} {...car} />
                    ))}
    </div>  );}
