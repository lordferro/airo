import { useParams } from "react-router-dom";
import { RecepieDetails } from "../recepieDetails/RecepieDetails";
import { useRecepieStore } from "../../hooks/zustand";
import { useEffect, useState } from "react";

const RecepieDetailsPage = () => {
  const [recepie, setRecepie] = useState(null);
  const { getRecepieById } = useRecepieStore((state) => ({
    getRecepieById: state.getRecepieById,
  }));

  const { recepieId } = useParams();

  useEffect(() => {
    setRecepie(getRecepieById(recepieId));
  }, [getRecepieById, recepieId]);

  return <> {recepie && <RecepieDetails recepie={recepie} />}</>;
};

export default RecepieDetailsPage;
