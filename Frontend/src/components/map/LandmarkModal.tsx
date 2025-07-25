import React, { useEffect, useState } from "react";
import Modal from "./ModalComponent";
import { useLandmarkModalStore } from "@/store/landmarkStore";
import { Button } from "../ui/button";
import { Calendar, MapPin, Navigation } from "lucide-react";


interface Recommendation {
  name: string;
  category: string;
  description: string;
  city: string;
}

const MarkerModal: React.FC = () => {
  const { isModalOpen, selectedMarker, closeModal, isMarkerNear, distance } =
    useLandmarkModalStore();
  const [showAltContent, setShowAltContent] = useState(false);

  const toggleContent = () => {
    setShowAltContent((prev) => !prev);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setShowAltContent(false);
    }
  }, [isModalOpen]);

  const handleClick = () => {
    // console.log(isMarkerNear);
    if (!isMarkerNear) return; // ignore click if disabled
    toggleContent();
    fetchRecommendations();
  };

  const landmarks = [
    {
      id: 1,
      name: "Candi Borobudur",
      image: "/Images/candi-borobudur.jpg",
      description:
        "Candi Borobudur is a massive 9th-century Buddhist temple located in Central Java, Indonesia. It is one of the greatest Buddhist monuments in the world and a UNESCO World Heritage Site.",
      yearBuilt: "8-9 century AD",
      location: "Magelang, Central Java, Indonesia",
    },
    {
      id: 2,
      name: "Candi Mendut",
      image: "/Images/candi-mendut.jpg",
      description:
        "Candi Mendut is a Buddhist temple located in Central Java, Indonesia. It is smaller than Borobudur but historically and religiously significant, especially as part of a trio of Buddhist temples including Borobudur and Pawon.",
      yearBuilt: "9th century AD",
      location: "Mendut Village, Central Java, Indonesia",
    }
  ]

  const reward = {
    name: "Saron recipe",
    image: "/Images/Item/saron-recipe.png",
    rarity: "rare",
    type: "Recipe",
    description: "The saron is a traditional Indonesian musical instrument, part of the Gamelan ensemble, which is a traditional orchestra."
  };
  
  const landmark = landmarks.find(l => l.id === selectedMarker?.id);

  
  const [place,] = useState("Candi Borobudur");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [, setError] = useState<string | null>(null);

  const fetchRecommendations = async () => {
    if (!place) return;
    setError(null);
    setRecommendations([]);

    try {
      const response = await fetch("http://127.0.0.1:5000/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ place_name: place })
      });

      if (!response.ok) {
        const errData = await response.json();
        setError(errData.error || "Failed to fetch recommendations");
        return;
      }

      const data: Recommendation[] = await response.json();
      setRecommendations(data);
      console.log(data)
    } catch {
      setError("Network error or server not running");
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {selectedMarker && landmark ? (
        <div>
          {!showAltContent ? (
            <div className="relative max-w-md">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={landmark.image || "/placeholder.svg"}
                  alt={landmark.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6 space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {landmark.name}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto"></div>
                </div>

                <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {landmark.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-red-500" />
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Built
                      </span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                      {landmark.yearBuilt}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Navigation className="h-4 w-4 text-red-500" />
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Distance
                      </span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                      {/* {landmark.distance} */}
                      {distance.toFixed(2)} km
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-4 border border-red-100">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Location
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {landmark.location}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  onClick={handleClick}
                  disabled={!isMarkerNear}
                >
                  Get Rewards
                </Button>
                {!isMarkerNear ? (
                  <div className="text-center  red-500">You are too far!</div>

                ) : (<></>)}
              </div>
            </div>
          ) : (
            <div className="max-w-md">
              <div className="p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 left-4 w-8 h-8 bg-red-100 rounded-full"></div>
                <div className="absolute top-8 right-6 w-4 h-4 bg-blue-100 rounded-full"></div>
                <div className="absolute bottom-4 left-8 w-6 h-6 bg-green-100 rounded-full"></div>
                <div className="absolute bottom-6 right-4 w-3 h-3 bg-yellow-50 rounded-full"></div>

                <div className="relative z-10">
                  <h3 className="text-red-600 text-lg font-bold mb-2">
                    Reward Collected!
                  </h3>
                  <p className="text-red-400 text-sm">
                    You've discovered a valuable resource
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-100 rounded-full scale-110 animate-pulse opacity-50"></div>
                    <div className="relative bg-white rounded-full p-4 shadow-lg border-4 border-red-100">
                      <img
                        src={reward.image || "/placeholder.svg"}
                        alt={reward.name}
                        width={80}
                        height={80}
                        className="w-30 h-30 object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {reward.name}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto"></div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-6 border border-red-100 text-center">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Rarity
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-red-600">
                      {reward.rarity}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {reward.description}
                  </p>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  onClick={closeModal}
                >
                  Accept
                </Button>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Recommended Places Nearby
                  </h3>
                  <ul className="space-y-2">
                    {recommendations.slice(0, 5).map((rec, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {rec.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-center space-x-2 pt-2">
            <div
              className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-white border-2 border-red-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-white border-2 border-red-400 rounded-full animate-bounce"
              style={{ animationDelay: "450ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
              style={{ animationDelay: "600ms" }}
            ></div>
          </div>
        </div>
      ) : (
        <p>No marker selected.</p>
      )}
    </Modal>
  );
};

export default MarkerModal;
